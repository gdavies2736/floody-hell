/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{html,js}'",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui',]}, 

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
  },
  colors: {
    'sage': 'B6C4B6',
    'dark-green': '304D30',
    'beige': 'EEF0E5',
  },
  plugins: [],
}

