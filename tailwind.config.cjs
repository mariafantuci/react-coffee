/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './src/*.tsx',
  ],
  theme: {
    fontSize:{
      '2xxs': 10,
      xxs: 12,
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
      '3xl': 48,
    },
    colors: {
      'transparent': 'transparent',
      'black': '#000000',
      'white': '#ffffff',
      'background': '#FAFAFA',

      'yellow-dark': '#C47F17',
      'yellow': '#DBAC2C',
      'yellow-light': '#F1E9C9',
      
      'purple-dark': '#4B2995',
      'purple': '#8047F8',
      'purple-light': '#EBE5F9',

      'base-title': '#272221',
      'base-subtitle': '#403937',
      'base-text': '#574F4D',
      'base-label': '#8D8686',

      'base-hover': '#D7D5D5',
      'base-button': '#E6E5E5',
      'base-input': '#EDEDED',
      'base-card': '#F3F2F2',
    },
    extend: {
      fontFamily: {
        'baloo': "'Baloo 2','cursive'",
        'Roboto': "'Roboto','sans-serif'",
      },
      borderRadius: {
         'large': '36px'
      },
      backgroundImage: {
        'hero-bg': "url('src/assets/Background.svg')",
      }
    },
  },
  plugins: [],
}
