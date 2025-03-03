/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cello': {
          '50': '#f3f6fc',
          '100': '#e6edf8',
          '200': '#c7daf0',
          '300': '#96bbe3',
          '400': '#5e97d2',
          '500': '#3a7abd',
          '600': '#295fa0',
          '700': '#234d81',
          '800': '#1f4068',
          '900': '#20395a',
          '950': '#15243c',
        },

      }
    },
  },
  plugins: [],
}