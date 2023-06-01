import { Resolvers } from "@apollo/client";

const yogaPoseObject = {
  name: "Mountain pose!",
};

const resolvers: Resolvers = {
  Query: {
    getPoses() {
      return "Hello!";
    },
  },
};

export default resolvers;
