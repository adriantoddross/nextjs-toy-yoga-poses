import { useUser } from "@auth0/nextjs-auth0/client";
import { useQuery } from "@apollo/client";

import Layout from "components/Layout";
import GET_FAVORITE_POSES from "lib/gql/queryDefs/getFavoritePoses";
import GET_POSES_BY_ID from "lib/gql/queryDefs/getPosesById";
import YogaPoses from "components/YogaPoses";

export default function Example() {
  const { user, error: UserError, isLoading: UserLoading } = useUser();

  const {
    data: favoritePoses,
    loading: favoritePosesLoading,
    error: favoritePosesError,
  } = useQuery(GET_FAVORITE_POSES, {
    variables: { user_id: user?.sub },
    skip: !user,
  });

  const {
    data: poses,
    loading: posesLoading,
    error: posesError,
  } = useQuery(GET_POSES_BY_ID, {
    variables: {
      poses: favoritePoses?.user_pose?.map((favorite) => favorite.pose_id),
    },
    skip: !favoritePoses,
  });

  if (UserLoading || favoritePosesLoading || posesLoading)
    return (
      <Layout>
        <p className="mt-6 text-lg leading-8 text-gray-600">Loading...</p>
      </Layout>
    );

  if (UserError || favoritePosesError || posesError)
    return (
      <Layout>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Sorry, there's been an error!
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {UserError.message ||
            favoritePosesError.message ||
            posesError.message}
        </p>
      </Layout>
    );

  return (
    <Layout showFilters={false}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div>
          {user ? (
            <YogaPoses
              title="Your Favorite Poses"
              description="Check out all of the poses you've favorited!"
              poses={poses?.poses ?? []}
              favorites={favoritePoses?.user_pose.map(
                (favorite) => favorite.pose_id
              )}
            />
          ) : (
            <div>
              <p>Please login to view this page.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
