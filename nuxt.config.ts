// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  css: ['@/assets/css/tailwind.css', '@/assets/css/grid.css', '@/assets/css/content.scss'],
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },
  ssr: true
})
