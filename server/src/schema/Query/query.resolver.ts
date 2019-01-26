const resolvers = {
  Query: {
    hello: (source: {}, args: any, contect: {}, info: {}) => `Hello, ${args.name}!!!`,
  },
};

export default resolvers;
