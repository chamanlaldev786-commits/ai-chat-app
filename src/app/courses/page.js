// src/app/courses/page.js
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { courses as allCourses } from "@/data/courses";

export default function Courses() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [filterLevel, setFilterLevel] = useState("ALL");
  const [likedCourses, setLikedCourses] = useState([]);

  // 🌟 Hydration safe
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const filteredCourses = allCourses.filter((course) => {
    const matchSearch = course.title.toLowerCase().includes(searchText.toLowerCase());
    const matchLevel = filterLevel === "ALL" || course.level === filterLevel;
    return matchSearch && matchLevel;
  });

  const toggleLike = (id) => {
    setLikedCourses((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const openCourse = (id) => router.push(`/courses/${id}`);

  return (
    <div className="min-h-screen p-6 bg-gradient-to-tr from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h1 className="text-4xl font-extrabold text-center sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
          Explore Courses 🚀
        </h1>

        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="input px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition w-full sm:w-auto"
          />
          <select
            value={filterLevel}
            onChange={(e) => setFilterLevel(e.target.value)}
            className="input px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          >
            <option value="ALL">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div
              key={course.id}
              className="relative bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer group"
            >
              <button
                className="absolute top-4 right-4 text-red-500 hover:scale-125 transition-transform duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLike(course.id);
                }}
              >
                {likedCourses.includes(course.id) ? "❤️" : "🤍"}
              </button>

              <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 group-hover:animate-pulse">
                {course.title}
              </h2>
              <span className="badge bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm mb-3 inline-block">
                {course.level}
              </span>
              <p className="text-gray-600 mb-4">{course.description}</p>

              <div className="flex gap-2">
                <button
                  onClick={() => openCourse(course.id)}
                  className="btn flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform duration-300"
                >
                  Open Course
                </button>
                <button
                  onClick={() => alert("AI-assisted learning coming soon!")}
                  className="btn flex-1 border border-purple-500 text-purple-600 hover:bg-purple-50 transition"
                >
                  Read & Learn
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No courses found 😢</p>
        )}
      </div>
    </div>
  );
}
