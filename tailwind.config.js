/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./about.html", "./service.html", "./portfolio.html", "./contact.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        'lunatech-blue': '#0e6daf',
        'lunatech-dark': '#064c7c',
        'lunatech-accent': '#018ca1',
      }
    },
  },
  plugins: [],
}
