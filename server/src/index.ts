import fs from 'fs';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';

import * as Query from './resolvers/Query';
import * as Mutation from './resolvers/Mutation';

import { getUserId } from './utils/auth';

const prisma: PrismaClient = new PrismaClient();

const resolvers = {
  Query,
  Mutation,
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'),
  resolvers,
  context: ({ req }) => {
    return {
      ...req,
      prisma,
      userId: req && req.headers.authorization ? getUserId(req) : null,
    };
  },
});

server
  .listen()
  .then(({ url }) => {
    console.log(`🏗  Server is running on ${url}`);
  })
  .catch((error) => {
    console.log(error);
  });
