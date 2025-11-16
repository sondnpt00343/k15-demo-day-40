/**
 * FILE: services/address/hooks.js
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

// Import custom hook và actions từ feature address
import { actions, useProvinces } from "@/features/address";

// Import API service function
import { getProvinces } from "./services";

/**
 * CUSTOM HOOK: useFetchProvinces
 * 
 * Hook này tự động fetch danh sách tỉnh/thành phố từ API khi component mount,
 * lưu vào Redux store, và trả về loading state cùng danh sách tỉnh/thành phố.
 * 
 * @returns {Object} Object chứa isLoading và data
 *   - isLoading: boolean - đang tải data hay không
 *   - data: Array - danh sách tỉnh/thành phố từ Redux store
 * 
 * CÁCH HOẠT ĐỘNG:
 * 1. Component mount → useEffect chạy
 * 2. Gọi getProvinces() để fetch data từ API
 * 3. Dispatch action setProvinces() để lưu data vào Redux store
 * 4. Set isLoading = false
 * 5. useProvinces() đọc data từ store và trả về
 * 
 * CÁCH SỬ DỤNG TRONG COMPONENT:
 * ```jsx
 * function ProvinceList() {
 *     const { isLoading, data: provinces } = useFetchProvinces();
 *     
 *     if (isLoading) return <div>Loading...</div>;
 *     return <div>{provinces.map(...)}</div>;
 * }
 * ```
 * 
 * LỢI ÍCH:
 * - Component không cần biết chi tiết fetch logic
 * - Tự động quản lý loading state
 * - Data được lưu vào Redux, có thể dùng ở component khác
 * - Dễ test: mock hook này
 */
export function useFetchProvinces() {
    // useState: Quản lý loading state
    // isLoading = true khi đang fetch data, false khi đã xong
    const [isLoading, setIsLoading] = useState(true);
    
    // useDispatch: Hook để dispatch action vào Redux store
    const dispatch = useDispatch();
    
    // useProvinces: Custom hook để đọc danh sách tỉnh/thành phố từ Redux store
    // data sẽ tự động update khi store thay đổi
    const data = useProvinces();

    // useEffect: Hook chạy side effect (gọi API) khi component mount
    // Dependency array [dispatch, setIsLoading]: chỉ chạy lại nếu dispatch hoặc setIsLoading thay đổi
    // Trong thực tế, dispatch và setIsLoading không đổi, nên chỉ chạy 1 lần khi mount
    useEffect(() => {
        // IIFE (Immediately Invoked Function Expression): async function tự gọi ngay
        // TẠI SAO DÙNG IIFE? Vì useEffect không thể nhận async function trực tiếp
        // Phải wrap async function trong IIFE hoặc định nghĩa function riêng
        (async () => {
            // Gọi API để lấy danh sách tỉnh/thành phố
            const response = await getProvinces();
            
            // Dispatch action để lưu data vào Redux store
            // actions.setProvinces() tạo action, dispatch() gửi action đến store
            // Store sẽ gọi reducer để cập nhật state
            dispatch(actions.setProvinces(response.data));
            
            // Set loading = false vì đã fetch xong
            setIsLoading(false);
        })();
    }, [dispatch, setIsLoading]); // Dependency array: chỉ chạy khi mount hoặc dependencies thay đổi

    // Trả về loading state và danh sách tỉnh/thành phố để component sử dụng
    return { isLoading, data };
}
