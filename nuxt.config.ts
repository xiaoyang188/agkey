export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  experimental: {
    // 禁用模块路径的模板导入解析
    templateImportResolution: false
  },
  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/tailwindcss'
  ],

  css: ['~/assets/css/main.css'],

  // 禁用SSR以避免水合不匹配问题
  ssr: false,

  // 确保组件自动导入
  components: {
    global: true,
    dirs: ['~/components']
  },

  elementPlus: {
    /** Options */
  }
})
