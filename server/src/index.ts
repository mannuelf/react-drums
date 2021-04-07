import { ApolloServer } from "apollo-server";

const typeDefs = `
  type Query {
    info: String!,
    kit: [Kit!]!
  }

  type Kit {
    id: ID!,
    kitName: String!,
    description: String!,
  }
`;

const aKit = {
  id: 1,
  kitName: "808",
  description: "Classic drum machine",
};

const resolvers = {
  Query: {
    info: () => `API for all the sounds`,
    kit: () => {
      "id": 1,
      "kitName": "808",
      "description": "Classic drum machine"
    }
  },

  Kit: {
    id: (parent) => parent.id,
    name: (parent) => parent.name,
    description: (parent) => parent.description,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server is running on ${url}`);
});
