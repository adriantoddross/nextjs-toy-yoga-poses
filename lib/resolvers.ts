import { Resolvers } from "@apollo/client";
// import yogaPosesObject

const resolvers: Resolvers = {
  Query: {
    getPoses() {
      return "Hello!";
      // Return yogaPosesObject
      // Update readme since this is different from current description
    },
  },
};

export default resolvers;
