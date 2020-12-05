import { PrismaClient } from '@prisma/client'
import { NextApiResponse } from 'next'
import { NextApiRequest } from 'next-auth/_utils'

import { dbClient } from '../../db/client'

export interface Context {
  prisma: PrismaClient
  req: NextApiRequest
  res: NextApiResponse
}

export const createContext = (props) => {
  return {
    ...props,
    prisma: dbClient,
  }
}
