/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        main: "#FFFFFF",
        primary: "#FEDC82",
        secondary: "#DEAB66",
        grayy: "#333333",
        graytext: "#767676",
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },
      boxShadow: {
        shadowcustom1: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
      },
    },
  },
  plugins: [],
};
