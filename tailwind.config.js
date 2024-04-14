/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "rgba(97, 71, 255, 1)",
        "custom-red": "rgba(254, 52, 100, 1)",
      },
    },
  },
  plugins: [],
};
