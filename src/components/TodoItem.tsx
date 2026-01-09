"use client";
// ⬆️ บอก Next.js ว่านี่คือ Client Component

import { Todo } from "@/types/todo";
import { useState } from "react";

/**
 * ===========================================
 * 📝 Exercise 3: สร้าง TodoItem Component
 * ===========================================
 *
 * เป้าหมาย: เรียนรู้ Props, Local State, Event Handling
 *
 * 📖 ความรู้ที่ต้องใช้:
 * - Props & Interface
 * - Local State
 * - Event handlers (onClick, onDoubleClick, onKeyDown, onBlur)
 * - Conditional rendering
 */

// ===========================================
// TODO 1: สร้าง Props Interface
// ===========================================
/**
 * กำหนด props ที่ component นี้รับจาก parent (TodoList)
 *
 * Props ที่ต้องมี:
 * - todo: Todo                              → ข้อมูล todo ที่จะแสดง
 * - onToggle: (id: string) => void          → callback สำหรับ toggle
 * - onDelete: (id: string) => void          → callback สำหรับลบ
 * - onEdit: (id: string, newText: string) => void → callback สำหรับแก้ไข
 *
 * 💡 Hint:
 * interface TodoItemProps {
 *   todo: Todo;
 *   onToggle: (id: string) => void;
 *   onDelete: (id: string) => void;
 *   onEdit: (id: string, newText: string) => void;
 * }
 */

// 👇 เขียน code ที่นี่
interface TodoItemProps {
  todo: Todo;
  // TODO: เพิ่ม onToggle, onDelete, onEdit
}

/**
 * ===========================================
 * TodoItem Component
 * ===========================================
 */
export default function TodoItem({}: TodoItemProps) {
  // ===========================================
  // TODO 2: สร้าง Local States
  // ===========================================
  /**
   * สร้าง 2 states:
   *
   * 1. isEditing - เก็บสถานะว่ากำลังแก้ไขอยู่หรือไม่ (boolean)
   *    ค่าเริ่มต้น: false
   *    💡 useState(false)
   *
   * 2. editText - เก็บข้อความที่กำลังแก้ไข (string)
   *    ค่าเริ่มต้น: todo.text (ข้อความปัจจุบัน)
   *    💡 useState(todo.text)
   */

  // 👇 เขียน code ที่นี่
  const [isEditing, setIsEditing] = useState(false); // อันนี้ถูกแล้ว
  // TODO: สร้าง editText state

  // ===========================================
  // TODO 3: Function บันทึกการแก้ไข (handleSubmit)
  // ===========================================
  /**
   * เรียกใช้เมื่อกด Enter หรือคลิกออกจาก input (blur)
   *
   * Steps:
   * 1. ถ้า editText ไม่ว่าง (หลัง trim):
   *    - เรียก onEdit(todo.id, editText.trim())
   *    - setIsEditing(false) ออกจากโหมดแก้ไข
   * 2. ถ้าว่าง → ไม่ทำอะไร (ป้องกัน todo ที่ไม่มีข้อความ)
   *
   * 💡 Hint:
   * const handleSubmit = () => {
   *   if (editText.trim()) {
   *     onEdit(todo.id, editText.trim());
   *     setIsEditing(false);
   *   }
   * };
   */

  // 👇 เขียน code ที่นี่
  const handleSubmit = () => {
    // TODO: บันทึกการแก้ไข
  };

  // ===========================================
  // TODO 4: Function จัดการ Keyboard Events (handleKeyDown)
  // ===========================================
  /**
   * จัดการเมื่อกดปุ่มบน keyboard
   *
   * - กด Enter → เรียก handleSubmit()
   * - กด Escape → ยกเลิกการแก้ไข
   *   - setEditText(todo.text) คืนค่าเดิม
   *   - setIsEditing(false) ออกจากโหมดแก้ไข
   *
   * 💡 Hint:
   * const handleKeyDown = (e: React.KeyboardEvent) => {
   *   if (e.key === "Enter") {
   *     handleSubmit();
   *   } else if (e.key === "Escape") {
   *     setEditText(todo.text);
   *     setIsEditing(false);
   *   }
   * };
   */

  // 👇 เขียน code ที่นี่
  const handleKeyDown = (e: React.KeyboardEvent) => {
    // TODO: จัดการ Enter และ Escape
  };

  // ===========================================
  // JSX: UI (ให้แล้ว - ไม่ต้องแก้ไข)
  // ===========================================
  return (
    <div
      className={`group relative flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/30 hover:bg-white/10 ${"border-amber-500/30 bg-white/10"}`} // TODO: เพิ่ม completed style
    >
      {/* Custom Checkbox */}
      <button 
        // TODO: เพิ่ม onClick handler
        className={`relative h-6 w-6 flex-shrink-0 rounded-lg border-2 transition-all duration-300 ${
          "border-amber-500 bg-gradient-to-br from-amber-400 to-orange-500" // TODO: เพิ่ม completed style
        }`}
      >
        <svg className="absolute inset-0 m-auto h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </button>

      {/* Todo Text / Edit Input */}
      {isEditing ? (
        <input
          type="text"
          // value={editText} // TODO: เพิ่ม editText value
          // onChange={(e) => setEditText(e.target.value)} // TODO: เพิ่ม onChange handler
          onBlur={handleSubmit}
          onKeyDown={handleKeyDown}
          autoFocus
          className="flex-1 bg-transparent text-lg text-white outline-none placeholder:text-white/30"
        />
      ) : (
        <span
          onDoubleClick={() => setIsEditing(true)}
          className={`flex-1 cursor-pointer text-lg transition-all duration-300 ${
            "text-white/40 line-through decoration-amber-500/50" // TODO: เพิ่ม completed style
          }`}
        >
        </span> // TODO: เพิ่ม todo text
      )}

      {/* Delete Button */}
      <button
        // TODO: เพิ่ม onClick handler
        className="flex h-8 w-8 items-center justify-center rounded-lg opacity-0 transition-all duration-300 hover:bg-red-500/20 group-hover:opacity-100"
      >
        <svg
          className="h-5 w-5 text-red-400 transition-colors hover:text-red-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
}
