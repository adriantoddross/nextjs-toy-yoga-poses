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
    const filters = [...checked];

    if (exercise.isChecked && !filters.includes(exercise.title)) {
      filters.push(exercise.title);
      setChecked(filters);
    }
    // else {
    //   console.log("removing filter!");
    //   const selectedFilters = filters.filter(
    //     (exercise) => exercise.title !== exercise.title
    //   );
    //   console.log(selectedFilters);
    // }
    // handleExerciseSelected(filters);
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
