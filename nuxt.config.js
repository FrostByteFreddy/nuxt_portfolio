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

  // watch and render scss
  hooks: {
    'build:done' () {
      const { spawn } = require('child_process');
      spawn('npm', ['run', 'watch:scss'], { stdio: 'inherit' }); 
    }
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: [
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
  ],

  modules: [
    '@nuxtjs/style-resources',
  ],

  build: {
  }
}
