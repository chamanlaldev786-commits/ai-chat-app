"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header({ onSearch, onFilter }) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("ALL");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    onSearch && onSearch(e.target.value);
  };

  const handleFilter = (e) => {
    setLevel(e.target.value);
    onFilter && onFilter(e.target.value);
  };

  return (
    <header className="w-full flex flex-col sm:flex-row items-center justify-between p-4 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg sticky top-0 z-50">
      {/* Logo */}
      <h2
        className="text-2xl font-extrabold text-white cursor-pointer hover:text-yellow-300 transition"
        onClick={() => router.push("/")}
      >
        LearnHub
      </h2>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mt-4 sm:mt-0">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search courses..."
          className="p-2 rounded-lg w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
        />

        <select
          value={level}
          onChange={handleFilter}
          className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
        >
          <option value="ALL">All</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      {/* Create Course Button */}
      <button
        onClick={() => router.push("/dashboard")}
        className="mt-4 sm:mt-0 bg-yellow-400 text-white font-bold px-4 py-2 rounded-lg shadow-md hover:bg-yellow-500 hover:scale-105 transition-transform duration-300"
      >
        + Create Course
      </button>
    </header>
  );
}
