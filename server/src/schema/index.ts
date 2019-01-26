import { join } from 'path';
import { makeExecutableSchema } from 'graphql-tools';
import { typeDefs } from './__generated__/graphql';
import { mergeResolvers, fileLoader } from 'merge-graphql-schemas';

const resolvers = mergeResolvers(fileLoader(join(__dirname, './**/*.resolvers.*')));

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
