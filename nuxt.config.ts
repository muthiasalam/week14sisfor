// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/src/assets/css/main.css'], 
  modules: ["nuxt-directus"], 
  directus: { 
    url: "http://localhost:8055/", 
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
