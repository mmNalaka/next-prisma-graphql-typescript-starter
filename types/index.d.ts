import { PrismaClient } from '@prisma/client'

declare global {
  namespace NodeJS {
    interface Global {
      dbClient: PrismaClient
    }
  }
}
