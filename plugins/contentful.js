import { createClient } from 'contentful'

const config = {
  accessToken: process.env.contentful.accessToken,
  host: process.env.contentful.host,
  space: process.env.contentful.space,
}

export default {
  createClient: () => createClient(config),
}
