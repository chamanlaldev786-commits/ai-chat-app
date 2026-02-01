// src/app/page.js
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { getUser } from "../utils/fakeAuth";
import { courses } from "../data/courses";

export default function Home() {
  const router = useRouter();
  const user = getUser();

  const openCourse = (id) => {
    if (!user) router.push("/auth/login");
    else router.push(`/courses/${id}`);
  };

  // 🌟 Hydration safe
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600">
        Learn & Build Skills 🚀
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {courses.slice(0, 6).map((c) => (
          <div
            key={c.id}
            onClick={() => openCourse(c.id)}
            className="cursor-pointer rounded-2xl bg-white/80 backdrop-blur p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white"
          >
            <h2 className="text-xl font-bold mb-2 text-gray-800">{c.title}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{c.description}</p>
            <div className="mt-4 inline-block text-sm font-semibold text-indigo-600">
              Open Course →
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
