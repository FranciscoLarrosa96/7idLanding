module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#ff1f43',       // Rojo brillante
        secondary: '#e50914',  // Rojo fuerte tipo Netflix
        background: '#0b000c', // Fondo oscuro total
        text: '#ffffff',       // Blanco puro
        border: '#8f001c',     // Rojo oscuro para bordes
        hover: '#ff4757',      // Rojo claro para hover
      },
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
