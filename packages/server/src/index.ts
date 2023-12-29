import fs from 'fs';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';

import * as Query from './resolvers/Query';
import * as Mutation from './resolvers/Mutation';

import { getUserId } from './utils/auth';

const prisma: PrismaClient = new PrismaClient();

const resolvers = {
  /**
   *
   * @param parent
   * @param  {{ prisma: Prisma }} args
   * @param {{ prisma: Prisma }} context
   * @param info
   * @returns
   */
  Query,
  Mutation,
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'),
  resolvers,
  debug: true,
  context: ({ req, res }) => {
    return {
      req,
      res,
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
