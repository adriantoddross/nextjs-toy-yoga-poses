import YogaPoses from "components/yogaPoses";
import Link from "next/link";
import Header from "components/header";
import { useState } from "react";
import Sidebar from "components/Sidebar";

export default function Home({ exercises }) {
  const [showPoses, setShowPoses] = useState(false); // useState
  const [filteredExercises, setFilteredExercises] = useState([]);
  // all exercises already coming in the props
  const handleExerciseSelected = (exercise) => {
    const filtered = exercises.select((exercise) => exercise == exercise);
    setFilteredExercises(filtered);
    setShowPoses(true);
  };
  // also sets showPoses to true

  return (
    <div>
      <Sidebar
      // exercises={exercises}
      // onExerciseSelected={handleExerciseSelected}
      />
      <main>
        Yoga cards
        {/* {showPoses ? (
        <YogaPosesCards exercises={filteredExercises} />
      ) : (
        <div>Select an exercise to get started!</div>
      )} */}
      </main>
    </div>
  );
}

// export const getServerSideProps = async () => {
//   // graphql api call
//   //  const exercises =  api call results
//   return { exercises };
// };
