import { ApolloServer } from 'apollo-server';
import fs from 'fs';
import path from 'path';

const typeDefs = `  
  type Query {
    info: String!
    users: [User!]!
    user(id: ID!): User
  }
  
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
  
  type Mutation {
    user(
        firstName: String!, 
        lastName: String!, 
        email: String!, 
        password: String!
    ): User!

    updateUser(firstName: String, lastName: String, email: String, password: String): User
  }
`;

const users = [
  {
    id: 1,
    firstName: 'Mannuel',
    lastName: 'Ferreira',
    email: 'mannuel@email.com',
    password: 'password',
  },
  {
    id: 2,
    firstName: 'Jack',
    lastName: 'Ferreira',
    email: 'jack@email.com',
    password: 'password',
  },
];

let idCount = users.length;

const resolvers = {
  Query: {
    info: () => `API for all the sounds`,
    users: () => users,
  },
  Mutation: {
    user: (parent: any, args: any) => {
      const user = {
        id: idCount++,
        firstName: args.firstName,
        lastName: args.lastName,
        email: args.email,
        password: args.password,
      };
      users.push(user);
      return user;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server is running on ${url}`);
});
