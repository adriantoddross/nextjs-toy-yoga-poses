import { useUser } from "@auth0/nextjs-auth0/client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import classNames from "util/classnames";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import LoadingSpinner from "./LoadingSpinner";

const userNavigation = [
  { name: "Your profile", href: "/profile" },
  { name: "Logout", href: "/api/auth/logout" },
];

export default function ProfileHeader() {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <LoadingSpinner />
      </div>
    );
  }

  if (user) {
    return (
      <Menu as="div" className="relative">
        <Menu.Button className="-m-1.5 flex items-center p-1.5">
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full bg-gray-50"
            src={user.picture}
            alt=""
            referrerPolicy="no-referrer"
            // We use no-referred to prevent a GET 403 error after a user's image has been fetched by Auth0
            // https://github.com/auth0-samples/auth0-react-samples/issues/221#issuecomment-1111428975
          />
          <span className="hidden lg:flex lg:items-center">
            <span
              className="ml-4 text-sm font-semibold leading-6 text-gray-900"
              aria-hidden="true"
            >
              {user.name}
            </span>
            <ChevronDownIcon
              className="ml-2 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
            {userNavigation.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <a
                    href={item.href}
                    className={classNames(
                      active ? "bg-gray-50" : "",
                      "block px-3 py-1 text-sm leading-6 text-gray-900"
                    )}
                  >
                    {item.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    );
  }
  return <a href="/api/auth/login">Login</a>;
}
