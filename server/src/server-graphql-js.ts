// UNUSED FILE, just example

import { ApolloServer } from 'apollo-server';
import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      hello: {
        args: {
          name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'Please provide your name',
          },
        },
        resolve: (source, args, context, info) => {
          return `HELLO, ${args.name}`;
        },
        type: GraphQLString,
      },
    }),
  }),
});

const server = new ApolloServer({
  schema,
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
