import { Pose } from "lib/typeDefs/types";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/20/solid";
import { useMutation } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import ADD_FAVORITE_POSE from "lib/gql/queryDefs/addFavoritePose";
import DELETE_FAVORITE_POSE from "lib/gql/queryDefs/deleteFavoritePose";

type Props = {
  pose: Pose;
  isFavorited?: boolean;
};

export default function PoseCard({ pose, isFavorited }: Props) {
  const { id, title, subtitle, image_url } = pose;
  const { user, error: UserError, isLoading: UserLoading } = useUser();

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
      console.log("Favoriting pose: ", {
        variables: { pose_id: id, user_id: user?.email },
      });
      // addFavoritePose({
      //   variables: { pose_id: id, user_id: user?.email },
      // });
    } else {
      throw new Error("Log in to favorite a pose");
    }
  };

  const handleRemoveFavoritePose = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (user) {
      console.log("Removing favorite pose: ", {
        variables: { pose_id: id, user_id: user?.email },
      });
      // removeFavoritePose({
      //   variables: { user_pose_id: id },
      // });
    } else {
      throw new Error("Log in to remove a favorited pose");
    }
  };

  return (
    <div>
      <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <img
          src={image_url}
          alt=""
          className="pointer-events-none object-cover group-hover:opacity-75"
        />
        {user ? (
          <FavoritePoseButton
            handleAddFavorite={handleAddFavoritePose}
            handleRemoveFavorite={handleRemoveFavoritePose}
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

const FavoritePoseButton = ({
  handleAddFavorite,
  handleRemoveFavorite,
  isFavorited,
}: {
  handleAddFavorite: (e) => void;
  handleRemoveFavorite: (e) => void;
  isFavorited?: boolean;
}) => {
  return isFavorited ? (
    <RemoveFavoriteButton handleOnClick={handleRemoveFavorite} />
  ) : (
    <AddFavoriteButton handleOnClick={handleAddFavorite} />
  );
};

const AddFavoriteButton = ({ handleOnClick }) => {
  return (
    <button
      type="button"
      className="absolute top-2 left-2 focus:outline-none"
      onClick={handleOnClick}
    >
      <span className="sr-only">Favorite this pose</span>
      <HeartIcon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
};

const RemoveFavoriteButton = ({ handleOnClick }) => {
  return (
    <button
      type="button"
      className="absolute top-2 left-2 focus:outline-none"
      onClick={handleOnClick}
    >
      <span className="sr-only">Remove favorite pose</span>
      <SolidHeartIcon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
};

const LogInButton = () => {
  return (
    <a
      href="/api/auth/login"
      className="absolute top-2 left-2 focus:outline-none"
    >
      <span className="sr-only">Log in to favorite a pose</span>
      <HeartIcon className="h-5 w-5" aria-hidden="true" />
    </a>
  );
};
