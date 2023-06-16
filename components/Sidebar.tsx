import Link from "next/link";
import Header from "./header";

export default function Sidebar() {
  // { exercises, onExerciseSelected }
  // onExerciseSelected helper function to filter & display YogaPosesCards
  return (
    <div>
      <Header />

      <div>
        <p>Filters</p>
        <button>Reset</button>
      </div>
      <div>
        <div>By exercise:</div>
        <input type="checkbox" name="" id="" />
      </div>
    </div>
  );
}
