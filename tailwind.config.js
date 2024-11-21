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
      },

      fontFamily: {
        geist: ["Geist", "sans-serif"],
      },
    },
  },
  plugins: [],
}