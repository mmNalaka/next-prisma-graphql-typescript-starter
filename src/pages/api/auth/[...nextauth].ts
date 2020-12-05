import NextAuth, { InitOptions } from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'
import { NextApiHandler } from 'next'

import { dbClient } from '../../../../db/client'

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options)
export default authHandler

const options: InitOptions = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_AUTH_CLIENT_ID,
      clientSecret: process.env.GITHUB_AUTH_CLIENT_SECRET,
    }),
  ],
  adapter: Adapters.Prisma.Adapter({
    prisma: dbClient,
  }),

  secret: process.env.SECRET,
}
