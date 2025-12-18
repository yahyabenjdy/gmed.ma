/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        medical: {
          cyan: "#00B4D8", // Bright professional cyan
          navy: "#03045E", // Deep premium navy
          light: "#CAF0F8", // Soft medical background
          darkCyan: "#0077B6", // Hover states
        },
      },
    },
  },
  plugins: [],
};
