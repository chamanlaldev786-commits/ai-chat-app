"use client";
import { useState, useRef, useEffect } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const chatEndRef = useRef(null);

  const send = () => {
    if (!text.trim()) return;
    setMessages([...messages, { me: true, text }]);
    setText("");
  };

  // Scroll to bottom on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col max-w-3xl mx-auto h-[80vh] bg-gray-100 rounded-2xl shadow-lg p-4">

      {/* Chat Box */}
      <div className="flex-1 overflow-y-auto mb-4 flex flex-col gap-2 p-2">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[70%] p-3 rounded-2xl break-words animate-fadeIn 
              ${m.me ? "self-end bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                : "self-start bg-gradient-to-r from-blue-400 to-cyan-400 text-white"}`}
          >
            {m.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        />
        <button
          onClick={send}
          className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-105"
        >
          Send
        </button>
      </div>
    </div>
  );
}
