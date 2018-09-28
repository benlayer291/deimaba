const build = require('./config/build')
const env = require('./config/env')
const head = require('./config/head')

module.exports = {
  /*
  ** Headers of the page
  */
  head,
  /*
  ** Nuxt mode
  */
  mode: 'universal',
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#D3B38B' },
  /*
  ** Customize the progress bar color
  */
  plugins: ['@/plugins/contentful.js'],
  /*
  ** Define environment variables available
  ** in generate and browser context
  */
  env,
  /*
  ** Build configuration
  */
  build,
  /*
  ** CSS
  */
  css: [
    {
      src: '@/assets/style/main.css',
      lang: 'postcss',
    },
  ],
}
