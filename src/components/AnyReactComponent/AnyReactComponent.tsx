"use client";

import { Transition } from "@headlessui/react";
import CarCard from "@/components/CarCard";
import ExperiencesCard from "@/components/ExperiencesCard";
import StayCard from "@/components/StayCard";
import { CarDataType, ExperiencesDataType, StayDataType } from "@/data/types";
import React, { FC, Fragment } from "react";
import { useState } from "react";

export interface AnyReactComponentProps {
  className?: string;
  listing?: StayDataType;
  experiences?: ExperiencesDataType;
  car?: CarDataType;
  isSelected?: boolean;
  lat: number;
  lng: number;
}

const AnyReactComponent: FC<AnyReactComponentProps> = ({
  className = "",
  listing,
  car,
  experiences,
  isSelected,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`nc-AnyReactComponent relative  ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span
        className={`flex px-2 py-1 rounded-lg bg-white dark:bg-neutral-900 text-sm font-semibold items-center justify-center min-w-max shadow-lg hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 transition-colors ${
          isSelected
            ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
            : ""
        }`}
      >
        {listing?.price || experiences?.price || car?.price}
      </span>
      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute z-50 bottom-full pb-3 -left-12 w-[260px] aspect-w-1">
          {listing && (
            <StayCard size="small" data={listing} className="shadow-2xl" />
          )}
          {experiences && (
            <ExperiencesCard
              size="small"
              data={experiences}
              ratioClass="aspect-w-12 aspect-h-10"
              className="shadow-2xl bg-white dark:bg-neutral-900 rounded-3xl"
            />
          )}
          {car && <CarCard size="small" data={car} className="shadow-2xl " />}
        </div>
      </Transition>
    </div>
  );
};

export default AnyReactComponent;
