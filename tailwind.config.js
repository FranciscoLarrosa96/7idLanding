module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#ff0000',       // Rojo brillante
        secondary: '#FFC400',  // Rojo fuerte tipo Netflix
        background: '#000000', // Fondo oscuro total
        text: '#ffffff',       // Blanco puro
        border: '#2B2B2B',     // Rojo oscuro para bordes
        hover: '#cc0000',      // Rojo claro para hover
      },
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
