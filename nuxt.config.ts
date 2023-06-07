// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // pageTransition: { name: "slide-right", mode: 'in-out'},
  },
  css: ['@/assets/css/tailwind.css', '@/assets/css/grid.css', '@/assets/css/content.scss'],
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
})
