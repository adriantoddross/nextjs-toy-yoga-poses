const typeDefs = /* GraphQL */ `
  type Pose {
    name: String!
  }

  type Query {
    getPoses: Pose!
  }
`;

export default typeDefs;
