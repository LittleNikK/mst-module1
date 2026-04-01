/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: '#ff2d2d'
      },
      boxShadow: {
        glow: '0 0 80px rgba(255, 45, 45, 0.18), 0 30px 70px rgba(0, 0, 0, 0.28)'
      }
    }
  },
  plugins: []
};
