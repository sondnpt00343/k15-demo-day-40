/**
 * FILE: services/product/hooks.js
 *
 * Đây là file định nghĩa custom hooks để fetch data từ API và lưu vào Redux store.
 * Hook này kết hợp logic gọi API, quản lý loading state, và dispatch action.
 *
 * CUSTOM HOOK CHO API LÀ GÌ?
 * - Hook kết hợp useEffect, useState, và useDispatch
 * - Tự động fetch data khi component mount
 * - Quản lý loading state
 * - Dispatch action để lưu data vào Redux store
 *
 * TẠI SAO CẦN HOOK NÀY?
 * - Tách biệt logic fetch data khỏi component
 * - Component chỉ cần gọi hook, không cần biết chi tiết
 * - Tái sử dụng logic fetch ở nhiều component
 * - Dễ test: mock hook thay vì mock toàn bộ logic
 */

// Import React hooks: useEffect để gọi API khi component mount, useState để quản lý loading
import { useEffect, useState } from "react";

// Import useDispatch từ react-redux để dispatch action vào Redux store
import { useDispatch } from "react-redux";

// Import custom hook và actions từ feature product
import { useProducts, actions } from "@/features/product";

// Import API service function
import { getProducts } from "./services";

/**
 * CUSTOM HOOK: useFetchProducts
 *
 * Hook này tự động fetch danh sách sản phẩm từ API khi component mount,
 * lưu vào Redux store, và trả về loading state cùng danh sách sản phẩm.
 *
 * @returns {Object} Object chứa isLoading và data
 *   - isLoading: boolean - đang tải data hay không
 *   - data: Array - danh sách sản phẩm từ Redux store
 *
 * CÁCH HOẠT ĐỘNG:
 * 1. Component mount → useEffect chạy
 * 2. Gọi getProducts() để fetch data từ API
 * 3. Dispatch action setItems() để lưu data vào Redux store
 * 4. Set isLoading = false
 * 5. useProducts() đọc data từ store và trả về
 *
 * CÁCH SỬ DỤNG TRONG COMPONENT:
 * ```jsx
 * function ProductList() {
 *     // Cách 1: Dùng trực tiếp tên "data"
 *     const { isLoading, data } = useFetchProducts();
 *     return <div>{data.map(...)}</div>;
 *
 *     // Cách 2: Rename khi destructure để code rõ ràng hơn
 *     const { isLoading, data: products } = useFetchProducts();
 *     return <div>{products.map(...)}</div>;
 * }
 * ```
 *
 * TẠI SAO TRẢ VỀ "data" THAY VÌ "products"?
 * - Nhất quán với các hook khác (useFetchProvinces cũng trả về "data")
 * - Component có thể rename khi destructure nếu muốn: { data: products }
 * - Linh hoạt hơn: có thể dùng tên phù hợp với context
 *
 * LỢI ÍCH:
 * - Component không cần biết chi tiết fetch logic
 * - Tự động quản lý loading state
 * - Data được lưu vào Redux, có thể dùng ở component khác
 * - Dễ test: mock hook này
 */
export function useFetchProducts() {
    // useState: Quản lý loading state
    // isLoading = true khi đang fetch data, false khi đã xong
    const [isLoading, setIsLoading] = useState(true);

    // useDispatch: Hook để dispatch action vào Redux store
    const dispatch = useDispatch();

    // useProducts: Custom hook để đọc danh sách sản phẩm từ Redux store
    // data sẽ tự động update khi store thay đổi
    // Tên "data" nhất quán với các hook khác, component có thể rename khi destructure
    const data = useProducts();

    // useEffect: Hook chạy side effect (gọi API) khi component mount
    // Dependency array [dispatch, setIsLoading]: chỉ chạy lại nếu dispatch hoặc setIsLoading thay đổi
    // Trong thực tế, dispatch và setIsLoading không đổi, nên chỉ chạy 1 lần khi mount
    useEffect(() => {
        // IIFE (Immediately Invoked Function Expression): async function tự gọi ngay
        // TẠI SAO DÙNG IIFE? Vì useEffect không thể nhận async function trực tiếp
        // Phải wrap async function trong IIFE hoặc định nghĩa function riêng
        (async () => {
            // Gọi API để lấy danh sách sản phẩm
            // response đã được interceptor xử lý, có cấu trúc giống API endpoint response
            // Ví dụ: { data: { items: [...] } } thay vì { data: { data: { items: [...] } } }
            const response = await getProducts();

            // Dispatch action để lưu data vào Redux store
            // actions.setItems() tạo action, dispatch() gửi action đến store
            // Store sẽ gọi reducer để cập nhật state
            // response.data.items: Truy cập items từ response (không cần response.data.data.items)
            dispatch(actions.setItems(response.data.items));

            // Set loading = false vì đã fetch xong
            setIsLoading(false);
        })();
    }, [dispatch, setIsLoading]); // Dependency array: chỉ chạy khi mount hoặc dependencies thay đổi

    // Trả về loading state và danh sách sản phẩm (dưới tên "data") để component sử dụng
    // Component có thể dùng trực tiếp "data" hoặc rename khi destructure: { data: products }
    return { isLoading, data };
}
