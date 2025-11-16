/**
 * FILE: features/address/index.js
 * 
 * Đây là file "barrel export" (xuất tập trung) cho feature address.
 * File này tập hợp tất cả export của feature và xuất ra một nơi duy nhất.
 * 
 * BARREL EXPORT PATTERN LÀ GÌ?
 * - Tập hợp tất cả export vào một file index.js
 * - File khác chỉ cần import từ "@/features/address" thay vì import từng file
 * - Giúp code ngắn gọn và dễ quản lý
 * 
 * TẠI SAO DÙNG BARREL EXPORT?
 * - Giảm số lượng import statements
 * - Dễ refactor: đổi tên file chỉ cần sửa index.js
 * - Che giấu cấu trúc bên trong: người dùng không cần biết file nào export gì
 * - Chuẩn hóa cách import: luôn import từ folder, không import từ file cụ thể
 * 
 * LỢI ÍCH:
 * - Import ngắn gọn: import { reducer, actions } from "@/features/address"
 * - Thay vì: import reducer from "@/features/address/reducer"
 * - Dễ maintain: thêm/xóa export chỉ cần sửa index.js
 */

// Export reducer với tên "reducer"
// "default as reducer" nghĩa là import default export từ reducer.js và đổi tên thành "reducer"
// Cách dùng: import { reducer } from "@/features/address"
export { default as reducer } from "./reducer";

// Export tất cả named exports từ consts.js dưới namespace "consts"
// "export * as consts" nghĩa là tất cả export từ consts.js sẽ được nhóm vào object "consts"
// Cách dùng: import { consts } from "@/features/address" → consts.SET_PROVINCES
export * as consts from "./consts";

// Export tất cả named exports từ actions.js dưới namespace "actions"
// "export * as actions" nghĩa là tất cả export từ actions.js sẽ được nhóm vào object "actions"
// Cách dùng: import { actions } from "@/features/address" → actions.setProvinces(...)
export * as actions from "./actions";

// Export tất cả named exports từ hooks.js (re-export)
// "export * from" nghĩa là export lại tất cả export từ hooks.js
// Cách dùng: import { useProvinces } from "@/features/address"
export * from "./hooks";
