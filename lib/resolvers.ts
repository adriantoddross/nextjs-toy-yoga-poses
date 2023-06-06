import { Resolvers } from "@apollo/client";

const yogaPoseObject = {
  name: "Mountain pose!",
};

const resolvers: Resolvers = {
  Query: {
    getPoses(_parent, _args, _context, _info) {
      return yogaPoseObject;
    },
  },
};

export default resolvers;
