import { gql } from "@apollo/client";

const GET_POSES = gql`
  query GET_POSES($exerciseIds: [bigint!]) {
    poses(where: { exercise: { _in: $exerciseIds } }) {
      id
      title
      subtitle
      image_url
    }
  }
`;

export default GET_POSES;
