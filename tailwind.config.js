
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'brand-blue': '#00A9FF',
        'brand-purple': '#A076F9',
        'dark-bg': '#0D1117',
        'light-bg': '#161B22',
        'border-color': '#30363d',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'subtle-glow': 'subtleGlow 4s infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        subtleGlow: {
          '0%': { boxShadow: '0 0 10px -5px #00A9FF', opacity: 0.7 },
          '100%': { boxShadow: '0 0 30px -5px #A076F9', opacity: 1 },
        },
      }
    },
  },
  plugins: [],
}
