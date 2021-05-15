import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma: PrismaClient = new PrismaClient();

const users = [
  {
    id: 1,
    firstName: 'Mannuel',
    lastName: 'Ferreira',
    email: 'mannuel@email.com',
    password: 'password',
    createdAt: new Date(),
  },
  {
    id: 2,
    firstName: 'Jack',
    lastName: 'Ferreira',
    email: 'jack@email.com',
    password: 'password',
    createdAt: new Date(),
  },
];

let idCount = users.length;

const resolvers = {
  Query: {
    info: () => `API for all the sounds`,
    users: async (parent: any, args: any, context: any) => {
      return context.prisma.user.findMany();
    },
  },
  Mutation: {
    user: (parent: any, args: any) => {
      const user = {
        id: idCount++,
        firstName: args.firstName,
        lastName: args.lastName,
        email: args.email,
        password: args.password,
        createdAt: new Date(),
      };
      users.push(user);
      return user;
    },
  },
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'),
  resolvers,
  context: {
    prisma,
  },
});

server
  .listen()
  .then(({ url }) => {
    console.log(`Server is running on ${url}`);
  })
  .catch((error) => {
    console.log(error);
  });
