/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'fadeinright': 'fadeinright 1s ease-in-out',
        'fadeindown': 'fadeindown 1s ease-in-out',
        'fadeinleft': 'fadeinleft 1s ease-in-out',
        'fly-in-down': 'fly-in-down 1s ease-in-out',
      },
      keyframes: {
        fadeinright: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        
        fadeindown: {
          '0%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

        fadeinleft: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

        'fly-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

