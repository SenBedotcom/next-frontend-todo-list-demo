/**
 * ===========================================
 * 📝 Exercise 1: สร้าง Types สำหรับ Todo Application
 * ===========================================
 *
 * เป้าหมาย: เรียนรู้การสร้าง TypeScript Interface และ Type
 *
 * 📖 ความรู้ที่ต้องใช้:
 * - Interface: กำหนดรูปร่างของ object
 * - Type alias: สร้าง custom types
 * - Union types: กำหนดค่าที่เป็นไปได้หลายค่า
 */

// ===========================================
// TODO 1: สร้าง Todo Interface
// ===========================================
/**
 * Todo Interface - กำหนดโครงสร้างของ todo item
 *
 * Properties ที่ต้องมี:
 * - id: string         → ID ไม่ซ้ำกัน สำหรับระบุตัวตนของ todo
 * - text: string       → ข้อความที่ผู้ใช้พิมพ์
 * - completed: boolean → สถานะ (true = เสร็จแล้ว, false = ยังไม่เสร็จ)
 * - createdAt: Date    → วันที่และเวลาที่สร้าง
 *
 * 💡 Hint:
 * export interface ชื่อInterface {
 *   propertyName: type;
 * }
 */

// 👇 เขียน code ที่นี่
export interface Todo {
  // TODO: เพิ่ม properties ทั้ง 4 ตัว
}

// ===========================================
// TODO 2: สร้าง FilterType
// ===========================================
/**
 * FilterType - กำหนดค่าที่เป็นไปได้สำหรับการกรอง todos
 *
 * ค่าที่เป็นไปได้:
 * - "all"       → แสดงทั้งหมด
 * - "active"    → แสดงเฉพาะที่ยังไม่เสร็จ
 * - "completed" → แสดงเฉพาะที่เสร็จแล้ว
 *
 * 💡 Hint:
 * export type ชื่อType = "value1" | "value2" | "value3";
 *
 * | คือ Union operator หมายถึง "หรือ"
 * ตัวแปรที่เป็น type นี้จะมีค่าได้แค่ 3 ค่าที่กำหนดเท่านั้น
 */

// 👇 เขียน code ที่นี่
export type FilterType = ""; // TODO: เปลี่ยนเป็น union type ที่ถูกต้อง
