"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { FC } from "react";

export interface ClearDataButtonProps {
  onClick: () => void;
}

const ClearDataButton: FC<ClearDataButtonProps> = ({ onClick }) => {
  return (
    <span
      onClick={() => onClick && onClick()}
      className=" absolute z-10 w-5 h-5 lg:w-6 lg:h-6 text-sm bg-neutral-200 dark:bg-neutral-800 rounded-full flex items-center justify-center right-1 lg:right-3 top-1/2 transform -translate-y-1/2"
    >
      <XMarkIcon className="w-4 h-4" />
    </span>
  );
};

export default ClearDataButton;
