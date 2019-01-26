const resolvers = {
  Query: {
    hello: (source: {}, args: any, contect: {}, info: {}) => `Hello, ${args.name}!!!`,
    time: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return Date.now();
    },
  },
};

export default resolvers;
