import { ApolloServer } from 'apollo-server';
import schema from './schema';
import { prepareContext } from './schema/context';

const whitelist = ['http://localhost:3000', 'http://localhost:4000'];
const server = new ApolloServer({
  schema,
  playground: true,
  context: prepareContext,
  cors: {
    credentials: true,
    allowedHeaders: ['Content-Type', 'Cookie'],
    origin: (origin: string, callback: any) => {
      console.log(origin);
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(null);
      }
    },
  },
});

server.listen(
  {
    port: 4000,
    endpoint: '/graphql',
    playground: '/playground',
  },
  () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
