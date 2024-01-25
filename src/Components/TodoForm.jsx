import React, { useState } from "react";
import { useTodos } from "../Context/TodoContext";

function TodoForm() {
  const [newContent, setNewContent] = useState("");
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newContent) return;

    addTodo({ content: newContent, completed: false });
    setNewContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={newContent}
        onChange={(e) => {
          setNewContent(e.target.value);
        }}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
