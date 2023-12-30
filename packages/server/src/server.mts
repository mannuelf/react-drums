import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

import * as Mutation from './resolvers/Mutation';
import * as Query from './resolvers/Query';

import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import http from 'http';
import { getUserId } from './utils/auth';

const prisma: PrismaClient = new PrismaClient();

const resolvers = {
  Query,
  Mutation,
};

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'),
  resolvers,
  context: ({ req, res }) => {
    return {
      req,
      res,
      prisma,
      userId: req && req.headers.authorization ? getUserId(req) : null,
    };
  },
});

await server.start();

app.use(cors(), bodyParser.json(), expressMiddleware(server));

await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
