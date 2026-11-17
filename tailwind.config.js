/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#142B45',
          navyDark: '#0E1E31',
          navyLight: '#1B385A',
          blue: '#2463A6',
          blueHover: '#1D528B',
          blueLight: '#EBF3FA',
          bg: '#FAFAF8',
          surface: '#F1F3F5',
          card: '#FFFFFF',
          text: '#252B32',
          muted: '#5A6572',
          border: '#E2E8F0',
          accent: '#E69A43',
          accentHover: '#D48932',
          accentLight: '#FDF6EE',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Manrope', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'card': '0 2px 8px -2px rgba(20, 43, 69, 0.06), 0 1px 4px -1px rgba(20, 43, 69, 0.04)',
        'card-hover': '0 12px 24px -6px rgba(20, 43, 69, 0.1), 0 4px 10px -2px rgba(20, 43, 69, 0.04)',
        'modal': '0 20px 40px -10px rgba(20, 43, 69, 0.25)',
      }
    },
  },
  plugins: [],
}
