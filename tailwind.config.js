/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: '#C9B037',
      },
      fontFamily: {
        fontFamily: {
  cinzel: ['Cinzel', 'serif'],
},
      },
    },
  },
  plugins: [],
}