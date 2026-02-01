"use client";
export default function LoadingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-purple-100 via-pink-100 to-blue-100">
      <div className="loader mb-4"></div>
      <p className="text-lg font-semibold animate-pulse">Loading, please wait...</p>

      <style jsx>{`
        .loader {
          border: 6px solid #f3f3f3;
          border-top: 6px solid #8b5cf6;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </div>
  );
}
