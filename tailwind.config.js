/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors:{
        navy: '#191f36'
      },
      fontfamily: {
        thop: ['nunito','sans-serif']
      },
      boxShadow: {
        share : '0 0 2rem #59b2f4'
      }
    }
  },
  plugins: [],
}

