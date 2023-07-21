import { useMutation } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import ADD_FAVORITE_POSE from "lib/gql/queryDefs/addFavoritePose";
import DELETE_FAVORITE_POSE from "lib/gql/queryDefs/deleteFavoritePose";
import { Pose } from "lib/typeDefs/types";
import { useRouter } from "next/router";
import FavoritePoseButton from "./FavoriteButton";
import LogInButton from "./LogInButton";

type Props = {
  pose: Pose;
  isFavorited?: boolean;
};

export default function PoseCard({ pose, isFavorited }: Props) {
  const { user, error: UserError, isLoading: UserLoading } = useUser();
  const router = useRouter();

  const { pathname } = router;
  const { id, title, subtitle, image_url } = pose;

  const [
    addFavoritePose,
    {
      data: addFavoritePoseData,
      loading: addFavoritePoseLoading,
      error: addFavoritePoseError,
    },
  ] = useMutation(ADD_FAVORITE_POSE);

  const [
    removeFavoritePose,
    {
      data: removeFavoritePoseData,
      loading: removeFavoritePoseLoading,
      error: removeFavoritePoseError,
    },
  ] = useMutation(DELETE_FAVORITE_POSE);

  const handleAddFavoritePose = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (user) {
      addFavoritePose({
        variables: { pose_id: id, user_id: user?.sub },
        refetchQueries: ["getFavoritePoses"],
      });
    } else {
      throw new Error("Log in to favorite a pose");
    }
  };

  const handleRemoveFavoritePose = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (user) {
      removeFavoritePose({
        variables: { user_id: user.sub, pose_id: id },
        refetchQueries: ["getFavoritePoses"],
      });
    } else {
      throw new Error("Log in to remove a favorited pose");
    }
  };

  return (
    <div>
      <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        {image_url ? (
          <img
            src={image_url}
            alt=""
            className="pointer-events-none object-cover group-hover:opacity-75"
          />
        ) : (
          <div className="w-full h-[128px] md:h-[150px] pointer-events-none object-cover group-hover:opacity-75"></div>
        )}

        {user ? (
          <FavoritePoseButton
            handleAddFavorite={handleAddFavoritePose}
            handleRemoveFavorite={handleRemoveFavoritePose}
            isFavorited={isFavorited}
            isAddingFavoriteDisabled={addFavoritePoseLoading}
            isRemovingFavoriteDisabled={removeFavoritePoseLoading}
          />
        ) : (
          <LogInButton />
        )}
      </div>
      <div className="mt-6">
        <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
          {title}
        </p>
      </div>
      <p className="pointer-events-none block text-sm font-medium text-gray-500">
        {subtitle}
      </p>
    </div>
  );
}
