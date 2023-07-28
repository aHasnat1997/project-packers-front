/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        Jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        Sora: ['Sora', 'sans-serif']
      },

      // btn:{
      //   "primary": "btn-primary"
      // },

      colors: {
        "primary": "#0D3D4B",
        "primary-hover": "",
        "secondary": "#F2C852",
        "secondary-hover": "",
        "accent": "#6BCCCB",
        "accent-hover": "",
        "white": "#fff",
        "tertiary": "#CFF6EF"
      },

      animation: {
        'spin-slow': 'spin 3s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        btnBounce: 'bounce 1s ease-in-out infinite'
      },

      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        bounce: {
          '0% 100%': {
            transform: 'none',
          },
          '50%': {
            transform: 'scale(.9)'
          }
        }
      }

    },
  },

  plugins: [],
}
