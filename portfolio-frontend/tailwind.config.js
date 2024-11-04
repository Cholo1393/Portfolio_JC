/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 1s infinite', // Vous pouvez ajuster la durée et le type d'animation
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15%)' }, // Ajustez le pourcentage pour changer la hauteur du rebond
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        customRed: '#FF0000',
      },
    },
  },
  variants: {},
  plugins: [],
};
