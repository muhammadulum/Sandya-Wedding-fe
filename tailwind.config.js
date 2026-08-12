/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#b48b59",
        secondary: "#f5e7cc",
        accent: "#714c2d",
        bg: "#fff8f1",
        textenvelop: "#552F1E",
        // teksprimary: "#6e4a1a",
        // textsecondary: "#3e2a12",
        teksprimary: "#fffaf2", // sebelumnya #6e4a1a → ganti lebih terang
        textsecondary: "#E5C494", // sebelumnya #3e2a12 → ganti lebih terang
      },
      fontFamily: {
        belleza: ['"Belleza"', "sans-serif"],
        pinyon: ['"Pinyon Script"', "cursive"],
        snell: ['"Snell Roundhand"', "sans-serif"],
        greatvibes: ['"Great Vibes"', "cursive"],
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-50%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "50%": { transform: "translateY(10px)", opacity: "0.5" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(50%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-50%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slideDown: "slideDown 1.2s ease-out forwards",
        slideUp: "slideUp 1.2s ease-out forwards",
        slideLeft: "slideLeft 1.5s ease-out forwards",
        slideRight: "slideRight 1.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
