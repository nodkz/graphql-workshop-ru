import { IResolvers } from '../__generated__/graphql';

const resolvers: IResolvers = {
  Query: {
    hi: (source, args, contect, info) => {
      return `Hello, ${args.name}!!!`;
    },
    time: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return Date.now();
    },
  },
};

export default resolvers;
