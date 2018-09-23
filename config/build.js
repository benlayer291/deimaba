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
    require('postcss-import')(),
    require('postcss-calc')(),
    require('postcss-nested')(),
    require('postcss-css-variables')(),
    require('postcss-preset-env')({
      stage: 1,
      browsers: ['last 2 versions', 'ie >= 11'],
    }),
  ],
}
