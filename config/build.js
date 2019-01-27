const postcssImport = require('postcss-import')
const postcssSimpleVars = require('postcss-simple-vars')
const postcssCalc = require('postcss-calc')
const postcssNested = require('postcss-nested')
const postcssColorMod = require('postcss-color-mod-function')
const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
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
  // Process css with postcss plugins
  postcss: [
    postcssImport(),
    postcssSimpleVars(),
    postcssCalc(),
    postcssNested(),
    postcssColorMod(),
    postcssPresetEnv({
      stage: 1,
      browsers: ['last 2 versions', 'ie >= 11'],
    }),
  ],
}
