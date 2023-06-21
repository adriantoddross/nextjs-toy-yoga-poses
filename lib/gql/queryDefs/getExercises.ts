import { gql } from "@apollo/client";

const GET_EXERCISES = gql`
  query Get_Exercises {
    exercise {
      id
      title
    }
  }
`;

export default GET_EXERCISES;
