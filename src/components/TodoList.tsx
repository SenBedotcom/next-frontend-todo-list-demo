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

  const filterButtons: { type: FilterType; label: string; emoji: string }[] = [
    { type: "all", label: "ทั้งหมด", emoji: "📝" },
    { type: "active", label: "ยังไม่เสร็จ", emoji: "⏳" },
    { type: "completed", label: "เสร็จแล้ว", emoji: "✅" },
  ];

  return (
    <div className="w-full max-w-2xl">
      {/* Header - Kawaii Style */}
      <div className="mb-8 text-center">
        <div className="mb-2 flex items-center justify-center gap-2">
          <span className="animate-bounce-soft text-4xl">🌸</span>
          <h1 className="bg-gradient-to-r from-pink-400 via-pink-500 to-purple-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
            Todo List
          </h1>
          <span className="animate-bounce-soft text-4xl" style={{ animationDelay: '0.5s' }}>🌸</span>
        </div>
        <p className="text-lg text-pink-400">✨ จัดการงานให้ชีวิตสดใส ✨</p>
      </div>

      {/* Add Todo Form - Kawaii Style */}
      <form onSubmit={addTodo} className="mb-8">
        <div className="relative">
          <div className="flex items-center gap-3 rounded-3xl border-3 border-pink-200 bg-white p-2 shadow-lg shadow-pink-100 transition-all duration-300 focus-within:border-pink-400 focus-within:shadow-pink-200">
            <span className="pl-3 text-2xl">📌</span>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="เพิ่มงานใหม่ที่นี่นะ..."
              className="flex-1 bg-transparent px-2 py-3 text-lg text-[#5c4a5a] outline-none placeholder:text-pink-300"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="btn-kawaii flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 to-pink-500 text-white shadow-md shadow-pink-200 transition-all duration-300 hover:from-pink-500 hover:to-pink-600 hover:shadow-lg disabled:opacity-50 disabled:hover:from-pink-400"
            >
              <span className="text-xl">➕</span>
            </button>
          </div>
        </div>
      </form>

      {/* Filter Tabs - Kawaii Pills */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2 rounded-full bg-pink-50 p-1.5 shadow-inner">
          {filterButtons.map(({ type, label, emoji }) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`btn-kawaii flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                filter === type
                  ? "bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-md shadow-pink-200"
                  : "text-pink-400 hover:bg-pink-100"
              }`}
            >
              <span>{emoji}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>

        {completedCount > 0 && (
          <button
            onClick={clearCompleted}
            className="btn-kawaii flex items-center gap-1 rounded-full border-2 border-red-200 bg-red-50 px-4 py-2 text-sm text-red-400 transition-all hover:border-red-300 hover:bg-red-100"
          >
            <span>🧹</span>
            <span>ล้างที่เสร็จแล้ว</span>
          </button>
        )}
      </div>

      {/* Todo List */}
      <div className="space-y-3">
        {!isLoaded ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-bounce-soft text-5xl">🌸</div>
            <p className="mt-4 text-pink-400">กำลังโหลด...</p>
          </div>
        ) : filteredTodos.length === 0 ? (
          <div className="py-12 text-center">
            <div className="mx-auto mb-4 flex h-24 w-24 animate-float items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-purple-100">
              <span className="text-5xl">
                {filter === "all" ? "📝" : filter === "active" ? "🎉" : "🔍"}
              </span>
            </div>
            <p className="text-lg text-pink-400">
              {filter === "all"
                ? "ยังไม่มีงานเลย! เพิ่มงานใหม่กันเถอะ ✨"
                : filter === "active"
                ? "ว้าว! ทำเสร็จหมดแล้ว! 🎊"
                : "ยังไม่มีงานที่เสร็จเลยนะ 💪"}
            </p>
          </div>
        ) : (
          filteredTodos.map((todo, index) => (
            <div
              key={todo.id}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 80}ms` }}
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

      {/* Footer Stats - Cute Style */}
      {todos.length > 0 && (
        <div className="mt-8 flex items-center justify-center gap-6 rounded-2xl border-2 border-pink-100 bg-white/80 p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-xl">📋</span>
            <span className="text-pink-500">
              <strong>{activeCount}</strong> งานที่ต้องทำ
            </span>
          </div>
          <div className="h-6 w-px bg-pink-200" />
          <div className="flex items-center gap-2">
            <span className="text-xl">💖</span>
            <span className="text-purple-500">
              <strong>{completedCount}</strong> เสร็จแล้ว
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
