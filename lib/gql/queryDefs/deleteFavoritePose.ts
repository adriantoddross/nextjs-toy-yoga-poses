import { gql } from "@apollo/client";

const DELETE_FAVORITE_POSE = gql`
  mutation deleteFavoritePose($user_id: String, $pose_id: bigint) {
    delete_user_pose(
      where: { pose_id: { _eq: $pose_id }, user_id: { _eq: $user_id } }
    ) {
      returning {
        pose_id
        user_id
      }
    }
  }
`;

export default DELETE_FAVORITE_POSE;
