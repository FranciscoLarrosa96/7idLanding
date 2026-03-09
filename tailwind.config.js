module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000',
        accent: '#FFC400',
        'background-light': '#f8f6f6',
        'background-dark': '#221610',
        // legacy aliases
        main: '#FF0000',
        yellow: '#FFC400',
        'gray-dark': '#2B2B2B',
        'gray-mid': '#6E6E6E',
        'gray-light': '#EDEDED',
      },
      fontFamily: {
        sans: ['Inter', 'Public Sans', 'sans-serif'],
        display: ['Inter', 'Public Sans', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
}
