/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
      'gradient-to-l-transparent-black': 'linear-gradient(to left, transparent, rgba(0, 0, 0, 0.75))',
    },
  },
  },
  plugins: [],
}

