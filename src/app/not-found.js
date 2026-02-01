"use client";

import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 p-6">
      <h1 className="text-6xl font-extrabold text-purple-600 animate-bounce mb-4">
        404
      </h1>
      <p className="text-2xl text-gray-600 mb-6 text-center">
        Oops! Page not found. Don’t worry, it happens to everyone.
      </p>
      <button
        onClick={() => router.push("/")}
        className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg"
      >
        Go Back Home
      </button>
    </div>
  );
}
