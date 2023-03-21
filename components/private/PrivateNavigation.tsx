import { Menu, Transition } from "@headlessui/react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, Fragment, MouseEvent } from "react";
import { BiChevronDown, BiMenu, BiX } from "react-icons/bi";
import { GiDinosaurEgg } from "react-icons/gi";
import { LoginButton } from "../common/LoginButton";
import useScrolledFromTop from "../hooks/useScrolledFromTop";

export const links = ["Browse", "Random", "Plan", "Favourites"];

interface PrivateNavigationProps {
  user: Session["user"];
}

export const PrivateNavigation: FC<PrivateNavigationProps> = ({ user }) => {
  const router = useRouter();

  const isScrolling = useScrolledFromTop();

  const handleRouterPushToSettings = (event: MouseEvent<HTMLAnchorElement>) => {
    router.push(`/user/${user?.id}/settings`);
  };
  return (
    <div className="fixed top-0 left-1/2 z-10 flex w-full max-w-7xl translate-x-[-50%] items-center justify-between">
      {/* mobile to medium display */}
      <Menu as="div" className="h-full md:hidden">
        {({ open }) => (
          <nav
            className={`${open && "w-full bg-slate-300"} absolute top-0 p-2`}
          >
            {open ? (
              <Menu.Button>
                <BiX className="h-10 w-10" aria-hidden="true" />
              </Menu.Button>
            ) : (
              <Menu.Button>
                <BiMenu
                  className={`h-10 w-10 rounded-md ${
                    isScrolling && "border bg-slate-200 opacity-80"
                  }`}
                  aria-hidden="true"
                />
              </Menu.Button>
            )}
            <Transition
              enter="transition duration-200 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="my-4 ml-2 flex w-full flex-col space-y-5">
                {links.map((item) => (
                  <Menu.Item key={item}>
                    {({ active }) => {
                      const onPage = router.pathname.includes(
                        item.toLowerCase()
                      );
                      return (
                        <Link
                          key={item}
                          href={`/dashboard/${item.toLowerCase()}`}
                          className={`w-full ${active && "bg-dino-red-500"} ${
                            onPage && "text-dino-red-500"
                          } font-medium text-gray-500 hover:text-gray-900`}
                        >
                          {item}
                        </Link>
                      );
                    }}
                  </Menu.Item>
                ))}
                <Menu.Item>
                  <LoginButton user={user} type="button" />
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </nav>
        )}
      </Menu>
      {/* medium and up display */}
      <nav className="hidden p-4 md:flex md:justify-between">
        <div className="flex items-center space-x-6">
          <Link href="/">
            <GiDinosaurEgg size="30" />
          </Link>

          {links.map((item) => {
            const onPage = router.pathname.includes(item.toLowerCase());
            return (
              <Link
                key={item}
                href={`/dashboard/${item.toLowerCase()}`}
                className={`rounded-md p-1.5 font-medium text-gray-500 transition-opacity duration-700 hover:text-gray-900 ${
                  isScrolling && "border bg-slate-200 opacity-80"
                } ${onPage && "text-dino-red-500"}`}
              >
                {item}
              </Link>
            );
          })}
        </div>
      </nav>

      <Link
        href="/"
        className="absolute left-1/2 ml-[-30px] translate-x-1/2 md:hidden"
      >
        <GiDinosaurEgg size="30" />
      </Link>
      {/* profile dropdown */}
      <Menu as="div" className="p-3">
        <div>
          <Menu.Button className="flex max-w-xs items-center rounded-full border-4 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 lg:rounded-md lg:p-2 lg:hover:bg-gray-50">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-500">
              <span className="text-xl font-medium leading-none text-white">
                {user?.name?.charAt(0).toUpperCase()}
                {user?.lastName?.charAt(0).toUpperCase()}
              </span>
            </span>
            <span className="ml-3 hidden text-sm font-medium text-gray-700 lg:block">
              <span className="sr-only">Open user menu for </span>
              {user?.name}
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
                  className="block px-4 py-2 text-sm text-gray-700"
                  onClick={handleRouterPushToSettings}
                >
                  Settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 "
                  onClick={async () => {
                    await signOut();
                    router.push("/");
                  }}
                >
                  Logout
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
