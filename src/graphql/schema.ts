import { makeSchema } from 'nexus'
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
})
