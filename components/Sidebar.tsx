import Link from "next/link";
import Header from "./header";
import CheckboxList from "./CheckboxList";

export default function Sidebar() {
  // { exercises, onExerciseSelected }
  // onExerciseSelected helper function to filter & display YogaPosesCards

  const exercisesData = ["climbing", "running", "swimming"];
  return (
    <div>
      <Header />
      <CheckboxList exercises={exercisesData} />
    </div>
  );
}
