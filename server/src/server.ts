import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    hello(name: String!): String
  }
`;

const resolvers = {
  Query: {
    hello: (source: {}, args: any, contect: {}, info: {}) => `Hello, ${args.name}`,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
});

server.listen(
  {
    port: 4000,
    endpoint: '/graphql',
    playground: '/playground',
  },
  () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
