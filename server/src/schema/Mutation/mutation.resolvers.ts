const resolvers = {
  Mutation: {
    time: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return Date.now();
    },
  },
};

export default resolvers;
