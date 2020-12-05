import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

export interface Context {
  db: PrismaClient
}

export function createContext(props): Context {
  return {
    ...props,
    db,
  }
}
