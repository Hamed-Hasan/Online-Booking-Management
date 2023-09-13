"use client";

import React, { FC, useState } from "react";
import LocationInput from "../LocationInput";
import RentalCarDatesRangeInput from "./RentalCarDatesRangeInput";

export interface RentalCarSearchFormProps {}

const RentalCarSearchForm: FC<RentalCarSearchFormProps> = ({}) => {
  const [dropOffLocationType, setDropOffLocationType] = useState<
    "same" | "different"
  >("different");

  const renderRadioBtn = () => {
    return (
      <div className="pb-3 flex justify-center items-center space-x-3">
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer ${
            dropOffLocationType === "same"
              ? "bg-black text-white shadow-black/10 shadow-lg"
              : "border border-neutral-300 dark:border-neutral-700"
          }`}
          onClick={(e) => setDropOffLocationType("same")}
        >
          Same drop off
        </div>
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer ${
            dropOffLocationType === "different"
              ? "bg-black text-white shadow-black/10 shadow-lg"
              : "border border-neutral-300 dark:border-neutral-700"
          }`}
          onClick={(e) => setDropOffLocationType("different")}
        >
          Different drop off
        </div>
      </div>
    );
  };

  const renderForm = () => {
    return (
      <form className="w-full relative ">
        {renderRadioBtn()}
        <div className="flex flex-row w-full rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800">
          <LocationInput
            placeHolder="City or Airport"
            desc="Pick up location"
            className="flex-1"
          />
          {dropOffLocationType === "different" && (
            <>
              <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
              <LocationInput
                placeHolder="City or Airport"
                desc="Drop off location"
                className="flex-1"
                divHideVerticalLineClass="-inset-x-0.5"
              />
            </>
          )}
          <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
          <RentalCarDatesRangeInput className="flex-1" />
        </div>
      </form>
    );
  };

  return renderForm();
};

export default RentalCarSearchForm;
