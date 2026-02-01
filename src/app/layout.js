import Header from "../components/Header";
import Footer from "../components/Footer";
import { SearchProvider } from "../context/SearchContext";
import "./globals.css";

/* 🔥 SEO + App Metadata */
export const metadata = {
  title: "AI Learning Platform | Learn, Chat & Build Skills",
  description:
    "A modern AI-powered learning platform where you can explore courses, chat with AI, and build skills with beautiful UI and frontend-only logic.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 transition-colors duration-300">
        <SearchProvider>
          {/* Sticky Header */}
          <Header className="sticky top-0 z-50" />

          {/* Main content */}
          <main className="flex-1 w-full px-4 sm:px-6 md:px-10 py-6">
            {children}
          </main>

          {/* Footer */}
          <Footer className="mt-auto bg-gradient-to-r from-indigo-50 via-pink-50 to-yellow-50 py-6 shadow-inner text-gray-800" />
        </SearchProvider>
      </body>
    </html>
  );
}
