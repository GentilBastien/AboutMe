/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      textColor: {
        'standard': 'var(--col-font)'
      }
    },
  },
  plugins: [],
}

