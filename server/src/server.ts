import { ApolloServer } from 'apollo-server';
import schema from './schema';
import { prepareContext } from './schema/context';

const server = new ApolloServer({
  schema,
  playground: true,
  context: prepareContext,
});

server.listen(
  {
    port: 4000,
    endpoint: '/graphql',
    playground: '/playground',
  },
  () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
