import { useState, ReactNode } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import DesktopSidebar from "components/DesktopSidebar";
import MobileSidebar from "components/MobileSidebar";
import ProfileHeader from "components/ProfileHeader";

export default function Layout({
  children,
  showFilters,
}: {
  children: ReactNode;
  showFilters?: boolean;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <MobileSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={() => setSidebarOpen(false)}
        showFilters={showFilters}
      />

      <DesktopSidebar showFilters={showFilters} />

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

        <main className="py-10">{children}</main>
      </div>
    </div>
  );
}
