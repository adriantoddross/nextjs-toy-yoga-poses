import { gql } from "@apollo/client";

const DELETE_FAVORITE_POSE = gql`
  mutation deleteFavoritePose($user_pose_id: bigint) {
    delete_user_pose(where: { id: { _eq: $user_pose_id } }) {
      returning {
        pose_id
        user_id
      }
    }
  }
`;

export default DELETE_FAVORITE_POSE;
