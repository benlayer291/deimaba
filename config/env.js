const env = require('dotenv').config()

module.exports = {
  contentful: {
    accessToken: (process.env.NODE_ENV === 'production') ? env.parsed.CONTENTFUL_DELIVERY_ACCESS_TOKEN : env.parsed.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    host: (process.env.NODE_ENV === 'production') ? env.parsed.CONTENTFUL_DELIVERY_HOST : env.parsed.CONTENTFUL_PREVIEW_HOST,
    space: env.parsed.CONTENTFUL_MASTER_SPACE_ID,
  },
}
