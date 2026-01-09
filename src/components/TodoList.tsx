"use client";

import { useState, useEffect } from "react";
import { Todo, FilterType } from "@/types/todo";
import TodoItem from "./TodoItem";

const STORAGE_KEY = "todo-list-items";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");
  const [isLoaded, setIsLoaded] = useState(false);

  // Load todos from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      setTodos(
        parsed.map((todo: Todo) => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
        }))
      );
    }
    setIsLoaded(true);
  }, []);

  // Save todos to localStorage when they change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
  }, [todos, isLoaded]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: inputValue.trim(),
      completed: false,
      createdAt: new Date(),
    };

    setTodos((prev) => [newTodo, ...prev]);
    setInputValue("");
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  const filterButtons: { type: FilterType; label: string }[] = [
    { type: "all", label: "ทั้งหมด" },
    { type: "active", label: "ยังไม่เสร็จ" },
    { type: "completed", label: "เสร็จแล้ว" },
  ];

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
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="เพิ่มงานใหม่..."
              className="flex-1 bg-transparent px-4 py-3 text-lg text-white outline-none placeholder:text-white/30"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
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
              onClick={() => setFilter(type)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                filter === type
                  ? "bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/25"
                  : "text-white/60 hover:text-white"
              }`}
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
        {!isLoaded ? (
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
        )}
      </div>

      {/* Footer Stats */}
      {todos.length > 0 && (
        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-white/40">
          <span>
            {activeCount} งานที่ต้องทำ
          </span>
          <span>
            {completedCount} เสร็จแล้ว
          </span>
        </div>
      )}
    </div>
  );
}
