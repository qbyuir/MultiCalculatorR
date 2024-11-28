/** @type {import('tailwindcss').Config} */
export default {
  content: [
    ".index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'default': '#100a1c',
        'btn-hover': 'rgba(42, 50, 113, 0.28);',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(50% 30% ellipse at center top, #3c2d61 0%,rgba(0, 0, 0, 0) 100%), radial-gradient(60% 50% ellipse at center bottom, #1e0d41 0%, #100a1c 100%)'
      },
      textColor: {
        'default': '#b79cf5'
      },
      fontSize: {
        '2r': '2rem',
        '28px': '28px'
      },
      padding: {
        '1.6': '1.6rem',
      },
      width: {
        '7.5': '7.5rem',
      },
      maxWidth: {
        '60r': '60rem'
      },
      spacing: {
        '55': '55%',
        '7/8': '80%'
      },
      translate: {
        '50%': 'transform: translate(-50%, -50%)'
      },
      transitionProperty: {
        'btn': 'all 0.5s'
      },
      lineHeight: {
        '3r': '3rem'
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

