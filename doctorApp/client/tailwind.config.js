/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#0067ff",
        yellowColor: "#feb60d",
        purpleColor: "#9771ff",
        irisBlueColor: "#01b5c5",
        headingColor: "#181a1e",
        textColor: "#4e545f",
      },

      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
      },
    },
  },
  plugins: [],
};
