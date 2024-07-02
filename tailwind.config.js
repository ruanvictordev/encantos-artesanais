/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontSize: {
        '18px': '1rem', 
        '20px': '1.3rem',
        '35px': '1.4rem',
        '40px': '1.85rem',
        '50px': '2rem',
      },
    },
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

