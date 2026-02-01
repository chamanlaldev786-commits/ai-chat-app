"use client";

import { useRouter } from "next/navigation";

export default function AboutHelpPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 animate-fadeIn">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse">
          About Us & Help Center
        </h1>

        {/* Intro */}
        <p className="text-gray-700 text-lg text-center mb-10 leading-relaxed">
          This platform is not just a website —
          <span className="font-semibold text-purple-600">
            {" "}it’s a journey to grow, learn, and build your future with AI.
          </span>
          <br />
          We believe knowledge should be practical, motivating, and life-changing.
        </p>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">🚀 Our Mission</h3>
            <p className="text-sm leading-relaxed">
              To help students and developers learn real skills,
              build confidence, and grow without fear or confusion.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-500 to-red-500 text-white shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">💡 Why This Platform?</h3>
            <p className="text-sm leading-relaxed">
              Because tutorials alone are not enough.
              You need guidance, clarity, and motivation — all in one place.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">🤝 We Care</h3>
            <p className="text-sm leading-relaxed">
              If you feel stuck, confused, or lost —
              you are not alone. We are here to support you.
            </p>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-gray-100 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-3 text-gray-800">
            Need Help or Guidance?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Whether it’s learning, career confusion, or technical issues —
            feel free to reach out. Asking for help is the first step toward growth.
          </p>

          <a
            href="https://wa.me/923403943171"
            target="_blank"
            className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold shadow-md hover:scale-105 transition"
          >
            📱 Contact on WhatsApp: 0340-3943171
          </a>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {[
            "AI Learning",
            "Frontend Growth",
            "Career Building",
            "Self Confidence",
            "Smart Skills",
            "Future Ready",
          ].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => router.push("/")}
            className="px-8 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-lg hover:scale-105 transition"
          >
            ⬅ Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
