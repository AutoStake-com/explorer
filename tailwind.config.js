/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#5973fe',
        yes: '#3fb68b',
        no: '#ff5353',
        info: '#00b2ff',
        textMain: '#333',
      },
    },
  },
  plugins: [],
};