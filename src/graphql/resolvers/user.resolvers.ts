import { queryType, mutationType } from '@nexus/schema'

export const Query = queryType({
  definition(t) {
    t.list.field('allUsers', {
      type: 'User',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.user.findMany({})
      },
    })
    t.crud.user()
    t.crud.users()
  },
})

export const Mutation = mutationType({
  definition(t) {
    t.crud.createOneUser()
    t.crud.deleteOneUser()
    t.crud.updateOneUser()
  },
})
