/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontSize: {
      xs: ["12px", "16.8px"],
      sm: ["14px", "19.6px"],
      base: ["16px", "22.4px"],
      lg: ["22px", "30.8px"],
      xl: ["24px", "32px"],
    },
    screens: {
      xs: "480px",
      md: "1200px",
    },

    extend: {
      fontFamily:{
  ubuntu: ['Ubuntu', 'sans-serif'],
      },
      screens: {
        "max-xs": { max: "480px" },
      },
      colors: {
        lightRed: "#FFEFEE",
        error: "#ED3A32",
        midGray: "#D1D4D7",
        primary: "#008F91",
        secondary: "#F05E22",
      },
    },
  },
  plugins: [],
};
