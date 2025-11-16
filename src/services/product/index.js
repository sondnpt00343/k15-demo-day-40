/**
 * FILE: services/product/index.js
 * 
 * Đây là file "barrel export" (xuất tập trung) cho service layer của product.
 * File này tập hợp tất cả export của service và xuất ra một nơi duy nhất.
 * 
 * BARREL EXPORT PATTERN:
 * - Tập hợp tất cả export vào một file index.js
 * - File khác chỉ cần import từ "@/services/product" thay vì import từng file
 * - Giúp code ngắn gọn và dễ quản lý
 * 
 * LỢI ÍCH:
 * - Import ngắn gọn: import { useFetchProducts } from "@/services/product"
 * - Thay vì: import { useFetchProducts } from "@/services/product/hooks"
 * - Dễ maintain: thêm/xóa export chỉ cần sửa index.js
 */

// Export tất cả named exports từ hooks.js (re-export)
// "export * from" nghĩa là export lại tất cả export từ hooks.js
// Cách dùng: import { useFetchProducts } from "@/services/product"
export * from "./hooks";
