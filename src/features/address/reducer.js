/**
 * FILE: features/address/reducer.js
 * 
 * Đây là file định nghĩa reducer cho feature address.
 * Reducer là function quyết định state thay đổi như thế nào khi nhận action.
 * 
 * REDUCER LÀ GÌ?
 * - Reducer là pure function nhận (state hiện tại, action) và trả về state mới
 * - Reducer KHÔNG BAO GIỜ thay đổi state cũ (immutability)
 * - Reducer phải là pure function: không có side effect, cùng input → cùng output
 * 
 * TẠI SAO CẦN IMMUTABILITY?
 * - React Redux cần so sánh state cũ và mới để biết khi nào re-render
 * - Nếu mutate state cũ, React không biết state đã thay đổi
 * - Luôn tạo object/array mới thay vì sửa object/array cũ
 * 
 * CÁCH HOẠT ĐỘNG:
 * 1. Component dispatch action → store nhận action
 * 2. Store gọi reducer với (state hiện tại, action)
 * 3. Reducer kiểm tra action.type và trả về state mới
 * 4. Store cập nhật state = state mới
 * 5. Component đăng ký state đó sẽ được re-render
 */

// Import action type constant
import { SET_PROVINCES } from "./consts";

/**
 * INITIAL STATE: State ban đầu của feature address
 * 
 * initState định nghĩa cấu trúc và giá trị mặc định của state
 * Khi app khởi động, state.address sẽ có giá trị này
 * 
 * CẤU TRÚC:
 * {
 *     provinces: []  // Mảng rỗng để lưu danh sách tỉnh/thành phố
 * }
 */
const initState = {
    provinces: [],
};

/**
 * REDUCER FUNCTION
 * 
 * @param {Object} state - State hiện tại của feature address (mặc định là initState)
 * @param {Object} action - Action object được dispatch (có type và payload)
 * @returns {Object} State mới (không bao giờ mutate state cũ)
 * 
 * CÁCH HOẠT ĐỘNG:
 * - Switch case kiểm tra action.type để biết xử lý action nào
 * - Mỗi case trả về state mới bằng cách spread state cũ và cập nhật phần cần thiết
 * - Default case: trả về state cũ nếu không match action nào (action không liên quan)
 */
function reducer(state = initState, action) {
    // Switch case để xử lý các action type khác nhau
    switch (action.type) {
        // Case SET_PROVINCES: Cập nhật danh sách tỉnh/thành phố
        case SET_PROVINCES:
            // TẠI SAO DÙNG SPREAD OPERATOR (...state)?
            // - Tạo object mới thay vì mutate object cũ
            // - Giữ nguyên các field khác (nếu có) trong state
            // - Chỉ cập nhật field "provinces" với giá trị mới từ action.payload
            return {
                ...state,                // Copy tất cả field từ state cũ
                provinces: action.payload, // Cập nhật field "provinces" với dữ liệu mới
            };
        
        // Default case: Action không liên quan đến address feature
        // Trả về state cũ không thay đổi
        // TẠI SAO CẦN DEFAULT? Vì Redux dispatch action đến TẤT CẢ reducer
        // Reducer này chỉ xử lý action của address, action khác thì bỏ qua
        default:
            return state;
    }
}

// Export reducer để rootReducer import và combine
export default reducer;
