import { useQuery } from "@apollo/client";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

import Layout from "components/Layout";
import LoadingSpinner from "components/LoadingSpinner";
import YogaPoses from "components/YogaPoses";
import GET_FAVORITE_POSES from "lib/gql/queryDefs/getFavoritePoses";
import GET_POSES_BY_ID from "lib/gql/queryDefs/getPosesById";

export default withPageAuthRequired(function Profile() {
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
      <Layout showFilters={false}>
        <div className="px-4 sm:px-6 lg:px-8">
          <LoadingSpinner />
        </div>
      </Layout>
    );

  if (UserError || favoritePosesError || posesError)
    return (
      <Layout showFilters={false}>
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

  const FavoritePoses = () =>
    favoritePoses?.user_pose.length ? (
      <YogaPoses
        title="Your Favorite Poses"
        description="Check out all of the poses you've favorited!"
        poses={poses?.poses ?? []}
        favorites={favoritePoses?.user_pose.map((favorite) => favorite.pose_id)}
      />
    ) : (
      <>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Your Favorite Poses
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Your favorited poses will appear here. Return to the{" "}
          <Link href="/">
            <span className="font-semibold underline">homepage</span>
          </Link>{" "}
          to view all poses.
        </p>
      </>
    );

  return (
    <Layout showFilters={false}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div>
          {user ? (
            <FavoritePoses />
          ) : (
            <div>
              <p>Please login to view this page.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
});
