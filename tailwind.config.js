module.exports = {
  purge: ['./**/*.js', './**/*.tsx'],
  theme: {
    fontFamily: {
      'basier-circle': [
        'basier_circle',
        '-apple-system',
        'system-ui',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif'
      ]
    },
    extend: {
      // Apideck UI color palette from website
      colors: {
        primary: '#BE2AFA',
        secondary: '#5C51CE',
        ui: {
          dark: '#090F25',
          lightGray: '#F7FAFF',
          100: '#F6F8FC',
          200: '#CDCFE5',
          300: '#7478AA',
          400: '#6566A8',
          500: '#40418C',
          600: '#252A62',
          700: '#191D50',
          800: '#0A0E42',
          900: '#090F25'
        }
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')]
};
