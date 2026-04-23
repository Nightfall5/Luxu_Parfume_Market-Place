/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        float: 'float 10s ease-in-out infinite',
        slideUp: 'slideUp 0.5s ease-out forwards',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  plugins: [],
};