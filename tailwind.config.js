/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "rgba(97, 71, 255, 1)",
        "custom-red": "rgba(254, 52, 100, 1)",
        "custom-black": "rgba(255, 255, 255, 0.02)",
        "custom-gray": "rgba(24, 27, 40, 1)",
        "custom-dark-gray": "rgba(24, 27, 40, 0.5)",
      },
    },
  },
  plugins: [],
};
