import { Fragment, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Dialog, Transition } from "@headlessui/react";
import GET_EXERCISES from "lib/gql/queryDefs/getExercises";
import GET_POSES from "lib/gql/queryDefs/getPoses";
import { Pose } from "lib/typeDefs/types";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import DesktopSidebar from "components/DesktopSidebar";
import MobileSidebar from "components/MobileSidebar";
import ProfileHeader from "components/ProfileHeader";
import PoseCard from "components/PoseCard";

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showPoses, setShowPoses] = useState(true);
  const [filteredExercises, setFilteredExercises] = useState<number[]>([]);

  const { data: exerciseData } = useQuery(GET_EXERCISES);
  const { data } = useQuery(GET_POSES, {
    variables: { exerciseIds: filteredExercises },
  });

  useEffect(() => {
    if (exerciseData) {
      const ids = exerciseData.exercise.map((exercise) => exercise.id);
      setFilteredExercises(ids);
    }
  }, [exerciseData]);

  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <MobileSidebar
                  filteredExercises={filteredExercises}
                  handleFiltersSelected={(filters) =>
                    setFilteredExercises(filters)
                  }
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <DesktopSidebar
        filteredExercises={filteredExercises}
        handleFiltersSelected={(filters) => setFilteredExercises(filters)}
      />

      <div className="lg:pl-72">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Separator for mobile dropdown */}
          <div
            className="h-6 w-px bg-gray-900/10 lg:hidden"
            aria-hidden="true"
          />

          <div className="flex flex-1 justify-end gap-x-4 self-stretch lg:gap-x-6">
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <ProfileHeader />
            </div>
          </div>
        </div>

        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <section>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Yoga Poses
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Use the filters on the sidebar to find yoga poses that will
                improve your workouts!
              </p>
            </section>
            <ul
              role="list"
              className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 mt-6"
            >
              {showPoses
                ? data?.poses.map((pose: Pose) => (
                    <li key={pose.title} className="relative">
                      <PoseCard key={pose.id} pose={pose} />
                    </li>
                  ))
                : "Select an exercise to see your recommended yoga poses"}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
