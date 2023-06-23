import Checkbox from "./Checkbox";
import { Exercise } from "lib/typeDefs/types";

type Props = {
  exercises: Exercise[];
  handleExerciseSelected: (exercise: Exercise["id"], checked: boolean) => void;
  filteredExercises: number[];
};

export default function CheckboxList({
  exercises,
  handleExerciseSelected,
  filteredExercises,
}: Props) {
  const onExerciseSelected = ({ id, checked }) => {
    handleExerciseSelected(id, checked);
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
            id={id}
            onCheckboxSelected={onExerciseSelected}
            checked={filteredExercises.includes(id)}
          />
        ))}
      </div>
    </fieldset>
  );
}
