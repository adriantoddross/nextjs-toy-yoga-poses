import Header from "./header";
import CheckboxList from "./CheckboxList";
import { useQuery } from "@apollo/client";
import GET_EXERCISES from "lib/gql/queryDefs/getExercises";

export default function Sidebar() {
  // { exercises, onExerciseSelected }
  // onExerciseSelected helper function to filter & display YogaPosesCards

  const { data } = useQuery(GET_EXERCISES);

  return (
    <div>
      <Header />
      <CheckboxList exercises={data?.exercise} />
    </div>
  );
}
