/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        hanken: ['HankenGrotesk', 'sans-serif'],
      },
      colors: {
        deepPurple: '#4432f0',
        lightPurple: '#6440fc',
        deepestPurple: '#4926d3',
      },
    },
  },
  plugins: [],
}

