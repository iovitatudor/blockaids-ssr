import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,
  server: {
    port: 3030,
  },
  head: {
    titleTemplate: '%s - BlockAids',
    title: 'BlockAids - a decentralized electronic ecosystem on the blockchain,',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/images/favicon_io/favicon.ico'}
    ]
  },

  css: [
    'assets/fonts.css',
    'assets/styles.css',
  ],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/gtm',
    [
      'nuxt-facebook-pixel-module', {
      track: 'PageView',
      pixelId: '1242686519689591',
      autoPageView: true,
      disabled: false
    }],
  ],

  gtm: {
    id: 'G-4RQY9H7DJD', // Used as fallback if no runtime config is provided
  },

  publicRuntimeConfig: {
    gtm: {
      id: 'G-4RQY9H7DJD',
    }
  },

  axios: {
    baseURL: '/',
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {}
}
