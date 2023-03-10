/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Space Grotesk', 'Comfortaa', 'sans-serif'],
        header: ['Space Grotesk', 'Comfortaa', 'sans-serif'],
        comfortaa: ['Comfortaa', 'sans-serif'],
        grotesk: ['Space Grotest', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        'dark-header': '#354259'
      }
    }
  },
  plugins: []
}
