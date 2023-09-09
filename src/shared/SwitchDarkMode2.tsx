"use client";

import { useThemeMode } from "@/utils/useThemeMode";
import { Switch } from "@headlessui/react";
import React from "react";

export interface SwitchDarkMode2Props {
  className?: string;
}
const SwitchDarkMode2: React.FC<SwitchDarkMode2Props> = ({
  className = "",
}) => {
  const { _toogleDarkMode, isDarkMode, toDark, toLight } = useThemeMode();

  return (
    <div className="inline-flex">
      <span className="sr-only">Enable dark mode</span>
      <Switch
        checked={isDarkMode}
        onChange={_toogleDarkMode}
        className={`${isDarkMode ? "bg-teal-900" : "bg-teal-600"}
          relative inline-flex h-[22px] w-[42px] shrink-0 cursor-pointer rounded-full border-4 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Enable dark mode</span>
        <span
          aria-hidden="true"
          className={`${isDarkMode ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};

export default SwitchDarkMode2;
