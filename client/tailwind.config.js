/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        main: ['EB Garamond', 'sans-serif'],
        secondary: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
