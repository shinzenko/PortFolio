/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: { max: "800px" },
      lg: "800px",
    },
    extend: {},
  },
  plugins: [],
};
