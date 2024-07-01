/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      'p-color': '#FFB1AE',
      's-color': '#FFB6B2',
      't-color': '#FFD7CC',
      'q-color': '#FFEEE2'
    },
    fontFamily: {
      'poppins': 'Poppins',
      'vibur': 'Vibur'
    }
  },
  plugins: [],
}

