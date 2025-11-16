/**
 * FILE: pages/Address/Provinces.jsx
 * 
 * Đây là page component hiển thị danh sách tỉnh/thành phố.
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

// Import custom hook để fetch danh sách tỉnh/thành phố
// Hook này tự động gọi API, lưu vào Redux, và trả về loading state + data
import { useFetchProvinces } from "@/services/address";

/**
 * PROVINCES COMPONENT
 * 
 * Component này hiển thị danh sách tỉnh/thành phố.
 * 
 * CÁCH HOẠT ĐỘNG:
 * 1. Component mount → useFetchProvinces() tự động gọi API
 * 2. Hiển thị "Loading..." khi đang fetch
 * 3. Khi có data → hiển thị danh sách tỉnh/thành phố
 * 
 * REACT CONCEPTS SỬ DỤNG:
 * - Custom hooks: useFetchProvinces()
 * - Destructuring với rename: { data: provinces }
 * - Conditional rendering: isLoading ? ... : ...
 * - Array.map(): Render danh sách
 * - Key prop: Giúp React identify các element trong list
 */
function Provinces() {
    // useFetchProvinces(): Custom hook tự động fetch data từ API
    // Hook này trả về { isLoading, data }
    // isLoading: boolean - đang tải hay không
    // data: Array - danh sách tỉnh/thành phố từ Redux store
    // 
    // DESTRUCTURING VỚI RENAME: { data: provinces }
    //   - Lấy "data" từ hook
    //   - Đổi tên thành "provinces" để code dễ đọc hơn
    //   - TẠI SAO RENAME? Tên "provinces" rõ ràng hơn "data"
    const { isLoading, data: provinces } = useFetchProvinces();

    // Return JSX để render UI
    return (
        <div>
            <h1>Provinces</h1>
            
            {/* Danh sách tỉnh/thành phố */}
            <ul>
                {/* CONDITIONAL RENDERING: Hiển thị khác nhau dựa trên isLoading
                    TẠI SAO DÙNG TERNARY OPERATOR?
                    - Nếu isLoading = true → hiển thị "Loading..."
                    - Nếu isLoading = false → hiển thị danh sách tỉnh/thành phố
                    - Giúp UX tốt hơn: user biết đang tải data */}
                {isLoading ? (
                    // Hiển thị khi đang tải data
                    <div>Loading...</div>
                ) : (
                    // Hiển thị danh sách tỉnh/thành phố khi đã có data
                    // Array.map(): Duyệt qua mảng và render mỗi phần tử thành JSX
                    // TẠI SAO DÙNG MAP? Để render danh sách động từ array
                    provinces.map((province) => (
                        // <li>: List item cho mỗi tỉnh/thành phố
                        // key={province.province_id}: Key prop BẮT BUỘC khi render list
                        // TẠI SAO CẦN KEY?
                        //   - React dùng key để identify mỗi element
                        //   - Giúp React update hiệu quả khi list thay đổi
                        //   - Key phải unique và stable (không đổi khi re-render)
                        //   - Dùng ID thay vì index để tránh bug khi list thay đổi
                        <li key={province.province_id}>
                            {/* Hiển thị thông tin tỉnh/thành phố */}
                            {province.province_id}. {province.name}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

// Export component để App.jsx import và sử dụng trong routing
export default Provinces;
