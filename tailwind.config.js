/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6193AF', // Color primario
        secondary: '#666767', // Color secundario
      },
    },
  },
  plugins: [],
}
