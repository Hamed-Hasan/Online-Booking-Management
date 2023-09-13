"use client";

import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { FC, Fragment } from "react";

export const headerLanguage = [
  {
    id: "English",
    name: "English",
    description: "United State",
    href: "##",
    active: true,
  },
  {
    id: "Vietnamese",
    name: "Vietnamese",
    description: "Vietnamese",
    href: "##",
  },
  {
    id: "Francais",
    name: "Francais",
    description: "Belgique",
    href: "##",
  },
  {
    id: "Francais",
    name: "Francais",
    description: "Canada",
    href: "##",
  },
  {
    id: "Francais",
    name: "Francais",
    description: "Belgique",
    href: "##",
  },
  {
    id: "Francais",
    name: "Francais",
    description: "Canada",
    href: "##",
  },
];

interface LangDropdownProps {
  panelClassName?: string;
}

const LangDropdown: FC<LangDropdownProps> = ({
  panelClassName = "z-10 w-screen max-w-[280px] px-4 mt-4 right-0 sm:px-0",
}) => {
  return (
    <div className="LangDropdown">
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-80"}
             group px-3 py-1.5 border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 rounded-full inline-flex items-center text-sm text-gray-700 dark:text-neutral-300 font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <GlobeAltIcon className="w-[18px] h-[18px] opacity-80" />

              <span className="ml-2 select-none">Language</span>
              <ChevronDownIcon
                className={`${open ? "-rotate-180" : "text-opacity-70"}
                  ml-2 h-4 w-4  group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className={`absolute ${panelClassName}`}>
                <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white dark:bg-neutral-800 p-7 lg:grid-cols-2">
                    {headerLanguage.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        onClick={() => close()}
                        className={`flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 ${
                          item.active
                            ? "bg-gray-100 dark:bg-neutral-700"
                            : "opacity-80"
                        }`}
                      >
                        <div className="">
                          <p className="text-sm font-medium ">{item.name}</p>
                          <p className="text-xs text-gray-500 dark:text-neutral-400">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};
export default LangDropdown;
