import { join } from 'path';
import { makeExecutableSchema } from 'graphql-tools';
import mutationTypeDefs from './Mutation/mutation';
import queryTypeDefs from './Query/query';
import { mergeResolvers, fileLoader } from 'merge-graphql-schemas';

const resolvers = mergeResolvers(fileLoader(join(__dirname, './**/*.resolvers.*')));

const typeDefs = `
  ${queryTypeDefs}
  ${mutationTypeDefs}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
