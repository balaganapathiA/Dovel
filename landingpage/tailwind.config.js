/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [ 'Arial', 'sans-serif'],
      },
      colors: {
        teal: {
          600: "#0A6C74",
          900: "#0A3C42",
        },
      },
    },
  },
  plugins: [],
};

