"use client";
import { useState } from "react";

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createCourse = () => {
    if (!title) return alert("Please enter course title!");
    alert(
      `Frontend only: Course "${title}" created locally. Description: "${description}"`
    );
    setTitle("");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-50 via-pink-50 to-blue-50 p-6 flex flex-col items-center">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-extrabold text-purple-700 mb-6 text-center">
          Create a New Course
        </h1>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Course Title"
          className="input mb-4 w-full border border-gray-300 focus:ring-2 focus:ring-purple-500 rounded-lg p-3 transition-all"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Course Description (optional)"
          className="input mb-6 w-full border border-gray-300 focus:ring-2 focus:ring-purple-500 rounded-lg p-3 transition-all resize-none h-24"
        />

        <button
          onClick={createCourse}
          className="btn w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Create Course
        </button>
      </div>
    </div>
  );
}
