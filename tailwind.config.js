/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': {
          50: '#f2f8f0',
          100: '#e3f0e0',
          200: '#c7e2c3',
          300: '#a0cc98',
          400: '#77b06d',
          500: '#57954d',
          600: '#447a3d',
          700: '#356031',
          800: '#2c4d29',
          900: '#244023',
          950: '#0f2410',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair-display)', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/hero-background.jpg')",
      },
    },
  },
  plugins: [],
} 