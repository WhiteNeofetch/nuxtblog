export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'front',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axiosport.js',
        // '~/plugins/vee-validate.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '90334661',
        webvisor: true,
        clickmap: true,
        useCDN: false,
        trackLinks: true,
        accurateTrackBounce: true,
      }
    ],
  ],

  auth:{
    strategies:{
      local:{
        scheme: 'refresh',
        token: {
          property: 'accessToken',
          maxAge: 1800,
          type: 'Authorization'
        },
        refreshToken: {
          property: 'refreshToken',
          data: 'refreshToken',
          maxAge: 60 * 60 * 24 * 30
        },
        endpoints:{
          user:false,
          refresh:{
            url:'/authClient/refresh',
            method:'post',
          },
          login:{
            url:'/authClient/login',
            method:'post',
            propertyName:'accessToken'
          },
          logout:{
            url:'/authClient/logout',
            method:'post',
          }
        }
      }
    }
  },

  server: {
    host: process.env.NUXT_APP_HOST, // default: localhost
    port: process.env.NUXT_APP_PORT // default: 3000
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.NUXT_APP_BASE_URL
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  }
}
