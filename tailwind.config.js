/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: {
          light: '#2d2d2d',
          DEFAULT: '#1c1c1c',
          dark: '#010107',
        },
        white: {
          light: '#f5f5f5',
          DEFAULT: '#e0e0e0',
          dark: '#c0c0c0',
        },
        blue: {
          dark: '#0a0f2c',
        },
      },
      backgroundImage: {
        'grain-texture': 'url(/path/to/grain-texture.png)',
        'grid-lines': 'linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
      },
      boxShadow: {
        'solar-glow': '0 0 20px 5px rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'move-shadow': 'moveShadow 10s infinite',
      },
      keyframes: {
        moveShadow: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(10px, 10px)' },
        },
      },
    },
  },
  plugins: [],
};