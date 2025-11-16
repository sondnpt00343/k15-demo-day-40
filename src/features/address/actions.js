/**
 * FILE: features/address/actions.js
 * 
 * Đây là file định nghĩa các action creators cho feature address.
 * Action creators là functions tạo ra action objects để dispatch đến Redux store.
 * 
 * ACTION LÀ GÌ?
 * - Action là object mô tả "điều gì đã xảy ra" trong ứng dụng
 * - Action có 2 phần: type (bắt buộc) và payload (dữ liệu kèm theo)
 * - Action không thay đổi state trực tiếp, chỉ mô tả ý định thay đổi
 * 
 * ACTION CREATOR LÀ GÌ?
 * - Function tạo ra action object
 * - Giúp code nhất quán, dễ test, dễ refactor
 * - Thay vì viết object trực tiếp, dùng function để tạo
 * 
 * TẠI SAO CẦN ACTION CREATORS?
 * - Đảm bảo cấu trúc action đúng (có type, có payload)
 * - Dễ test: có thể test function thay vì object
 * - Dễ refactor: đổi cấu trúc action chỉ cần sửa ở đây
 * - Có thể thêm logic (validation, transformation) trước khi tạo action
 */

// Import action type constant từ consts.js
import { SET_PROVINCES } from "./consts";

/**
 * ACTION CREATOR: setProvinces
 * 
 * Function này tạo action để cập nhật danh sách tỉnh/thành phố trong Redux store.
 * 
 * @param {Array} payload - Mảng các tỉnh/thành phố cần lưu vào store
 * @returns {Object} Action object với type và payload
 * 
 * CẤU TRÚC ACTION OBJECT:
 * {
 *     type: "address/setProvinces",  // Action type từ consts.js
 *     payload: [...]                  // Dữ liệu tỉnh/thành phố
 * }
 * 
 * CÁCH SỬ DỤNG:
 * - Trong component: dispatch(actions.setProvinces([...provinces]))
 * - Hoặc trong service hook: dispatch(actions.setProvinces(response.data))
 * 
 * LỢI ÍCH:
 * - Code ngắn gọn: setProvinces([...]) thay vì { type: SET_PROVINCES, payload: [...] }
 * - Type-safe: IDE có thể check lỗi
 * - Dễ đọc: tên function mô tả rõ mục đích
 */
export const setProvinces = (payload) => ({
    type: SET_PROVINCES,  // Action type - reducer sẽ dùng để match case
    payload,              // Dữ liệu kèm theo - ES6 shorthand cho payload: payload
});
