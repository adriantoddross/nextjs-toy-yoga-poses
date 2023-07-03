import { gql } from "@apollo/client";

const ADD_FAVORITE_POSE = gql`
  mutation addFavoritePose($pose_id: bigint!, $user_id: String!) {
    insert_user_pose_one(object: { pose_id: $pose_id, user_id: $user_id }) {
      id
      pose_id
      user_id
    }
  }
`;

export default ADD_FAVORITE_POSE;
