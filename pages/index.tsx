import { useState } from "react";
import Sidebar from "components/Sidebar";
import PoseCard from "components/PoseCard";
import { useQuery } from "@apollo/client";
import GET_POSES from "lib/gql/queryDefs/getPoses";
import { Pose } from "lib/typeDefs/types";

export default function Home({ exercises }) {
  // Add exercise field to poses table
  // Check if exercise id matches a pose's exercise id

  const [showPoses, setShowPoses] = useState(true);
  const [filteredExercises, setFilteredExercises] = useState([]);

  const handleExerciseSelected = (exercise) => {
    const filtered = exercises.select((exercise) => exercise == exercise);
    setFilteredExercises(filtered);
    setShowPoses(true);
  };

  const { data } = useQuery(GET_POSES);

  return (
    <div>
      <Sidebar
      // exercises={exercises}
      // onExerciseSelected={handleExerciseSelected}
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
