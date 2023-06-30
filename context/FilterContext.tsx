import { createContext, useState, useMemo } from "react";

type FilterPosesProps = {
  showPoses: boolean;
  filteredExercises: number[];
  setFilteredExercises: (exercises: number[]) => void;
};

export const FilterPosesContext = createContext<FilterPosesProps>({
  showPoses: true,
  filteredExercises: [],
  setFilteredExercises: () => {},
});

export default function FilterPosesContextWrapper({ children }) {
  const [showPoses, setShowPoses] = useState(true);
  const [filteredExercises, setFilteredExercises] = useState<number[]>([]);

  const contextValue = useMemo(
    () => ({ showPoses, filteredExercises, setFilteredExercises }),
    [filteredExercises]
  );

  return (
    <FilterPosesContext.Provider value={contextValue}>
      {children}
    </FilterPosesContext.Provider>
  );
}
