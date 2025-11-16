/**
 * FILE: utils/httpRequest.js
 * 
 * Đây là file tạo axios instance đã được cấu hình sẵn cho toàn bộ ứng dụng.
 * Axios instance giúp tái sử dụng cấu hình (baseURL, interceptors...) cho tất cả API calls.
 * 
 * AXIOS INSTANCE LÀ GÌ?
 * - Axios instance là một axios object đã được cấu hình sẵn
 * - Thay vì cấu hình mỗi lần gọi API, cấu hình một lần và dùng lại
 * - Giúp code DRY (Don't Repeat Yourself) và nhất quán
 * 
 * TẠI SAO CẦN AXIOS INSTANCE?
 * - Tất cả API calls đều dùng chung baseURL
 * - Có thể thêm interceptors để xử lý chung (authentication, error handling...)
 * - Dễ maintain: đổi baseURL chỉ cần sửa ở đây
 * - Có thể thêm headers, timeout, và các cấu hình khác
 * 
 * INTERCEPTOR LÀ GÌ?
 * - Interceptor là function chạy trước/sau mỗi request/response
 * - Request interceptor: chạy trước khi gửi request (thêm token, log...)
 * - Response interceptor: chạy sau khi nhận response (xử lý data, error...)
 * - Giúp xử lý logic chung mà không cần lặp lại ở mỗi API call
 */

// Import axios - thư viện HTTP client phổ biến cho JavaScript
// Axios giúp gọi API dễ dàng hơn so với fetch API
import axios from "axios";

/**
 * TẠO AXIOS INSTANCE
 * 
 * axios.create() tạo một axios instance mới với cấu hình riêng
 * Instance này độc lập với axios mặc định, có thể cấu hình riêng
 * 
 * baseURL: "https://api01.f8team.dev/api"
 *   - URL gốc cho tất cả API calls
 *   - Khi gọi httpRequest.get("/products"), URL đầy đủ sẽ là:
 *     baseURL + "/products" = "https://api01.f8team.dev/api/products"
 *   - LỢI ÍCH: Không cần viết full URL mỗi lần, chỉ cần viết path
 *   - Dễ đổi môi trường: dev/staging/production chỉ cần đổi baseURL
 */
const httpRequest = axios.create({
    baseURL: "https://api01.f8team.dev/api",
});

/**
 * RESPONSE INTERCEPTOR
 * 
 * interceptors.response.use() thêm interceptor cho response
 * Interceptor này chạy sau khi nhận response từ server
 * 
 * CÁCH HOẠT ĐỘNG:
 * - Khi API trả về response, interceptor này được gọi
 * - Nhận vào response object (có data, status, headers...)
 * - Trả về response.data (chỉ lấy phần data)
 * 
 * TẠI SAO CHỈ TRẢ VỀ response.data?
 * - Thông thường chỉ cần dùng data, không cần status/headers
 * - Giúp code ngắn gọn: không cần viết response.data.items, chỉ cần response.items
 * - Nhất quán: tất cả API calls đều trả về data trực tiếp
 * 
 * VÍ DỤ:
 * - Trước interceptor: const response = await httpRequest.get("/products")
 *                     const products = response.data.items
 * - Sau interceptor:  const response = await httpRequest.get("/products")
 *                     const products = response.items
 * 
 * LỢI ÍCH:
 * - Code ngắn gọn hơn
 * - Nhất quán trong toàn bộ ứng dụng
 * - Có thể thêm logic xử lý error ở đây
 */
httpRequest.interceptors.response.use((response) => {
    // Trả về response.data thay vì toàn bộ response object
    // Tất cả API calls sẽ nhận được data trực tiếp
    return response.data;
});

// Export axios instance để các service files import và sử dụng
export default httpRequest;
