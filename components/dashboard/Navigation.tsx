import { Menu, Transition } from "@headlessui/react";
import type { NextPage } from "next";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { BiBell, BiChevronDown, BiMenu } from "react-icons/bi";

type Props = {
  // user: UserProfile;
  // handleSidebar: () => Promise<void>;
};

export const Navbar: NextPage<Props> = () => {
  const router = useRouter();
  const handleSignout = async () => {
    try {
      await signOut();
      router.push("/");
    } catch (error) {
      console.log(error.message || "Unexpected error");
    }
  };

  return (
    <div className="relative z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:border-none">
      <button
        type="button"
        className="border-r border-gray-200 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 lg:hidden"
        // onClick={handleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <BiMenu className="h-6 w-6" aria-hidden="true" />
      </button>
      {/* Search bar */}
      <div className="flex flex-1 justify-between px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
        <div className="flex flex-1 items-center text-xl">
          <h2>
            <strong>embipi</strong> - your baby path
          </h2>
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <button
            type="button"
            className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            <span className="sr-only">View notifications</span>
            <BiBell className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Profile dropdown */}
          <Menu as="div" className="relative ml-3">
            <div>
              <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 lg:rounded-md lg:p-2 lg:hover:bg-gray-50">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-500">
                  <span className="text-xl font-medium leading-none text-white">
                    MB
                    {/* {user?.name?.charAt(0).toUpperCase()}
                    {user?.lastName?.charAt(0).toUpperCase()} */}
                  </span>
                </span>
                <span className="ml-3 hidden text-sm font-medium text-gray-700 lg:block">
                  <span className="sr-only">Open user menu for </span>
                  Mitch{/* {user?.name} */}
                </span>
                <BiChevronDown
                  className="ml-1 hidden h-5 w-5 flex-shrink-0 text-gray-400 lg:block"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`block px-4 py-2 text-sm text-gray-700 ${
                        active ? "bg-gray-100" : ""
                      }`}
                      // onClick={handleRouterPushToSettings}
                    >
                      Settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`block px-4 py-2 text-sm text-gray-700 ${
                        active ? "bg-gray-100" : ""
                      }`}
                      onClick={handleSignout}
                    >
                      Logout
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};
