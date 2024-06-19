/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'img': "url('../public/bg1.jpg')",
      },
  },
    fontFamily: {
       signature: ["Great Vibes"],
    },
    
  },
  plugins: [],
}


