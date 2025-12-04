/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: "#00ff88",
        dark: "#0a0a0a",
        card: "#121212",
      },
    },
  },
  plugins: [],
}
