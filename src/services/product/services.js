/**
 * FILE: services/product/services.js
 * 
 * Đây là file định nghĩa các API service functions cho feature product.
 * Service layer tách biệt logic gọi API khỏi component và Redux.
 * 
 * SERVICE LAYER LÀ GÌ?
 * - Tầng xử lý các API calls (HTTP requests)
 * - Tách biệt logic gọi API khỏi component và business logic
 * - Dễ test: có thể mock API calls
 * - Dễ maintain: đổi API endpoint chỉ cần sửa ở đây
 * 
 * TẠI SAO CẦN SERVICE LAYER?
 * - Component không cần biết chi tiết API (endpoint, method, headers...)
 * - Có thể tái sử dụng API calls ở nhiều nơi
 * - Dễ test: mock service functions thay vì mock HTTP requests
 * - Dễ refactor: đổi cách gọi API chỉ cần sửa service
 */

// Import httpRequest - axios instance đã được cấu hình sẵn (baseURL, interceptors...)
// httpRequest đã có baseURL và interceptors, chỉ cần gọi method (get, post, put, delete)
import httpRequest from "@/utils/httpRequest";

/**
 * API SERVICE: getProducts
 * 
 * Function này gọi API để lấy danh sách sản phẩm từ server.
 * 
 * @returns {Promise<Object>} Promise trả về response từ API
 * 
 * CÁCH HOẠT ĐỘNG:
 * - httpRequest.get("/products") gọi GET request đến "/products"
 * - URL đầy đủ sẽ là: baseURL + "/products" = "https://api01.f8team.dev/api/products"
 * - Interceptor trong httpRequest sẽ tự động trả về response.data
 * 
 * CÁCH SỬ DỤNG:
 * ```js
 * const response = await getProducts();
 * // response đã là response.data từ interceptor
 * ```
 * 
 * LỢI ÍCH:
 * - Tách biệt API logic khỏi component
 * - Dễ test: có thể mock function này
 * - Dễ refactor: đổi endpoint chỉ cần sửa ở đây
 * - Có thể thêm error handling, retry logic ở đây
 */
export async function getProducts() {
    // Gọi GET request đến endpoint "/products"
    // httpRequest.get() trả về Promise, await để đợi response
    const response = await httpRequest.get("/products");
    
    // Trả về response (đã được interceptor xử lý, chỉ còn response.data)
    return response;
}
