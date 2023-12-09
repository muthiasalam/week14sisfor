// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/src/assets/css/main.css'], // Ubah path CSS sesuai dengan struktur folder yang benar
  modules: ["nuxt-directus"], 
  directus: { 
    url: "http://localhost:8055/", // Ganti dengan URL proyek Directus yang benar
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
