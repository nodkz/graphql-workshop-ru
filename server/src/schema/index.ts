import { makeExecutableSchema } from 'graphql-tools';
import QueryResolvers from './Query/query.resolver.ts';
import MutationResolvers from './Query/mutation.resolver.ts';
import mutationTypeDefs from './Mutation/mutation';
import queryTypeDefs from './Query/query';

const typeDefs = `
  ${queryTypeDefs}
  ${mutationTypeDefs}
`;

const resolvers = {
  ...QueryResolvers,
  ...MutationResolvers,
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
