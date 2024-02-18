/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        link: '#00376b',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
