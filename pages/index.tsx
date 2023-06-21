import YogaPoses from "components/yogaPoses";
import Link from "next/link";
import Header from "components/header";
import { useState } from "react";
import Sidebar from "components/Sidebar";
import PoseCard from "components/PoseCard";
import { yogaPosesData } from "util/yogaPosesData";
import { useQuery, gql } from "@apollo/client";

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

  const GET_POSES = gql`
    query GET_POSES {
      poses {
        id
        title
        subtitle
        image_url
      }
    }
  `;

  const { data } = useQuery(GET_POSES);

  return (
    <div>
      <Sidebar
      // exercises={exercises}
      // onExerciseSelected={handleExerciseSelected}
      />
      <main>
        {showPoses
          ? data?.poses.map((pose) => <PoseCard pose={pose} />)
          : "Select an exercise to see your recommended yoga poses"}
      </main>
    </div>
  );
}
