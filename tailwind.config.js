/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFD700',
          dark: '#E6C200',
        },
        secondary: {
          DEFAULT: '#1a237e',
          light: '#534bae',
          dark: '#000000',
        },
      },
    },
  },
  plugins: [],
};