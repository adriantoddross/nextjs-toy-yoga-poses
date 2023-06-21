import Link from "next/link";
import Header from "./header";
import CheckboxList from "./CheckboxList";
import { useQuery, gql } from "@apollo/client";

export default function Sidebar() {
  // { exercises, onExerciseSelected }
  // onExerciseSelected helper function to filter & display YogaPosesCards

  const exercisesData = ["climbing", "running", "swimming"];

  const GET_EXERCISES = gql`
    query Get_Exercises {
      exercise {
        id
        title
      }
    }
  `;

  const { data } = useQuery(GET_EXERCISES);

  return (
    <div>
      <Header />
      <CheckboxList exercises={data?.exercise} />
    </div>
  );
}
