/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/hooks/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        card: "var(--card)",
        text: "var(--text)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        app: "var(--bg)",
      },
    },
  },
  plugins: [],
};
