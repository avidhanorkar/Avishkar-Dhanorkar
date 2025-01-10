/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-mono': ['Roboto Mono', 'monospace'],
        'lora': ['Lora', 'serif'] // Add Lora Serif here
      }
    },
  },
  plugins: [],
}