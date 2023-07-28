// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
        bai: ['"Bai Jamjuree"', ...defaultTheme.fontFamily.sans],
        ovo: ['Ovo', ...defaultTheme.fontFamily.serif],
        roboto: ['Roboto', ...defaultTheme.fontFamily.serif],
        jakarta: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        'light-gray': '#8b8b8c',
        'dull-gray': '#2e2f30',
        overlay: 'rgba(0, 0, 0, 0.2)',
      },
      spacing: {
        'img-s': '288px',
        'img-m': '360px',
        'img-l': '432px',
        'img-xl': '600px',
      },
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },
      keyframes: (theme) => ({
        fadeOut: {
          '0%': {
            backgroundColor: theme('colors.black'),
          },
          '100%': {
            backgroundColor: theme('colors.transparent'),
            zIndex: -1,
          },
        },
      }),
    },
  },
  plugins: [],
};
