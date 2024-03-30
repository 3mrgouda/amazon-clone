/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titleFont: "Roboto",
        bodyFont: "Poppins",
      },
      colors: {
        blue: "#131921",
        light: "#232f3e",
        yellow: "#febd69",
        whiteText: "#ffffff",
        lightText: "#ccc",
        quantityBox: "#f0f2f2",
        footerBottom: "#131A22",
      },
      boxShadow: {
        textShadow: "0px 0px 32px 1px rgba(199,199,199,1)",
        amazonInput: "0 0 3px 2px rgba(228 121 17 /50%)",
      },
    },
  },
  plugins: [],
};
