import { IResolvers } from '../__generated__/graphql';

const resolvers: IResolvers = {
  Mutation: {
    time: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return Date.now();
    },
  },
};

export default resolvers;
