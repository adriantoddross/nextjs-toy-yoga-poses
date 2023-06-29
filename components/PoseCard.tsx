import { Pose } from "lib/typeDefs/types";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/20/solid";

type Props = {
  pose: Pose;
  isFavorited?: boolean;
};

export default function PoseCard2({ pose, isFavorited }: Props) {
  const { title, subtitle, image_url } = pose;

  const toggleFavorite = () => console.log(`Favoriting ${title} pose`);
  return (
    <div>
      <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <img
          src={image_url}
          alt=""
          className="pointer-events-none object-cover group-hover:opacity-75"
        />
        <button
          type="button"
          className="absolute top-2 left-2 focus:outline-none"
        >
          <span className="sr-only">Favorite</span>
          {isFavorited ? (
            <SolidHeartIcon
              className="h-5 w-5"
              aria-hidden="true"
              onClick={toggleFavorite}
            />
          ) : (
            <HeartIcon
              className="h-5 w-5"
              aria-hidden="true"
              onClick={toggleFavorite}
            />
          )}
        </button>
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
