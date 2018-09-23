const dotenv = require('dotenv').config()

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'deimaba',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#000000' },
  /*
  ** Customize the progress bar color
  */
  plugins: ['@/plugins/contentful.js'],
  /*
  ** Define environment variables available
  ** in generate and browser context
  */
  env: {
    contentful: {
      accessToken: (process.env.NODE_ENV === 'production') ? dotenv.parsed.CONTENTFUL_DELIVERY_ACCESS_TOKEN : dotenv.parsed.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
      host: (process.env.NODE_ENV === 'production') ? dotenv.parsed.CONTENTFUL_DELIVERY_HOST : dotenv.parsed.CONTENTFUL_PREVIEW_HOST,
      space: dotenv.parsed.CONTENTFUL_MASTER_SPACE_ID,
    },
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['@/plugins/contentful.js'],

    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
