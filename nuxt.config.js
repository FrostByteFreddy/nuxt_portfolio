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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://kit.fontawesome.com/7a8dc7b97f.css',
        crossorigin: 'anonymous'
      }
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
    '~/assets/scss/main.scss'
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
  ],

  modules: [
  ],

  build: {
  }
}
