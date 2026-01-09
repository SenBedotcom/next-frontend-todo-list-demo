"use client";
// ⬆️ บอก Next.js ว่านี่คือ Client Component (รันบน browser)
// จำเป็นต้องใช้เพราะเราใช้ useState, useEffect

import { useState, useEffect } from "react";
import { Todo, FilterType } from "@/types/todo";
import TodoItem from "./TodoItem";

/**
 * ===========================================
 * 📝 Exercise 2: สร้าง TodoList Component
 * ===========================================
 *
 * เป้าหมาย: เรียนรู้ State Management, useEffect, CRUD operations
 *
 * 📖 ความรู้ที่ต้องใช้:
 * - useState: เก็บข้อมูลที่เปลี่ยนแปลงได้
 * - useEffect: ทำ side effects (โหลด/บันทึกข้อมูล)
 * - Array methods: map, filter
 * - localStorage: เก็บข้อมูลในเบราว์เซอร์
 */

// Key สำหรับเก็บข้อมูลใน localStorage
const STORAGE_KEY = "todo-list-items";

export default function TodoList() {
  // ===========================================
  // TODO 1: สร้าง States
  // ===========================================
  /**
   * สร้าง 4 states ด้วย useState:
   *
   * 1. todos - เก็บรายการ todos (array ของ Todo)
   *    💡 useState<Todo[]>([])
   *
   * 2. inputValue - เก็บค่าที่พิมพ์ใน input (string)
   *    💡 useState("")
   *
   * 3. filter - เก็บ filter ที่เลือก (FilterType)
   *    💡 useState<FilterType>("all")
   *
   * 4. isLoaded - สถานะว่าโหลดข้อมูลเสร็จหรือยัง (boolean)
   *    💡 useState(false)
   */

  // 👇 เขียน code ที่นี่
  const [todos, setTodos] = useState<Todo[]>([]); // ตัวอย่าง - อันนี้ถูกแล้ว
  // TODO: สร้าง inputValue state
  // TODO: สร้าง filter state
  // TODO: สร้าง isLoaded state

  // ===========================================
  // TODO 2: useEffect โหลดข้อมูลจาก localStorage
  // ===========================================
  /**
   * ทำงานครั้งเดียวตอน component mount
   *
   * Steps:
   * 1. ดึงข้อมูลจาก localStorage ด้วย localStorage.getItem(STORAGE_KEY)
   * 2. ถ้ามีข้อมูล (ไม่ใช่ null):
   *    - JSON.parse() แปลง string เป็น array
   *    - map แต่ละ todo เพื่อแปลง createdAt จาก string เป็น Date
   *    - setTodos() ใส่ค่าใน state
   * 3. setIsLoaded(true) บอกว่าโหลดเสร็จแล้ว
   *
   * 💡 Hint:
   * useEffect(() => {
   *   const stored = localStorage.getItem(STORAGE_KEY);
   *   if (stored) {
   *     const parsed = JSON.parse(stored);
   *     setTodos(parsed.map((todo: Todo) => ({
   *       ...todo,
   *       createdAt: new Date(todo.createdAt),
   *     })));
   *   }
   *   setIsLoaded(true);
   * }, []); // [] = ทำงานครั้งเดียว
   */

  // 👇 เขียน code ที่นี่
  useEffect(() => {
    // TODO: โหลดข้อมูลจาก localStorage
  }, []);

  // ===========================================
  // TODO 3: useEffect บันทึกข้อมูลลง localStorage
  // ===========================================
  /**
   * ทำงานทุกครั้งที่ todos เปลี่ยน
   *
   * Steps:
   * 1. เช็คว่า isLoaded = true (ป้องกันบันทึกก่อนโหลดเสร็จ)
   * 2. localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
   *
   * 💡 Hint:
   * useEffect(() => {
   *   if (isLoaded) {
   *     localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
   *   }
   * }, [todos, isLoaded]);
   */

  // 👇 เขียน code ที่นี่
  useEffect(() => {
    // TODO: บันทึกข้อมูลลง localStorage
  }, [todos]); // ทำงานเมื่อ todos เปลี่ยน

  // ===========================================
  // TODO 4: Function เพิ่ม Todo (addTodo)
  // ===========================================
  /**
   * เรียกใช้เมื่อ submit form
   *
   * Steps:
   * 1. e.preventDefault() ป้องกัน browser refresh
   * 2. ถ้า inputValue ว่าง (หลัง trim) → return ออก
   * 3. สร้าง newTodo object:
   *    - id: crypto.randomUUID()
   *    - text: inputValue.trim()
   *    - completed: false
   *    - createdAt: new Date()
   * 4. setTodos: เพิ่ม newTodo ไว้ข้างหน้า array
   *    💡 setTodos(prev => [newTodo, ...prev])
   * 5. setInputValue("") ล้าง input
   */

  // 👇 เขียน code ที่นี่
  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: เพิ่ม logic ตาม steps ด้านบน
  };

  // ===========================================
  // TODO 5: Function Toggle สถานะ (toggleTodo)
  // ===========================================
  /**
   * สลับ completed ของ todo ที่ตรงกับ id
   *
   * 💡 Hint:
   * setTodos(prev => prev.map(todo =>
   *   todo.id === id
   *     ? { ...todo, completed: !todo.completed }
   *     : todo
   * ))
   */

  // 👇 เขียน code ที่นี่
  const toggleTodo = (id: string) => {
    // TODO: toggle completed
  };

  // ===========================================
  // TODO 6: Function ลบ Todo (deleteTodo)
  // ===========================================
  /**
   * ลบ todo ที่ตรงกับ id
   *
   * 💡 Hint:
   * setTodos(prev => prev.filter(todo => todo.id !== id))
   */

  // 👇 เขียน code ที่นี่
  const deleteTodo = (id: string) => {
    // TODO: ลบ todo
  };

  // ===========================================
  // TODO 7: Function แก้ไข Todo (editTodo)
  // ===========================================
  /**
   * แก้ไข text ของ todo ที่ตรงกับ id
   *
   * 💡 Hint: คล้าย toggleTodo แต่เปลี่ยน text แทน completed
   * setTodos(prev => prev.map(todo =>
   *   todo.id === id ? { ...todo, text: newText } : todo
   * ))
   */

  // 👇 เขียน code ที่นี่
  const editTodo = (id: string, newText: string) => {
    // TODO: แก้ไข todo
  };

  // ===========================================
  // TODO 8: Function ล้าง Todos ที่เสร็จแล้ว (clearCompleted)
  // ===========================================
  /**
   * เก็บเฉพาะ todos ที่ completed = false
   *
   * 💡 Hint:
   * setTodos(prev => prev.filter(todo => !todo.completed))
   */

  // 👇 เขียน code ที่นี่
  const clearCompleted = () => {
    // TODO: ล้าง todos ที่เสร็จแล้ว
  };

  // ===========================================
  // TODO 9: Computed Values
  // ===========================================
  /**
   * คำนวณค่าจาก state เพื่อใช้แสดงผล
   */

  // กรอง todos ตาม filter ที่เลือก
  // 💡 Hint:
  // todos.filter(todo => {
  //   if (filter === "active") return !todo.completed;
  //   if (filter === "completed") return todo.completed;
  //   return true;
  // })
  // 👇 เขียน code ที่นี่
  const filteredTodos = todos; // TODO: filter ตาม filter state

  // นับจำนวน todos ที่ยังไม่เสร็จ
  // 💡 Hint: todos.filter(todo => !todo.completed).length
  // 👇 เขียน code ที่นี่
  const activeCount = 0; // TODO: นับ todos ที่ completed = false

  // นับจำนวน todos ที่เสร็จแล้ว
  // 💡 Hint: todos.filter(todo => todo.completed).length
  // 👇 เขียน code ที่นี่
  const completedCount = 0; // TODO: นับ todos ที่ completed = true

  // ข้อมูลสำหรับ render ปุ่ม filter (ให้แล้ว - ไม่ต้องแก้)
  const filterButtons: { type: FilterType; label: string }[] = [
    // เปิดมาจะ error เพราะว่ายังไม่ได้กำหนด FilterType
    // { type: "all", label: "ทั้งหมด" },
    // { type: "active", label: "ยังไม่เสร็จ" },
    // { type: "completed", label: "เสร็จแล้ว" },
  ];

  // ===========================================
  // JSX: UI (ให้แล้ว - ไม่ต้องแก้ไข)
  // ===========================================
  return (
    <div className="w-full max-w-2xl">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
          Todo List
        </h1>
        <p className="mt-2 text-white/50">จัดการงานของคุณอย่างมีประสิทธิภาพ</p>
      </div>

      {/* Add Todo Form */}
      <form onSubmit={addTodo} className="mb-8">
        <div className="group relative">
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 opacity-20 blur transition duration-300 group-focus-within:opacity-40" />
          <div className="relative flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
            <input
              type="text"
              // value={inputValue}
              // onChange={(e) => setInputValue(e.target.value)}
              placeholder="เพิ่มงานใหม่..."
              className="flex-1 bg-transparent px-4 py-3 text-lg text-white outline-none placeholder:text-white/30"
            />
            <button
              type="submit"
              // disabled={!inputValue.trim()}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/25 transition-all duration-300 hover:scale-105 hover:shadow-amber-500/40 disabled:opacity-50 disabled:hover:scale-100"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>

      {/* Filter Tabs */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex gap-2 rounded-xl bg-white/5 p-1">
          {filterButtons.map(({ type, label }) => (
            <button
              key={type}
              // onClick={() => setFilter(type)}
              // className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
              //   filter === type
              //     ? "bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/25"
              //     : "text-white/60 hover:text-white"
              // }`}
            >
              {label}
            </button>
          ))}
        </div>

        {completedCount > 0 && (
          <button
            onClick={clearCompleted}
            className="text-sm text-white/40 transition-colors hover:text-red-400"
          >
            ล้างที่เสร็จแล้ว
          </button>
        )}
      </div>

      {/* Todo List */}
      <div className="space-y-3">
        {/* {!isLoaded ? (
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-500 border-t-transparent" />
          </div>
        ) : filteredTodos.length === 0 ? (
          <div className="py-12 text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/5">
              <svg
                className="h-10 w-10 text-white/20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <p className="text-white/40">
              {filter === "all"
                ? "ยังไม่มีงาน เพิ่มงานใหม่เลย!"
                : filter === "active"
                ? "ไม่มีงานที่ต้องทำ"
                : "ยังไม่มีงานที่เสร็จ"}
            </p>
          </div>
        ) : (
          filteredTodos.map((todo, index) => (
            <div
              key={todo.id}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <TodoItem
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
            </div>
          ))
        )} */}
      </div>

      {/* Footer Stats */}
      {todos.length > 0 && (
        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-white/40">
          <span>{activeCount} งานที่ต้องทำ</span>
          <span>{completedCount} เสร็จแล้ว</span>
        </div>
      )}
    </div>
  );
}
