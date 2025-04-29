/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          blue: {
            900: '#1e3a8a', // Primary color
          },
          yellow: {
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
          },
        },
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }