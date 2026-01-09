"use client";

import { Todo } from "@/types/todo";
import { useState } from "react";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
  onEdit,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSubmit = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    } else if (e.key === "Escape") {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <div
      className={`group relative flex items-center gap-4 rounded-3xl border-2 border-pink-200 bg-white p-4 shadow-md shadow-pink-100 transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-200 ${
        todo.completed ? "bg-pink-50/50" : ""
      }`}
    >
      {/* Kawaii Checkbox - Heart Style */}
      <button
        onClick={() => onToggle(todo.id)}
        className={`btn-kawaii relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
          todo.completed
            ? "border-pink-400 bg-gradient-to-br from-pink-300 to-pink-400"
            : "border-pink-200 bg-white hover:border-pink-300 hover:bg-pink-50"
        }`}
      >
        {todo.completed ? (
          <span className="animate-pulse-heart text-lg">💖</span>
        ) : (
          <span className="text-sm text-pink-300 transition-all group-hover:text-pink-400">
            ♡
          </span>
        )}
      </button>

      {/* Todo Text */}
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSubmit}
          onKeyDown={handleKeyDown}
          autoFocus
          className="flex-1 rounded-xl border-2 border-pink-200 bg-pink-50 px-3 py-1 text-lg text-[#5c4a5a] outline-none placeholder:text-pink-300 focus:border-pink-400"
        />
      ) : (
        <span
          onDoubleClick={() => setIsEditing(true)}
          className={`flex-1 cursor-pointer text-lg transition-all duration-300 ${
            todo.completed
              ? "text-pink-300 line-through decoration-pink-400 decoration-wavy decoration-2"
              : "text-[#5c4a5a]"
          }`}
        >
          {todo.text}
        </span>
      )}

      {/* Cute Delete Button */}
      <button
        onClick={() => onDelete(todo.id)}
        className="btn-kawaii flex h-8 w-8 items-center justify-center rounded-full opacity-0 transition-all duration-300 hover:bg-red-50 group-hover:opacity-100"
        title="ลบ"
      >
        <span className="text-lg transition-transform hover:scale-125">🗑️</span>
      </button>

      {/* Decorative sparkle on completed */}
      {todo.completed && (
        <div className="absolute -right-1 -top-1 animate-sparkle">
          <span className="text-lg">✨</span>
        </div>
      )}
    </div>
  );
}
