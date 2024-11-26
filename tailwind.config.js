/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#E3E8EF",
        secondaryColor: "#181516",
        tertiaryColor: "#AFAFB5",
        greenAccentColor: "#48FF00",
        yellowAccentColor: "#FF0000FF",
        redAccentColor: "#FFD900FF",
      },

      fontFamily: {
        geist: ["Geist", "sans-serif"],
        malinton: ["Malinton", "sans-serif"],
      },
    },
  },
  plugins: [],
}