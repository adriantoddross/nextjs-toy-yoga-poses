import Link from "next/link";
import Header from "./header";

export default function Sidebar() {
  // { exercises, onExerciseSelected }
  // onExerciseSelected helper function to filter & display YogaPosesCards
  return (
    <div>
      <Header />

      <fieldset>
        <div>
          <legend>By exercise:</legend>
          <button type="button">Reset</button>
        </div>

        <div>
          <input type="checkbox" id="scales" name="scales" checked />
          <label htmlFor="scales">Scales</label>
        </div>
      </fieldset>
    </div>
  );
}
