/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx'
  ],
  theme: {
    extend: {
      screens: {
        'xs': '360px',
        'sm': '420px',
      },
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'background': "url('/background.png')",
      },
      dropShadow: {
        'ticket': '0 0 48px  rgba(147, 147, 147, 0.63)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
