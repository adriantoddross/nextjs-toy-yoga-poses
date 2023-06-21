import { gql } from "@apollo/client";

const GET_POSES = gql`
  query GET_POSES {
    poses {
      id
      title
      subtitle
      image_url
    }
  }
`;

export default GET_POSES;
