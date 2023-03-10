/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1440px'
      }
    },
    fontFamily: {
      Rubik: ['Rubik', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
