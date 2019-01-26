import { makeExecutableSchema } from 'graphql-tools';
import MutationResolvers from './Mutation/mutation.resolver';
import mutationTypeDefs from './Mutation/mutation';
import QueryResolvers from './Query/query.resolver';
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
