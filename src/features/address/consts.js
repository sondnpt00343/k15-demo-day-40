/**
 * FILE: features/address/consts.js
 * 
 * Đây là file định nghĩa các hằng số (constants) cho Redux actions của feature address.
 * Action type là string định danh duy nhất cho mỗi action trong Redux.
 * 
 * ACTION TYPE LÀ GÌ?
 * - Action type là string mô tả "hành động" nào đang được thực hiện
 * - Redux dùng action type để biết reducer nào cần xử lý
 * - Ví dụ: "SET_PROVINCES" nghĩa là "đặt danh sách tỉnh/thành phố"
 * 
 * TẠI SAO CẦN NAMESPACE?
 * - Nhiều feature có thể có action type cùng tên (ví dụ: SET_ITEMS)
 * - Namespace giúp phân biệt action của feature nào
 * - "address/setProvinces" khác với "product/setItems"
 * - Tránh conflict và dễ debug hơn
 * 
 * LỢI ÍCH:
 * - Tập trung quản lý action types ở một nơi
 * - Dễ refactor: đổi tên chỉ cần sửa ở đây
 * - Tránh lỗi typo: dùng constant thay vì string trực tiếp
 * - IDE có thể autocomplete và check lỗi
 */

// NAMESPACE: Tiền tố để phân biệt action của feature này với feature khác
// Tất cả action type của address sẽ bắt đầu bằng "address/"
const NAMESPACE = "address";

/**
 * SET_PROVINCES: Action type để cập nhật danh sách tỉnh/thành phố
 * 
 * Template string `${NAMESPACE}/setProvinces` tạo ra: "address/setProvinces"
 * 
 * CÁCH SỬ DỤNG:
 * - Import vào actions.js để tạo action
 * - Import vào reducer.js để xử lý action này
 * - Khi dispatch action, Redux sẽ match type này với case trong reducer
 */
export const SET_PROVINCES = `${NAMESPACE}/setProvinces`;
