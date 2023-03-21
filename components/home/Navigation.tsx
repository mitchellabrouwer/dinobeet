import { Menu, Transition } from "@headlessui/react";
import { Session } from "next-auth";
import Link from "next/link";
import { FC } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { GiDinosaurEgg } from "react-icons/gi";
import { LoginButton } from "../common/LoginButton";

export const links = ["Benefits", "Features", "About", "Price"];

interface NavigationProps {
  user: Session["user"];
}

export const Navigation: FC<NavigationProps> = ({ user }) => (
  <>
    {/* mobile to medium display */}
    <Menu as="div" className="md:hidden">
      {({ open }) => (
        <nav
          className={`${
            open && "bg-slate-300"
          } fixed top-0 left-0 right-0 z-10 w-full max-w-7xl p-4`}
        >
          <div className="flex items-center justify-between">
            <Link href="/">
              <GiDinosaurEgg size="30" />
            </Link>
            {open ? (
              <Menu.Button>
                <BiX className="h-10 w-10" aria-hidden="true" />
              </Menu.Button>
            ) : (
              <Menu.Button>
                <BiMenu className="h-10 w-10" aria-hidden="true" />
              </Menu.Button>
            )}
          </div>
          <Transition
            enter="transition duration-200 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="mt-4 flex flex-col space-y-5">
              {links.map((item) => (
                <Menu.Item key={item}>
                  {({ active }) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className={`${
                        active && "bg-gray-200"
                      } font-medium text-gray-500 hover:text-gray-900`}
                    >
                      {item}
                    </a>
                  )}
                </Menu.Item>
              ))}
              <Menu.Item>
                <LoginButton user={user} dataCy="login-button" />
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
          <GiDinosaurEgg />
        </Link>

        {links.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-medium text-gray-500 hover:text-gray-900"
          >
            {item}
          </a>
        ))}
      </div>

      <LoginButton user={user} dataCy="login-button" />
    </nav>
  </>
);
