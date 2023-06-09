import { useQuery } from "@apollo/client";
import { FilterPosesContext } from "context/FilterContext";
import GET_EXERCISES from "lib/gql/queryDefs/getExercises";
import { NavigationProps } from "lib/typeDefs/types";
import { useContext } from "react";
import classNames from "util/classnames";
import navigation from "util/navigationLinks";
import CheckboxList from "./CheckboxList";
import LoadingSpinner from "./LoadingSpinner";

export default function NavigationMenu({
  showFilters = true,
}: NavigationProps) {
  const { filteredExercises, setFilteredExercises } =
    useContext(FilterPosesContext);

  const handleFilterOptions = (id: number, checked: boolean) => {
    let updatedFilteredExercises = [...filteredExercises];

    if (checked) {
      updatedFilteredExercises.push(id);
    } else {
      updatedFilteredExercises = filteredExercises.filter(
        (exercise) => exercise !== id
      );
    }
    setFilteredExercises(updatedFilteredExercises);
  };

  const { data: allExercises, loading: exercisesLoading } = useQuery(
    GET_EXERCISES,
    {
      skip: !showFilters,
    }
  );

  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-indigo-700 text-white"
                      : "text-indigo-200 hover:text-white hover:bg-indigo-700",
                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? "text-white"
                        : "text-indigo-200 group-hover:text-white",
                      "h-6 w-6 shrink-0"
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </li>
        {showFilters &&
          (exercisesLoading ? (
            <div className="mt-4">
              <LoadingSpinner color="text-white" />
            </div>
          ) : (
            <li>
              <div className="text-sm font-bold leading-6 text-indigo-200">
                Filters
              </div>
              <fieldset>
                <legend className="text-xs font-semibold leading-6 text-indigo-200">
                  By exercise
                </legend>
                <div className="mt-4 text-sm font-normal leading-6 text-indigo-200">
                  <button
                    type="button"
                    onClick={() => {
                      setFilteredExercises(
                        allExercises.exercise.map((exercise) => exercise.id)
                      );
                    }}
                  >
                    Reset filters{" "}
                    <span className="sr-only">(see all poses)</span>
                  </button>
                </div>

                <CheckboxList
                  exercises={allExercises?.exercise}
                  handleExerciseSelected={handleFilterOptions}
                  filteredExercises={filteredExercises}
                />
              </fieldset>
            </li>
          ))}
      </ul>
    </nav>
  );
}
