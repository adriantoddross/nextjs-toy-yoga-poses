import { Pose } from "lib/typeDefs/types";
import PoseCard from "./PoseCard";

type Props = {
  description?: string;
  favorites?: number[];
  poses: Pose[];
  title?: string;
};

export default function YogaPoses({
  poses = [],
  favorites = [],
  title,
  description,
}: Props) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 mt-6"
      >
        {poses.map((pose: Pose) => (
          <li key={pose.title} className="relative">
            <PoseCard
              key={pose.id}
              pose={pose}
              isFavorited={favorites?.includes(pose.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
