import { ApolloServer } from 'apollo-server-micro'

import { schema } from '../../graphql/schema'
import { createContext } from '../../graphql/context'

const IS_DEV = process.env.NODE_ENV === 'development'

const apolloServer = new ApolloServer({
  schema,
  context: createContext,
  tracing: IS_DEV,
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({
  path: '/api/graphql',
})
