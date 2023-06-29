import { useQuery } from "@apollo/client";
import CheckboxList from "./CheckboxList";
import GET_EXERCISES from "lib/gql/queryDefs/getExercises";
import classNames from "util/classnames";
import navigation from "util/navigationLinks";
import { NavigationProps } from "lib/typeDefs/types";

export default function MobileSidebar({
  handleFiltersSelected,
  filteredExercises,
}: NavigationProps) {
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

  const { data: allExercises } = useQuery(GET_EXERCISES);

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
      <div className="flex h-16 shrink-0 items-center">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=white"
          alt="Your Company"
        />
      </div>
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
          {filteredExercises && (
            <li>
              <div className="text-sm font-bold leading-6 text-indigo-200">
                Filters
              </div>
              <fieldset>
                <legend className="text-xs font-semibold leading-6 text-indigo-200">
                  By exercise
                </legend>
                <div>{/* <button type="button">Reset</button> */}</div>
                <CheckboxList
                  exercises={allExercises?.exercise}
                  handleExerciseSelected={handleFilterOptions}
                  filteredExercises={filteredExercises}
                />
              </fieldset>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
