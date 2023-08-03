/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#ff2e59',
        'blue': '#2C73D2',
        'dark': '#1e293b',
        'dark-light': '#7D7D7D',
        'gray': '#686868'
      },
      boxShadow: {
        'custom': '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e',
      }
    },
    backgroundImage: {
      'img-gradient': 'linear-gradient(to top, #692074, #ae216b, #df4454, #f67a36, #f1b51b)',
      'text-gradient': 'linear-gradient(to left, #692074, #ae216b, #df4454, #f67a36)',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    screens: {
      sm: '540px',
      md: '768px',
      lg: '1024px',
      xl: '1172px',
    },
  },
  plugins: [],
}

