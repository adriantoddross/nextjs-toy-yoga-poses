import { NavigationProps } from "lib/typeDefs/types";
import NavigationMenu from "./NavigationMenu";

export default function DesktopSidebar({ showFilters }: NavigationProps) {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=white"
            alt="Your Company"
          />
        </div>
        <NavigationMenu showFilters={showFilters} />
      </div>
    </div>
  );
}
