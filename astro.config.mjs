import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import astroI18next from 'astro-i18next'

export default defineConfig({
  site: 'https://skopincev.dev',
  integrations: [mdx(), sitemap(), react(), tailwind(), astroI18next()]
})
