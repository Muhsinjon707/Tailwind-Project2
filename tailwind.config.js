/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
        screens: {
            "mid-lg-xl": "1110px"
        }
    },
  },
  plugins: [],
  darkMode: "selector",
};
