"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

  function handleLogin(e) {
    e.preventDefault();
    setError("");

    // Validate email
    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return;
    }

    // Validate password
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be 8+ characters and include number & symbol"
      );
      return;
    }

    // Fake auth
    localStorage.setItem("user", JSON.stringify({ email }));
    router.push("/courses"); // redirect to courses after login
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500">
      <form
        onSubmit={handleLogin}
        className="auth-card bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-96 flex flex-col gap-4"
      >
        <h1 className="text-3xl font-bold text-center text-purple-700">
          Welcome Back
        </h1>

        {error && (
          <p className="text-red-600 text-sm text-center">{error}</p>
        )}

        <input
          className="input p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 shadow-sm"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 shadow-sm"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
          Login
        </button>

        <span className="link text-center text-sm text-gray-600">
          New here?{" "}
          <a href="/auth/signup" className="text-purple-600 hover:underline">
            Create account
          </a>
        </span>
      </form>
    </div>
  );
}
