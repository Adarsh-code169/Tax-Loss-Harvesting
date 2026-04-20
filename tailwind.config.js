/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        page: {
          light: '#F0F2F5',
          dark: '#0F1117'
        },
        navbar: {
          light: '#FFFFFF',
          dark: '#1A1F2E'
        },
        card: {
          light: '#FFFFFF',
          dark: '#1A1F2E'
        },
        after: '#2563EB',
        positive: '#16A34A',
        negative: '#DC2626',
        selectedRow: '#EFF6FF',
      }
    },
  },
  plugins: [],
}
