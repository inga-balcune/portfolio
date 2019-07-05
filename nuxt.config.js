import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Inga's front end web development portfolio" },
      { name:'referrer', content: 'origin'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#537895', height: '4px', duration: 5000  },
  loadingIndicator: {
    name: 'circle',
    color: '#f7f7f7'
  },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/sass/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/Vuelidate'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/moment'
  ],

  styleResources: {
    scss: [
      'assets/sass/abstracts/_functions.scss',
      'assets/sass/abstracts/_mixins.scss',
      'assets/sass/abstracts/_variables.scss' // use underscore "_" & also file extension ".scss"
      ]
  },
  
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS: true,
    extend(config, ctx) {
    }
  },
  // add your environment variables
  env: {
    // baseURL: 
  }
}
