import YogaPoses from "components/yogaPoses";
import Link from "next/link";
import Header from "components/header";
import { useState } from "react";
import Sidebar from "components/Sidebar";
import PoseCard from "components/PoseCard";
import { yogaPosesData } from "util/yogaPosesData";

export default function Home({ exercises }) {
  const [showPoses, setShowPoses] = useState(false);
  const [filteredExercises, setFilteredExercises] = useState([]);

  const handleExerciseSelected = (exercise) => {
    const filtered = exercises.select((exercise) => exercise == exercise);
    setFilteredExercises(filtered);
    setShowPoses(true);
  };

  return (
    <div>
      <Sidebar
      // exercises={exercises}
      // onExerciseSelected={handleExerciseSelected}
      />
      <main>
        {showPoses
          ? yogaPosesData.map(({ title }) => <PoseCard title={title} />)
          : "Select an exercise to see your recommended yoga poses"}
      </main>
    </div>
  );
}
