/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'base-color': '#fbbf24',
        'cabaret-red': '#f59e0b',
        'dark-gray': '#000000',
        'primary-yellow': '#fbbf24',
        'primary-black': '#000000',
      },
    },
  },
  plugins: [],
}

