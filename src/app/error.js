"use client";
export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-6">
      <h1 className="text-4xl font-bold text-red-600 mb-4 animate-pulse">Oops! Something went wrong.</h1>
      <p className="text-red-500 mb-6">Please try again or contact support.</p>
      <a href="/" className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:scale-105 transition-transform">
        Go to Home
      </a>
    </div>
  );
}
