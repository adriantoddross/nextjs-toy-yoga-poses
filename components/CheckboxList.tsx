import { useState } from "react";
import Checkbox from "./Checkbox";

type Exercise = {
  _typename: string;
  id: number;
  title: string;
};

type Props = {
  exercises: Exercise[];
};

export default function CheckboxList({ exercises }: Props) {
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
        {exercises?.map(({ id, title }: Exercise) => (
          <Checkbox
            key={id}
            title={title}
            onCheckboxSelected={onExerciseSelected}
          />
        ))}
      </div>
    </fieldset>
  );
}
