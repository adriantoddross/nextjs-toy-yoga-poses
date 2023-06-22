import { useState } from "react";
import Checkbox from "./Checkbox";

type Exercise = {
  _typename: string;
  id: number;
  title: string;
  isChecked?: boolean;
};

type Props = {
  exercises: Exercise[];
  handleExerciseSelected: (exercise) => any;
};

export default function CheckboxList({
  exercises,
  handleExerciseSelected,
}: Props) {
  const [checked, setChecked] = useState([]);

  const onExerciseSelected = (exercise: Exercise) => {
    const filters = [...checked]; // rename this for clarity

    if (exercise.isChecked && !filters.includes(exercise.title)) {
      filters.push(exercise.title);
      setChecked(filters);
      // handleExerciseSelected(filters);
      // pass filters up to Sidebar
    }

    if (!exercise.isChecked) {
      setChecked(filters.filter((title) => title !== exercise.title));
      // handleExerciseSelected(filters);
      // pass filters up to Sidebar
    }
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
