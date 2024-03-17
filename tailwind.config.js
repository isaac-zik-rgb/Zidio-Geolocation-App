/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'home_hero': 'url("/src/assets/hero-bg.jpg")',
      }
    },
  },
  plugins: [],
}