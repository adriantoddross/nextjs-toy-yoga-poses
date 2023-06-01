const typeDefs = /* GraphQL */ `
  type Pose {
    name: String!
    # {
    #   alt: "Woman demonstrating downward dog pose",
    #   description: "This is the Downward Dog pose! Check it out!",
    #   src: "/pose-downwardDog.webp",
    #   title: "Downward Dog",
    # },
  }

  type Query {
    getPoses: String
  }
`;

export default typeDefs;
