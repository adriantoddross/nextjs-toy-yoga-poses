import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import GET_EXERCISES from "lib/gql/queryDefs/getExercises";
import GET_POSES from "lib/gql/queryDefs/getPoses";
import YogaPoses from "components/YogaPoses";
import Layout from "components/Layout";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showPoses, setShowPoses] = useState(true);
  const [filteredExercises, setFilteredExercises] = useState<number[]>([]);

  const { data: exerciseData } = useQuery(GET_EXERCISES);
  const { data } = useQuery(GET_POSES, {
    variables: { exerciseIds: filteredExercises },
  });

  useEffect(() => {
    if (exerciseData) {
      const ids = exerciseData.exercise.map((exercise) => exercise.id);
      setFilteredExercises(ids);
    }
  }, [exerciseData]);

  return (
    <div>
      <Layout>{data?.poses && <YogaPoses poses={data?.poses} />}</Layout>
    </div>
  );
}
