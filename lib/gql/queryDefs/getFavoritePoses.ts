import { gql } from "@apollo/client";

const GET_FAVORITE_POSES = gql`
  query getFavoritePoses($user_id: String!) {
    user_pose(where: { user_id: { _eq: $user_id } }) {
      id
      pose_id
    }
  }
`;

export default GET_FAVORITE_POSES;
