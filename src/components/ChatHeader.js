"use client";

export default function ChatHeader() {
  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white p-4 shadow-lg">
      <h1 className="text-2xl font-bold tracking-wide animate-pulse">
        🤖 AI Learning Chat
      </h1>
      <p className="text-sm opacity-90">
        Ask questions • Learn • Grow
      </p>
    </div>
  );
}
