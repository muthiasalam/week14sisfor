/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./src/**/*.{vue,js,ts,jsx,tsx}"
    // "./components/**/*.{js,vue,ts}",
    // "./layouts/**/*.vue",
    // "./pages/**/*.vue",
    // "./plugins/**/*.{js,ts}",
    // "./app.vue",
    // "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
      'aliceblue': '#F0F8FF',
      'merahgelap': '#7E0404',
      'abu':'#F4F4F4',
      'abusambutan':'#736E6E',
      'abunama': '#595454',
      'merahdesain': '#C30404'
    },
    fontSize: {
      '10': '10px',
      '12': '12px', 
      '16': '16px',
      '10': '10px',
      '18': '18px',
      '14': '14px',
      '24': '24px',
      '11': '11px',
      '21': '21px',
      '19': '19px'

    },
  },
  },
  plugins: [],
}

