/**
 * FILE: main.jsx
 * 
 * Đây là file entry point (điểm vào) của ứng dụng React.
 * File này có nhiệm vụ khởi tạo và render ứng dụng React vào DOM của trình duyệt.
 * 
 * TẠI SAO CẦN FILE NÀY?
 * - React cần một điểm bắt đầu để "gắn" ứng dụng vào HTML
 * - Đây là nơi kết nối React với Redux store (kho lưu trữ state toàn cục)
 * - Tất cả các component trong app sẽ được render từ đây
 */

// Import createRoot từ react-dom/client - đây là cách hiện đại để render React app
// createRoot cho phép React quản lý DOM hiệu quả hơn so với cách cũ (ReactDOM.render)
import { createRoot } from "react-dom/client";

// Import Provider từ react-redux - đây là component đặc biệt để "cung cấp" Redux store
// Provider giống như một "nhà cung cấp" - nó cung cấp store cho tất cả component con
// TẠI SAO CẦN Provider? Vì Redux store cần được truyền xuống tất cả component thông qua Context API
import { Provider as ReduxProvider } from "react-redux";

// Import store - đây là Redux store chứa toàn bộ state của ứng dụng
// Store là nơi lưu trữ state toàn cục, có thể truy cập từ bất kỳ component nào
import { store } from "./store";

// Import App component - component chính của ứng dụng
import App from "./App";

/**
 * KHỞI TẠO VÀ RENDER ỨNG DỤNG
 * 
 * createRoot(document.getElementById("root")) 
 * - Tìm element có id="root" trong file index.html
 * - Tạo một React root để quản lý việc render
 * 
 * .render() 
 * - Render component vào DOM
 * - Chỉ gọi một lần khi app khởi động
 * 
 * <ReduxProvider store={store}>
 *   - Bọc App component trong ReduxProvider
 *   - Truyền store vào Provider thông qua prop "store"
 *   - TẠI SAO CẦN BỌC? Để tất cả component con có thể truy cập Redux store
 *   - LỢI ÍCH: Không cần truyền store qua props từng component một
 * 
 * <App />
 *   - Component chính của ứng dụng
 *   - Tất cả component khác sẽ được render bên trong App
 */
createRoot(document.getElementById("root")).render(
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>
);
