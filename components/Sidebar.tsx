import Header from "./header";
import CheckboxList from "./CheckboxList";
import { useQuery } from "@apollo/client";
import GET_EXERCISES from "lib/gql/queryDefs/getExercises";

type Props = {
  handleFiltersSelected: (id: number[]) => void;
  filteredExercises: number[];
};

export default function Sidebar({
  handleFiltersSelected,
  filteredExercises,
}: Props) {
  const handleFilterOptions = (id: number, checked: boolean) => {
    let updatedFilteredExercises = [...filteredExercises];

    if (checked) {
      updatedFilteredExercises.push(id);
    } else {
      updatedFilteredExercises = filteredExercises.filter(
        (exercise) => exercise !== id
      );
    }
    handleFiltersSelected(updatedFilteredExercises);
  };

  const { data } = useQuery(GET_EXERCISES);

  return (
    <div>
      <Header />
      <CheckboxList
        exercises={data?.exercise}
        handleExerciseSelected={handleFilterOptions}
        filteredExercises={filteredExercises}
      />
    </div>
  );
}
