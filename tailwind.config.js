/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./about.html", "./service.html", "./portfolio.html", "./contact.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        'brand': {
          500: '#4D61D8',
          700: '#2B3896',
          900: '#121B4B',
        },
        'navy': {
          950: '#0B1026',
        },
        'accent': {
          500: '#12A8B4',
        },
        'ink': {
          950: '#0E1428',
        },
        'text': {
          500: '#687386',
          700: '#273248',
        },
        'surface': '#FFFFFF',
        'canvas': '#F7F9FC',
        'canvas-alt': '#EEF2F8',
        'border': '#DCE3EE',
        'success': '#18794E',
        'warning': '#9A6700',
        'danger': '#B42318',
        'lunatech-blue': '#0e6daf',
        'lunatech-dark': '#064c7c',
        'lunatech-accent': '#018ca1',
      },
      fontFamily: {
        display: ["Manrope", "Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      }
    },
  },
  plugins: [],
}
