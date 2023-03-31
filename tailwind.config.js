/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      screens: {
        hsm: "400px",
      },
      colors: {
        primary: "#ff0a54",
        secondary: {
          100: "#778da9",
          200: "white",
          300: "#1b263b",
        },
      },
      fontFamily: {
        // you can add other fonts as well
        body: ["Nunito"],
      },
    },
  },
  plugins: [],
};
