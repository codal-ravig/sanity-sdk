import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  server:{
    hostname: 'localhost',
    port: 3334
  },
  api: {
    projectId: '7hb3ikrm',
    dataset: 'production'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  }
})
