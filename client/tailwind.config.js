/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bluestone: {
          navy: '#011E38',
          dark: '#002855',
          deep: '#15366F',
          accent: '#3F84AD',
          steel: '#4A7B9D',
          coral: '#F15D47',
          orange: '#F05D4D',
          mauve: '#9D7792',
          gold: '#C59A4E',
          'gold-light': '#FBF6EE',
          cream: '#FCFAF7',
          gray: '#F5F5F7',
          border: '#E2E8F0',
          text: '#222222',
          muted: '#666666',
        }
      },
      fontFamily: {
        serif: ['Domine', 'Georgia', 'serif'],
        sans: ['Mulish', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'bs-card': '0 2px 10px rgba(0, 0, 0, 0.05)',
        'bs-hover': '0 8px 24px rgba(0, 0, 0, 0.1)',
        'bs-header': '0 2px 8px rgba(1, 30, 56, 0.08)',
      },
    },
  },
  plugins: [],
}
