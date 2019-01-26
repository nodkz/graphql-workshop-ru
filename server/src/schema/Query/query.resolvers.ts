import { IResolvers } from '../__generated__/graphql';

const resolvers: IResolvers = {
  Query: {
    hi: (source, args, context, info) => {
      return `Hello, ${args.name} from ${context.ip}!!!`;
    },
    time: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return Date.now();
    },
  },
};

export default resolvers;
