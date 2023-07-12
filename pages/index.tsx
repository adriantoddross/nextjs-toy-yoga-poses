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

  // Can we turn these queries into one big query for the homepage?

  const { data: exerciseData, loading: exercisesLoading } =
    useQuery(GET_EXERCISES);

  const { data, loading: posesLoading } = useQuery(GET_POSES, {
    variables: { exerciseIds: filteredExercises },
  });

  const { data: favoritePoses, loading: favoritePosesLoading } = useQuery(
    GET_FAVORITE_POSES,
    {
      variables: { user_id: user?.sub },
      skip: !user,
    }
  );

  const favoritedPoses =
    favoritePoses?.user_pose.map((favorite) => favorite.pose_id) ?? [];

  useEffect(() => {
    if (exerciseData) {
      const ids = exerciseData.exercise.map((exercise) => exercise.id);
      setFilteredExercises(ids);
    }
  }, [exerciseData]);

  if (exercisesLoading || favoritePosesLoading || posesLoading) {
    return (
      <Layout>
        {/* Find spinner UI/SVG*/}
        <p className="animate-spin bg-black text-white h-15 w-15">Loading...</p>
      </Layout>
    );
  }

  return (
    <div>
      <Layout>
        <div className="px-4 sm:px-6 lg:px-8">
          <section>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Yoga Poses
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Use the filters on the sidebar to find yoga poses that will
              improve your workouts!
            </p>
          </section>
        </div>
        <YogaPoses poses={data?.poses} favorites={favoritedPoses} />
      </Layout>
    </div>
  );
}
