/**
 * FILE: App.jsx
 * 
 * Đây là component chính của ứng dụng, chịu trách nhiệm thiết lập routing (điều hướng).
 * Component này sử dụng React Router để quản lý các trang (pages) khác nhau trong ứng dụng.
 * 
 * REACT ROUTER LÀ GÌ?
 * - React Router là thư viện giúp tạo Single Page Application (SPA)
 * - Cho phép điều hướng giữa các trang mà không cần reload trang
 * - URL thay đổi nhưng chỉ render component tương ứng, không reload toàn bộ trang
 * 
 * TẠI SAO CẦN REACT ROUTER?
 * - Tạo ứng dụng có nhiều trang (Home, About, Contact...)
 * - URL thay đổi khi chuyển trang (user có thể bookmark, share link)
 * - Trải nghiệm người dùng tốt hơn (không reload trang)
 * - Browser history hoạt động bình thường (back/forward button)
 */

// Import các component từ react-router
// BrowserRouter (đổi tên thành Router): Component cung cấp routing context
// Routes: Component chứa tất cả các route
// Route: Component định nghĩa một route cụ thể
import { BrowserRouter as Router, Routes, Route } from "react-router";

// Import các page components
import Home from "./pages/Home";
import Provinces from "./pages/Address/Provinces";

/**
 * APP COMPONENT
 * 
 * Component này là root component của ứng dụng, thiết lập routing.
 * Tất cả component khác sẽ được render bên trong Router này.
 * 
 * CẤU TRÚC ROUTING:
 * - <Router>: Bọc toàn bộ ứng dụng, cung cấp routing context
 * - <Routes>: Chứa tất cả các route definitions
 * - <Route>: Định nghĩa một route cụ thể
 *   - index: Route mặc định khi vào "/"
 *   - path: Đường dẫn URL (ví dụ: "/provinces")
 *   - element: Component sẽ được render khi match route
 * 
 * CÁCH HOẠT ĐỘNG:
 * 1. User truy cập URL (ví dụ: "/provinces")
 * 2. React Router kiểm tra Routes để tìm Route match
 * 3. Render component tương ứng (ví dụ: <Provinces />)
 * 4. URL thay đổi nhưng không reload trang
 * 
 * VÍ DỤ ROUTING:
 * - URL: "/" → Render <Home />
 * - URL: "/provinces" → Render <Provinces />
 * - URL khác → Không match, không render gì (có thể thêm 404 page)
 * 
 * LỢI ÍCH:
 * - Tổ chức code rõ ràng: mỗi route = một page component
 * - Dễ maintain: thêm/xóa route chỉ cần sửa ở đây
 * - SEO friendly: mỗi route có URL riêng
 * - User experience tốt: không reload trang khi chuyển route
 */
function App() {
    return (
        // BrowserRouter: Component cung cấp routing context cho toàn bộ app
        // TẠI SAO CẦN Router? Để các component con có thể dùng useNavigate, useLocation...
        <Router>
            {/* Routes: Component chứa tất cả route definitions
                React Router sẽ match URL với các Route bên trong */}
            <Routes>
                {/* Route index: Route mặc định khi vào "/"
                    Khi user vào "/", sẽ render <Home /> component */}
                <Route index element={<Home />} />
                
                {/* Route "/provinces": Khi URL là "/provinces", render <Provinces /> component
                    Ví dụ: user vào "http://localhost:3000/provinces" → render Provinces */}
                <Route path="/provinces" element={<Provinces />} />
            </Routes>
        </Router>
    );
}

// Export App component để main.jsx import và render
export default App;
