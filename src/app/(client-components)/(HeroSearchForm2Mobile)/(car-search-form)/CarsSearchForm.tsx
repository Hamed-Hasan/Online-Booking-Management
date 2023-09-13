"use client";
import converSelectedDateToString from "@/utils/converSelectedDateToString";
import React, { useState } from "react";
import DatesRangeInput from "../DatesRangeInput";
import LocationInput from "../LocationInput";

const CarsSearchForm = () => {
  //
  const [fieldNameShow, setFieldNameShow] = useState<
    "locationPickup" | "locationDropoff" | "dates"
  >("locationPickup");
  //
  const [locationInputPickUp, setLocationInputPickUp] = useState("");
  const [locationInputDropOff, setLocationInputDropOff] = useState("");

  const [startDate, setStartDate] = useState<Date | null>(
    new Date("2023/02/06")
  );
  const [endDate, setEndDate] = useState<Date | null>(new Date("2023/02/23"));

  const [dropOffLocationType, setDropOffLocationType] = useState<
    "same" | "different"
  >("same");

  const renderInputLocationPickup = () => {
    const isActive = fieldNameShow === "locationPickup";
    return (
      <div
        className={`w-full bg-white dark:bg-neutral-800 ${
          isActive
            ? "rounded-2xl shadow-lg"
            : "rounded-xl shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]"
        }`}
      >
        {!isActive ? (
          <button
            className={`w-full flex justify-between text-sm font-medium p-4`}
            onClick={() => setFieldNameShow("locationPickup")}
          >
            <span className="text-neutral-400">Pick up</span>
            <span>{locationInputPickUp || "Location"}</span>
          </button>
        ) : (
          <LocationInput
            headingText="Pick up?"
            defaultValue={locationInputPickUp}
            onChange={(value) => {
              setLocationInputPickUp(value);
              if (dropOffLocationType === "different") {
                setFieldNameShow("locationDropoff");
              } else {
                setFieldNameShow("dates");
              }
            }}
          />
        )}
      </div>
    );
  };

  const renderInputLocationDropoff = () => {
    const isActive = fieldNameShow === "locationDropoff";
    return (
      <div
        className={`w-full bg-white dark:bg-neutral-800 ${
          isActive
            ? "rounded-2xl shadow-lg"
            : "rounded-xl shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]"
        }`}
      >
        {!isActive ? (
          <button
            className={`w-full flex justify-between text-sm font-medium p-4`}
            onClick={() => setFieldNameShow("locationDropoff")}
          >
            <span className="text-neutral-400">Drop off</span>
            <span>{locationInputDropOff || "Location"}</span>
          </button>
        ) : (
          <LocationInput
            headingText="Drop off?"
            defaultValue={locationInputDropOff}
            onChange={(value) => {
              setLocationInputDropOff(value);
              setFieldNameShow("dates");
            }}
          />
        )}
      </div>
    );
  };

  const renderInputDates = () => {
    const isActive = fieldNameShow === "dates";

    return (
      <div
        className={`w-full bg-white dark:bg-neutral-800 overflow-hidden ${
          isActive
            ? "rounded-2xl shadow-lg"
            : "rounded-xl shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]"
        }`}
      >
        {!isActive ? (
          <button
            className={`w-full flex justify-between text-sm font-medium p-4  `}
            onClick={() => setFieldNameShow("dates")}
          >
            <span className="text-neutral-400">When</span>
            <span>
              {startDate
                ? converSelectedDateToString([startDate, endDate])
                : "Add date"}
            </span>
          </button>
        ) : (
          <DatesRangeInput />
        )}
      </div>
    );
  };

  const renderRadioBtn = () => {
    return (
      <div className="flex justify-center items-center space-x-3">
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

  return (
    <div>
      <div className="w-full space-y-5">
        {renderRadioBtn()}

        {renderInputLocationPickup()}
        {/*  */}
        {dropOffLocationType === "different" && renderInputLocationDropoff()}
        {/*  */}
        {renderInputDates()}
        {/*  */}
      </div>
    </div>
  );
};

export default CarsSearchForm;
