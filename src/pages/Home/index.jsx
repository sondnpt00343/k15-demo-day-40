/**
 * FILE: pages/Home/index.jsx
 *
 * Đây là page component hiển thị trang chủ với danh sách sản phẩm.
 * Component này sử dụng custom hook để fetch data và hiển thị với conditional rendering.
 *
 * PAGE COMPONENT LÀ GÌ?
 * - Component đại diện cho một trang trong ứng dụng
 * - Thường được định nghĩa trong App.jsx routing
 * - Có thể chứa nhiều component con khác
 * - Quản lý state và logic của trang đó
 *
 * COMPONENT STRUCTURE:
 * - Function component: function trả về JSX
 * - Sử dụng hooks để lấy data và quản lý state
 * - Render UI dựa trên data và state
 */

// Import custom hook để fetch danh sách sản phẩm
// Hook này tự động gọi API, lưu vào Redux, và trả về loading state + data
import { useFetchProducts } from "@/services/product";

/**
 * HOME COMPONENT
 *
 * Component này hiển thị trang chủ với danh sách sản phẩm.
 *
 * CÁCH HOẠT ĐỘNG:
 * 1. Component mount → useFetchProducts() tự động gọi API
 * 2. Hiển thị "Loading..." khi đang fetch
 * 3. Khi có data → hiển thị danh sách sản phẩm
 *
 * REACT CONCEPTS SỬ DỤNG:
 * - Custom hooks: useFetchProducts()
 * - Conditional rendering: isLoading ? ... : ...
 * - Array.map(): Render danh sách
 * - Key prop: Giúp React identify các element trong list
 */
function Home() {
    // useFetchProducts(): Custom hook tự động fetch data từ API
    // Hook này trả về { isLoading, data }
    // isLoading: boolean - đang tải hay không
    // data: Array - danh sách sản phẩm từ Redux store
    const { isLoading, data } = useFetchProducts();

    // Return JSX để render UI
    return (
        <div>
            <h1>Home</h1>
            <h2>Products list</h2>

            {/* Danh sách sản phẩm */}
            <ul>
                {/* CONDITIONAL RENDERING: Hiển thị khác nhau dựa trên isLoading
                    TẠI SAO DÙNG TERNARY OPERATOR?
                    - Nếu isLoading = true → hiển thị "Loading..."
                    - Nếu isLoading = false → hiển thị danh sách sản phẩm
                    - Giúp UX tốt hơn: user biết đang tải data */}
                {isLoading ? (
                    // Hiển thị khi đang tải data
                    <div>Loading...</div>
                ) : (
                    // Hiển thị danh sách sản phẩm khi đã có data
                    // Array.map(): Duyệt qua mảng và render mỗi phần tử thành JSX
                    // TẠI SAO DÙNG MAP? Để render danh sách động từ array
                    data.map((product) => (
                        // <li>: List item cho mỗi sản phẩm
                        // key={product.id}: Key prop BẮT BUỘC khi render list
                        // TẠI SAO CẦN KEY?
                        //   - React dùng key để identify mỗi element
                        //   - Giúp React update hiệu quả khi list thay đổi
                        //   - Key phải unique và stable (không đổi khi re-render)
                        //   - Dùng ID thay vì index để tránh bug khi list thay đổi
                        <li key={product.id}>
                            {/* Hiển thị thông tin sản phẩm */}
                            {product.id}. {product.title} - {product.price}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

// Export component để App.jsx import và sử dụng trong routing
export default Home;
