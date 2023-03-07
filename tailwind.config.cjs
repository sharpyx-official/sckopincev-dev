/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Space Grotesk', 'sans-serif'],
        header: ['Space Grotesk', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
}
