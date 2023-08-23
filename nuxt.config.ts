// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'tdesign-vue-next/es/nuxt',
    'nuxt-lodash',
    '@nuxt/image',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  build: {
    transpile: ['tdesign-vue-next'],
  },
  pinia: {
    autoImports: ['defineStore'],
  },
})
