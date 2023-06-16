import { useState } from "react";
import Checkbox from "./Checkbox";

export default function CheckboxList({ exercises }) {
  const [checked, setChecked] = useState([]);

  const onExerciseSelected = (exercise) => {
    console.log(`${exercise} checkbox clicked`);
  };

  return (
    <fieldset>
      <div>
        <legend>By exercise:</legend>
        <button type="button">Reset</button>
      </div>

      <div>
        {exercises?.map((title) => (
          <Checkbox
            key={title}
            title={title}
            onCheckboxSelected={onExerciseSelected}
          />
        ))}
      </div>
    </fieldset>
  );
}
