"use client";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        px-4 py-2 rounded-lg 
        border border-white/40 
        bg-white/20 backdrop-blur-sm
        text-white font-semibold 
        hover:bg-white/40 hover:scale-105
        transition-all duration-300
      "
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
