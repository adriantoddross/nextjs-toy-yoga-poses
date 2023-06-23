import { useState, useEffect } from "react";
import Sidebar from "components/Sidebar";
import PoseCard from "components/PoseCard";
import { useQuery } from "@apollo/client";
import GET_POSES from "lib/gql/queryDefs/getPoses";
import { Pose, Exercise } from "lib/typeDefs/types";
import GET_EXERCISES from "lib/gql/queryDefs/getExercises";

export default function Home() {
  const [showPoses, setShowPoses] = useState(true);
  const [filteredExercises, setFilteredExercises] = useState<number[]>([]);
  const { data: exerciseData } = useQuery(GET_EXERCISES);

  useEffect(() => {
    if (exerciseData) {
      const ids = exerciseData.exercise.map((exercise) => exercise.id);
      setFilteredExercises(ids);
    }
  }, [exerciseData]);

  const { data } = useQuery(GET_POSES, {
    variables: { exerciseIds: filteredExercises },
  });

  return (
    <div>
      <Sidebar
        filteredExercises={filteredExercises}
        handleFiltersSelected={(filters) => setFilteredExercises(filters)}
      />
      <main>
        {showPoses
          ? data?.poses.map((pose: Pose) => (
              <PoseCard key={pose.id} pose={pose} />
            ))
          : "Select an exercise to see your recommended yoga poses"}
      </main>
    </div>
  );
}
