/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./content/**/*.{html,js}",
    "./layouts/**/*.{html,js}",
    "./docs/**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

