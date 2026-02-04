"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "../../../utils/fakeAuth"; // helper function

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

  function handleSignup(e) {
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
        "Password must be at least 8 characters, include a number & symbol"
      );
      return;
    }

    // Fake auth
    login({ email }); // saves user in localStorage
    router.push("/courses"); // redirect after signup
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500">
      <form
        onSubmit={handleSignup}
        className="auth-card bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-96 flex flex-col gap-4"
      >
        <h1 className="text-3xl font-bold text-center text-purple-700">
          Create Account
        </h1>

        {error && (
          <p className="text-red-600 text-sm text-center">{error}</p>
        )}

        <input
          type="email"
          className="input p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 shadow-sm"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="input p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 shadow-sm"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
          Sign Up
        </button>

        <p className="text-sm text-gray-600 text-center">
          Already have account?{" "}
          <a href="/auth/login" className="text-purple-600 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
