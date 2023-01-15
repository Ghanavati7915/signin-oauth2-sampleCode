export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'signin-oauth2-samplecode',
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
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
    '@nuxtjs/auth-next',
  ],


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

   auth: {
  strategies: {
    social: {
      scheme: 'oauth2',
      endpoints: {
        authorization: 'https://betezadi.ir/login',
                token: undefined,
        userInfo: 'https://www.googleapis.com/oauth2/v3/userinfo',
        logout: 'https://example.com/logout'
      },
      token: {
        property: 'access_token',
        type: 'Bearer',
        maxAge: 1800
      },
      refreshToken: {
        property: 'refresh_token',
        maxAge: 60 * 60 * 24 * 30
      },
      responseType: 'code',
      grantType: 'authorization_code',
      accessType: undefined,
      // redirectUri: 'http://localhost:3000/page2',
      redirectUri: 'https://www.oauth.com/playground/authorization-code.html',
      logoutRedirectUri: 'http://localhost:3000',
      clientSecret: 'FLEIktMJN2Qa0aPho1IeNz907zk70PwFQXmcVFIwiKOSUzHD',
      clientId: 'tVG5_d0BJqoNGgKFNr4aWSX5',
      scope: ['photo', 'offline_access'],
      state: 'KYfd5MwhMLhUMusv',
      codeChallengeMethod: '',
      responseMode: '',
      acrValues: '',
      // autoLogout: false
    },
    oidc: {
      scheme: 'openIDConnect',
      callbackUri: 'https://localhost:3000/callback',
      clientId: 'CapAlertMind',
      clientSecret: 'xyz',
      scope: ['openid','full_access', 'admin','profile','email','phone','address'],
      state: '7aa0efae80db09c540136f009a3ad25f19e51046',
      responseType: 'code',
      endpoints: {
        // configuration: 'http://localhost:3000/.well-known/openid-configuration',
        configuration: 'https://betezadi.ir/.well-known/openid-configuration',
      },
    }
  }
},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
