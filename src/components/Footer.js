"use client";

export default function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-white">
      {/* Top Wave / Section */}
      <div className="px-6 py-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand / Intro */}
        <div className="space-y-4 animate-fadeIn">
          <h2 className="text-2xl font-extrabold tracking-wide">
            🚀 AI Learning Platform
          </h2>
          <p className="text-sm text-white/90 leading-relaxed">
            Learn. Build. Grow.
            This platform is built to help you master frontend, AI tools,
            and real-world skills with confidence.
          </p>

          <p className="text-sm font-semibold text-yellow-200">
            “Future belongs to those who learn faster.”
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3 animate-slideUp">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:translate-x-2 transition">
              <a href="/" className="hover:text-yellow-300">🏠 Home</a>
            </li>
            <li className="hover:translate-x-2 transition">
              <a href="/about" className="hover:text-yellow-300">ℹ️ About & Help</a>
            </li>
            <li className="hover:translate-x-2 transition">
              <a href="/auth/login" className="hover:text-yellow-300">🔐 Login</a>
            </li>
            <li className="hover:translate-x-2 transition">
              <a href="/auth/signup" className="hover:text-yellow-300">📝 Signup</a>
            </li>
          </ul>
        </div>

        {/* Learning Areas */}
        <div className="space-y-3 animate-slideUp">
          <h3 className="text-lg font-bold">What You’ll Learn</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-200 transition">⚡ Advanced JavaScript</li>
            <li className="hover:text-green-200 transition">⚛️ React & Next.js</li>
            <li className="hover:text-green-200 transition">🤖 AI Integration</li>
            <li className="hover:text-green-200 transition">🎨 UI/UX Design</li>
            <li className="hover:text-green-200 transition">💼 Career Skills</li>
          </ul>
        </div>

        {/* Contact / Help */}
        <div className="space-y-4 animate-fadeIn">
          <h3 className="text-lg font-bold">Need Help?</h3>
          <p className="text-sm text-white/90">
            Feeling stuck or confused?
            Don’t worry — guidance is just one message away.
          </p>

          <a
            href="https://wa.me/923403943171"
            target="_blank"
            className="inline-block px-5 py-3 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 text-black font-bold shadow-lg hover:scale-105 transition"
          >
            📱 WhatsApp: 0340-3943171
          </a>

          <p className="text-xs text-white/80">
            We reply with respect, clarity & honesty.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-4 text-center text-sm bg-white/10">
        <p className="animate-pulse">
          © {new Date().getFullYear()} AI Learning Platform • Built with ❤️ for Future Developers
        </p>
      </div>
    </footer>
  );
}
