import { makeSchema } from '@nexus/schema'
import { nexusPrisma } from 'nexus-plugin-prisma'
import path from 'path'

import * as types from './types'
import * as resolvers from './resolvers'

export const schema = makeSchema({
  types: {
    types,
    resolvers,
  },
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    typegen: path.resolve('src/generated/nexus-typegen.ts'),
    schema: path.resolve('src/generated/schema.graphql'),
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: path.resolve('src/graphql/context.ts'),
        alias: 'Context',
      },
    ],
  },
})
