/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:"#04016C",
        secondary:"#4A16BD",
        third:"#7E08C7",
        four:"#E441FF",
        fcol1:"#4E596B",
        five:"#A542C8",
        fcol2:"#7E7EAA"
      },
      fontFamily:{
        'righteous':['righteous','san-serif'],
        'saira':['saira','san-serif'],
        'rowdies':['rowdies','san-serif']
      }
    },
  },
  plugins: [],
}

