/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'primary': 'var(--primary-default)',
      'primary-strong': 'var(--primary-strong)',
      'primary-weak': 'var(--primary-weak)',
      'primary-weakest': 'var(--primary-weakest)',
    },
    screens:{
      md: '1024px',
    },
    fontFamily: {
      sans: [ 'Open Sans'],
    },


  },
  plugins: [],
}

