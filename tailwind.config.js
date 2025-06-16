/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: 'rgb(255 99 64 / <alpha-value>)', 
        'secondaryColor' : '#c4c4c4',

        'backGroudColor' : '#f5f8ff',
        'textColor' : '#e7e7e7',
      },
      fontFamily: {
        rama: ['"Rama Gothic"', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}
