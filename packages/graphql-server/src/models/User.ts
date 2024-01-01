import { builder } from '../builder';
import { prisma } from '../db';

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    firstName: t.exposeString('firstName', { nullable: true }),
    lastName: t.exposeString('lastName', { nullable: true }),
    email: t.exposeString('email'),
    loggedIn: t.exposeBoolean('loggedIn', { nullable: true }),
    password: t.exposeString('password'),
    isAdmin: t.exposeBoolean('isAdmin', { nullable: true }),
    createdAt: t.expose('createdAt', { type: 'Date' }),
    updatedAt: t.expose('updatedAt', { type: 'Date' }),
  }),
});

builder.queryType({});

builder.queryField('users', (t) =>
  t.prismaField({
    type: ['User'],
    resolve: async (query, root, args, ctx, info) => {
      return prisma.user.findMany({ ...query });
    },
  }),
);
