/**
 * FILE: features/address/hooks.js
 * 
 * Đây là file định nghĩa custom hooks để component dễ dàng truy cập state từ Redux store.
 * Custom hook là cách tốt nhất để component tương tác với Redux.
 * 
 * CUSTOM HOOK LÀ GÌ?
 * - Function bắt đầu bằng "use" (theo convention của React)
 * - Có thể sử dụng các React hooks bên trong (useSelector, useState, useEffect...)
 * - Giúp tái sử dụng logic giữa các component
 * - Che giấu chi tiết implementation, component chỉ cần gọi hook
 * 
 * TẠI SAO CẦN CUSTOM HOOK?
 * - Tách biệt logic Redux khỏi component
 * - Component không cần biết cấu trúc state (state.address.provinces)
 * - Dễ test: test hook riêng, test component riêng
 * - Dễ refactor: đổi cấu trúc state chỉ cần sửa hook
 * - Code component sạch hơn, dễ đọc hơn
 */

// Import useSelector từ react-redux
// useSelector là hook để đọc state từ Redux store
import { useSelector } from "react-redux";

/**
 * CUSTOM HOOK: useProvinces
 * 
 * Hook này trả về danh sách tỉnh/thành phố từ Redux store.
 * Component chỉ cần gọi useProvinces() là có thể dùng danh sách tỉnh/thành phố.
 * 
 * @returns {Array} Mảng các tỉnh/thành phố từ Redux store
 * 
 * CÁCH HOẠT ĐỘNG:
 * - useSelector nhận selector function: (state) => state.address.provinces
 * - Selector function "chọn" phần state cần lấy (state.address.provinces)
 * - useSelector tự động subscribe vào store
 * - Khi state.address.provinces thay đổi, component sẽ re-render
 * 
 * CÁCH SỬ DỤNG TRONG COMPONENT:
 * ```jsx
 * function ProvinceList() {
 *     const provinces = useProvinces();  // Lấy danh sách tỉnh/thành phố
 *     return <div>{provinces.map(...)}</div>;
 * }
 * ```
 * 
 * LỢI ÍCH:
 * - Component không cần biết cấu trúc state (state.address.provinces)
 * - Nếu đổi cấu trúc state, chỉ cần sửa hook này
 * - Có thể thêm logic (filter, sort) trong hook mà không ảnh hưởng component
 * - Dễ test: mock useSelector trong test
 */
export function useProvinces() {
    // useSelector: Hook để đọc state từ Redux store
    // Selector function: (state) => state.address.provinces
    //   - Nhận vào toàn bộ state của app
    //   - Trả về phần state cần lấy (state.address.provinces)
    //   - useSelector tự động subscribe, component sẽ re-render khi state thay đổi
    const data = useSelector((state) => state.address.provinces);
    
    // Trả về danh sách tỉnh/thành phố để component sử dụng
    return data;
}
