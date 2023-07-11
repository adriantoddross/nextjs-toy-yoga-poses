import { gql } from "@apollo/client";

const GET_POSES_BY_ID = gql`
  query getPosesById($poses: [bigint!] = "") {
    poses(where: { id: { _in: $poses } }) {
      id
      image_url
      subtitle
      title
    }
  }
`;

export default GET_POSES_BY_ID;
