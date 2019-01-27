const resolve = require('path').resolve

module.exports = {
  root: true,

  env: {
    browser: true,
    es6: true,
    node: true
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  extends: [
    '@nuxtjs',
    'airbnb-base',
    'plugin:vue/recommended',
  ],

  plugins: [
    'import',
    'vue',
  ],

  'settings': {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '@': __dirname,
              'static': resolve(__dirname, 'static'), // use in template with <img src="@static/nuxt.png" />
              '@static': resolve(__dirname, 'static'),
              'assets': resolve(__dirname, 'assets'), // use in template with <img src="@static/nuxt.png" />
              '@assets': resolve(__dirname, 'assets'),
              '@plugins': resolve(__dirname, 'plugins'),
              '@store': resolve(__dirname, '.nuxt/store'),
              '@router': resolve(__dirname, '.nuxt/router'),
              '@pages': resolve(__dirname, 'pages'),
              '@components': resolve(__dirname, 'components')
            }
          }
        }
      }
    }
  },

  // Custom rules
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "semi": [ 2, "never" ],
  }
}
