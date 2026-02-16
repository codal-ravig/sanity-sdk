import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  app: {
    organizationId: 'obrzePuyM',
    entry: './src/App.tsx',
  },
  deployment:{
    appId: "kbc02umagkxxtkw9a0023v01"
  }
})
