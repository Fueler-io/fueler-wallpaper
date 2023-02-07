/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      metropolis: ['Metropolis', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary-blue': '#0d0543',
      },
      screens:{
        'xs': {'max':'639px'}
      }
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
