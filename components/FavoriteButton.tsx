import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/20/solid";

export default function FavoritePoseButton({
  handleAddFavorite,
  handleRemoveFavorite,
  isFavorited,
  isAddingFavoriteDisabled,
  isRemovingFavoriteDisabled,
}: {
  handleAddFavorite: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleRemoveFavorite: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  isFavorited?: boolean;
  isAddingFavoriteDisabled: boolean;
  isRemovingFavoriteDisabled: boolean;
}) {
  return isFavorited ? (
    <RemoveFavoriteButton handleOnClick={handleRemoveFavorite} />
  ) : (
    <AddFavoriteButton
      handleOnClick={handleAddFavorite}
      isAddingFavoriteDisabled={isAddingFavoriteDisabled}
      isRemovingFavoriteDisabled={isRemovingFavoriteDisabled}
    />
  );
}

const AddFavoriteButton = ({
  handleOnClick,
  isAddingFavoriteDisabled,
  isRemovingFavoriteDisabled,
}: {
  handleOnClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isAddingFavoriteDisabled: boolean;
  isRemovingFavoriteDisabled: boolean;
}) => {
  return (
    <button
      type="button"
      className="absolute top-2 left-2 focus:outline-none"
      onClick={handleOnClick}
      disabled={isAddingFavoriteDisabled}
    >
      <span className="sr-only">Favorite this pose</span>
      <HeartIcon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
};

const RemoveFavoriteButton = ({
  handleOnClick,
  isRemovingFavoriteDisabled,
}: {
  handleOnClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isRemovingFavoriteDisabled?: boolean;
}) => {
  return (
    <button
      type="button"
      className="absolute top-2 left-2 focus:outline-none"
      onClick={handleOnClick}
      disabled={isRemovingFavoriteDisabled}
    >
      <span className="sr-only">Remove favorite pose</span>
      <SolidHeartIcon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
};
