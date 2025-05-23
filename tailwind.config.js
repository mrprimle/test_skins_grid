/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        black: "#28262D",
        white: "#FFFFFF",
        lightgrey: "#E4E4E5",
        grey: "#8B8A8E",
        yellow: "#EBE231",
        blue: "#324AC2",
        violet: "#6830E0",
        pink: "#9B2A8A",
        gradient1: "#6830E0",
        gradient2: "#6830E0",
      },
    },
  },
  plugins: [],
} 