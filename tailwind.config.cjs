/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
      keyframes: {
        breathingText: {
          "0%": { color: "#6666ff"},
          "10%": { color: "#0099ff"},
          "50%": { color: "#00ff00"},
          "75%": { color: "#ff3399"},
          "100%": { color: "#6666ff"}
        }
      },
      animation: {
        'breathingTextAnim':  'breathingText 7s linear infinite' 
      }
    },
  },
  plugins: [],
}

