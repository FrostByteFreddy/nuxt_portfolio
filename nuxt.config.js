export default {
  head: {
    title: 'portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: [
  ],

  styleResources: {
    scss: [
      '~/assets/scss/main.scss'
    ],
  },

  plugins: [
  ],

  components: true,

  buildModules: [
  ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
  ],

  build: {
  }
}
