/**
 * FILE: features/product/consts.js
 * 
 * Đây là file định nghĩa các hằng số (constants) cho Redux actions của feature product.
 * Action type là string định danh duy nhất cho mỗi action trong Redux.
 * 
 * ACTION TYPE LÀ GÌ?
 * - Action type là string mô tả "hành động" nào đang được thực hiện
 * - Redux dùng action type để biết reducer nào cần xử lý
 * - Ví dụ: "SET_ITEMS" nghĩa là "đặt danh sách sản phẩm"
 * 
 * TẠI SAO CẦN NAMESPACE?
 * - Nhiều feature có thể có action type cùng tên (ví dụ: SET_ITEMS)
 * - Namespace giúp phân biệt action của feature nào
 * - "product/setItems" khác với "address/setItems"
 * - Tránh conflict và dễ debug hơn
 * 
 * LỢI ÍCH:
 * - Tập trung quản lý action types ở một nơi
 * - Dễ refactor: đổi tên chỉ cần sửa ở đây
 * - Tránh lỗi typo: dùng constant thay vì string trực tiếp
 * - IDE có thể autocomplete và check lỗi
 */

// NAMESPACE: Tiền tố để phân biệt action của feature này với feature khác
// Tất cả action type của product sẽ bắt đầu bằng "product/"
const NAMESPACE = "product";

/**
 * SET_ITEMS: Action type để cập nhật danh sách sản phẩm
 * 
 * Template string `${NAMESPACE}/setItems` tạo ra: "product/setItems"
 * 
 * CÁCH SỬ DỤNG:
 * - Import vào actions.js để tạo action
 * - Import vào reducer.js để xử lý action này
 * - Khi dispatch action, Redux sẽ match type này với case trong reducer
 */
export const SET_ITEMS = `${NAMESPACE}/setItems`;
