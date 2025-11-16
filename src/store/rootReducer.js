/**
 * FILE: store/rootReducer.js
 * 
 * Đây là file kết hợp (combine) tất cả reducer con thành một root reducer duy nhất.
 * Redux chỉ chấp nhận MỘT reducer cho store, nên phải combine nhiều reducer lại.
 * 
 * REDUCER LÀ GÌ?
 * - Reducer là function nhận vào (state hiện tại, action) và trả về state mới
 * - Reducer quyết định state thay đổi như thế nào khi nhận action
 * - Reducer phải là pure function (không có side effect, không mutate state cũ)
 * 
 * TẠI SAO CẦN COMBINE REDUCERS?
 * - Ứng dụng có nhiều feature (product, address, user...)
 * - Mỗi feature có reducer riêng để quản lý state của nó
 * - combineReducers giúp gộp tất cả lại thành một reducer lớn
 * - Mỗi reducer con chỉ quản lý một phần state (ví dụ: product reducer chỉ quản lý state.product)
 */

// Import combineReducers từ Redux - function để kết hợp nhiều reducer
import { combineReducers } from "redux";

// Import các reducer từ các feature module
// "as productReducer" đổi tên để tránh conflict nếu có nhiều reducer cùng tên "reducer"
import { reducer as productReducer } from "@/features/product";
import { reducer as addressReducer } from "@/features/address";

/**
 * TẠO ROOT REDUCER
 * 
 * combineReducers({
 *     product: productReducer,
 *     address: addressReducer,
 * })
 * 
 * CÁCH HOẠT ĐỘNG:
 * - Khi có action được dispatch, combineReducers sẽ gọi TẤT CẢ reducer con
 * - Mỗi reducer con nhận state của nó (state.product, state.address)
 * - Mỗi reducer con trả về state mới của nó
 * - combineReducers gộp tất cả state lại thành object lớn
 * 
 * KẾT QUẢ STATE:
 * {
 *     product: { ... },  // từ productReducer
 *     address: { ... }   // từ addressReducer
 * }
 * 
 * LỢI ÍCH:
 * - Tách biệt logic: mỗi feature quản lý state riêng
 * - Dễ bảo trì: sửa product không ảnh hưởng address
 * - Dễ mở rộng: thêm feature mới chỉ cần thêm reducer vào đây
 * - Code tổ chức rõ ràng, dễ hiểu
 */
const rootReducer = combineReducers({
    product: productReducer,   // State cho feature product
    address: addressReducer,   // State cho feature address
});

// Export rootReducer để store/index.js import và sử dụng
export default rootReducer;
