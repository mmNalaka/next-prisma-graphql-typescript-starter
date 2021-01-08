import NextAuth, { InitOptions } from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'
import { NextApiHandler } from 'next'

import { dbClient } from '../../../../db/client'

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options)
export default authHandler

const options: InitOptions = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: Adapters.Prisma.Adapter({
    prisma: dbClient,
  }),

  secret: process.env.SECRET,

  callbacks: {
    signIn: async (user, account, profile) => {
      if (account.provider === 'google' && profile.verified_email === true) {
        console.log({
          user,
          profile,
        })
        return Promise.resolve(true)
      } else {
        return Promise.resolve(false)
      }
    },
  },
}
