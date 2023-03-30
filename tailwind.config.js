/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      screens: {
        hsm: "400px",
      },
      colors: {
        primary: "#bde0fe",
        secondary: {
          100: "#e3d5ca",
          200: "#2f3e46",
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
