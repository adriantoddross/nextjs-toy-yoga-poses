import { useState, useEffect, useContext } from "react";
import { useQuery } from "@apollo/client";
import GET_EXERCISES from "lib/gql/queryDefs/getExercises";
import GET_POSES from "lib/gql/queryDefs/getPoses";
import YogaPoses from "components/YogaPoses";
import Layout from "components/Layout";
import { FilterPosesContext } from "context/FilterContext";
import { useUser } from "@auth0/nextjs-auth0/client";
import GET_FAVORITE_POSES from "lib/gql/queryDefs/getFavoritePoses";

export default function Home() {
  const { user, error, isLoading } = useUser();

  const { showPoses, setFilteredExercises, filteredExercises } =
    useContext(FilterPosesContext);

  const { data: exerciseData } = useQuery(GET_EXERCISES);
  const { data } = useQuery(GET_POSES, {
    variables: { exerciseIds: filteredExercises },
  });

  const { data: favoritePoses } = useQuery(GET_FAVORITE_POSES, {
    variables: { user_id: user?.sub },
    skip: !user,
  });

  const favoritedPoses =
    favoritePoses?.user_pose.map((favorite) => favorite.pose_id) ?? [];

  useEffect(() => {
    if (exerciseData) {
      const ids = exerciseData.exercise.map((exercise) => exercise.id);
      setFilteredExercises(ids);
    }
  }, [exerciseData]);

  return (
    <div>
      <Layout>
        {data?.poses && (
          <YogaPoses poses={data?.poses} favorites={favoritedPoses} />
        )}
      </Layout>
    </div>
  );
}
