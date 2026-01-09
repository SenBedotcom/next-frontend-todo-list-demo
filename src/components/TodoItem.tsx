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
      className={`group relative flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/30 hover:bg-white/10 ${
        todo.completed ? "opacity-60" : ""
      }`}
    >
      {/* Custom Checkbox */}
      <button
        onClick={() => onToggle(todo.id)}
        className={`relative h-6 w-6 flex-shrink-0 rounded-lg border-2 transition-all duration-300 ${
          todo.completed
            ? "border-amber-500 bg-gradient-to-br from-amber-400 to-orange-500"
            : "border-white/30 hover:border-amber-400"
        }`}
      >
        {todo.completed && (
          <svg
            className="absolute inset-0 m-auto h-4 w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
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
          className="flex-1 bg-transparent text-lg text-white outline-none placeholder:text-white/30"
        />
      ) : (
        <span
          onDoubleClick={() => setIsEditing(true)}
          className={`flex-1 cursor-pointer text-lg transition-all duration-300 ${
            todo.completed
              ? "text-white/40 line-through decoration-amber-500/50"
              : "text-white"
          }`}
        >
          {todo.text}
        </span>
      )}

      {/* Delete Button */}
      <button
        onClick={() => onDelete(todo.id)}
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
