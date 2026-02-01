"use client";
import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend({ text });
    setText("");
  };

  return (
    <div className="flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your question..."
        className="flex-1 p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <button
        onClick={handleSend}
        className="px-5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition"
      >
        Send
      </button>
    </div>
  );
}
