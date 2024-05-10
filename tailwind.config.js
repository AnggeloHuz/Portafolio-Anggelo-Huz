/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        JetBrains: ['JetBrains Mono', 'monospace'],
        Spartan: ['League Spartan', 'sans-serif'],
      },
      colors: {
        negro: '#000000',
        blanco: '#ffffff',
        azul: '#38B6FF',
        azul_oscuro: '#56A1CC',
        gris: '#2D2E33'
      }
    },
  },
  plugins: [],
}

