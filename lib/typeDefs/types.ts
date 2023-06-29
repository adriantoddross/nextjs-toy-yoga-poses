type Pose = {
  id: number;
  title: string;
  subtitle: string;
  image_url: string;
};

type Exercise = {
  _typename: string;
  id: number;
  title: string;
  isChecked?: boolean;
};

type NavigationProps = {
  handleFiltersSelected?: (id: number[]) => void;
  filteredExercises?: number[];
};

export type { Pose, Exercise, NavigationProps };
