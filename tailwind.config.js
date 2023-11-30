/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        purple: "#A729F5",
        "light-bluish": "#ABC1E1",
        navy: "#3B4D66",
        "dark-navy": "#313E51",
        "light-grey": "#F4F6FA",
        "grey-navy": "#626C7F",
        success: "rgb(38, 215, 130)",
        danger: "rgb(238, 84, 84)",
        htmlBg: "rgb(255, 241, 233)",
        cssBg: "rgb(224, 253, 239)",
        jsBg: "rgb(235, 240, 255)",
        accBg: "rgb(246, 231, 255)",
      },

      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
