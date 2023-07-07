import { Pose } from "lib/typeDefs/types";
import PoseCard from "./PoseCard";

type Props = {
  poses: Pose[];
  favorites: number[];
};

export default function YogaPoses({ poses, favorites }: Props) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <section>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Yoga Poses
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Use the filters on the sidebar to find yoga poses that will improve
          your workouts!
        </p>
      </section>
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
