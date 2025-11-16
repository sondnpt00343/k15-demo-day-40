/**
 * FILE: store/index.js
 * 
 * Đây là file tạo Redux store - trung tâm quản lý state toàn cục của ứng dụng.
 * Store giống như một "kho lưu trữ" chứa tất cả state mà nhiều component cần dùng chung.
 * 
 * REDUX STORE LÀ GÌ?
 * - Store là nơi lưu trữ toàn bộ state của ứng dụng
 * - Chỉ có MỘT store duy nhất trong toàn bộ ứng dụng (single source of truth)
 * - Component có thể đọc state từ store và dispatch action để thay đổi state
 * 
 * TẠI SAO CẦN REDUX?
 * - Quản lý state phức tạp dễ dàng hơn
 * - Tránh "prop drilling" (truyền props qua nhiều component)
 * - State có thể truy cập từ bất kỳ component nào
 * - Dễ debug vì mọi thay đổi state đều đi qua store
 */

// Import legacy_createStore từ Redux
// "legacy" nghĩa là cách cũ, nhưng vẫn được dùng phổ biến
// Redux Toolkit (RTK) là cách mới hơn, nhưng dự án này dùng cách cơ bản để học
import { legacy_createStore } from "redux";

// Import rootReducer - reducer tổng hợp tất cả reducer con
// Reducer là function quyết định state thay đổi như thế nào khi nhận action
import rootReducer from "./rootReducer";

/**
 * TẠO REDUX STORE
 * 
 * legacy_createStore(rootReducer)
 *   - Tạo một Redux store mới
 *   - Nhận vào rootReducer để biết cách quản lý state
 *   - Store sẽ tự động gọi rootReducer khi có action được dispatch
 * 
 * Store có các method quan trọng:
 *   - store.getState(): Lấy state hiện tại
 *   - store.dispatch(action): Gửi action để thay đổi state
 *   - store.subscribe(listener): Lắng nghe thay đổi state (ít dùng trong React)
 */
const store = legacy_createStore(rootReducer);

/**
 * GÁN STORE VÀO WINDOW OBJECT (CHỈ ĐỂ DEBUG)
 * 
 * window.store = store
 *   - Gán store vào biến global window để có thể truy cập từ Console trình duyệt
 *   - LỢI ÍCH: Có thể debug bằng cách gõ window.store.getState() trong Console
 *   - Có thể xem state hiện tại, dispatch action thủ công để test
 *   - LƯU Ý: Chỉ nên dùng trong development, không nên để trong production
 */
window.store = store;

// Export store để các file khác có thể import và sử dụng
// File main.jsx sẽ import store này và truyền vào ReduxProvider
export { store };

/**
 * CẤU TRÚC STATE TRONG REDUX
 * 
 * Có 2 cách tổ chức state:
 * 
 * Option 1: Flat structure (cấu trúc phẳng)
 * {
 *     products: [],
 *     productDetail: {},
 *     users: [],
 *     posts: [],
 *     comments: []
 * }
 * - Tất cả state ở cùng một level
 * - Đơn giản nhưng khó quản lý khi có nhiều feature
 * 
 * Option 2: Feature-based structure (cấu trúc theo feature) - ĐANG DÙNG
 * {
 *     product: {
 *         products: [],
 *         productDetail: {}
 *     },
 *     address: {
 *         provinces: []
 *     }
 * }
 * - Mỗi feature có namespace riêng
 * - Dễ quản lý, dễ mở rộng
 * - Tránh conflict tên biến giữa các feature
 * - Đây là cách tốt nhất cho dự án lớn
 */
