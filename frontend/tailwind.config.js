export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1C1C1C',
        secondary: '#8B0000',
        gold: '#D4AF37'
      },
      fontFamily: {
        gothic: ['Cinzel', 'serif'],
        body: ['Roboto', 'sans-serif']
      },
      boxShadow: {
        'glow-gold': '0 0 15px #D4AF37, 0 0 30px #D4AF37',
      }
    },
  },
  plugins: [],
}
