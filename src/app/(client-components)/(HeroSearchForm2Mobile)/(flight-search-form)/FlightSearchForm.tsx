"use client";
import React, { useState } from "react";
import LocationInput from "../LocationInput";
import GuestsInput from "../GuestsInput";
import DatesRangeInput from "../DatesRangeInput";
import { GuestsObject } from "../../type";
import converSelectedDateToString from "@/utils/converSelectedDateToString";

const FlightSearchForm = () => {
  //
  const [fieldNameShow, setFieldNameShow] = useState<
    "locationPickup" | "locationDropoff" | "dates" | "guests" | "general"
  >("locationPickup");
  //
  const [locationInputPickUp, setLocationInputPickUp] = useState("");
  const [locationInputDropOff, setLocationInputDropOff] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(
    new Date("2023/02/06")
  );
  const [endDate, setEndDate] = useState<Date | null>(new Date("2023/02/23"));

  const [dropOffLocationType, setDropOffLocationType] = useState<
    "Round-trip" | "One-way" | ""
  >("Round-trip");
  const [flightClassState, setFlightClassState] = useState("Economy");

  const [guestInput, setGuestInput] = useState<GuestsObject>({
    guestAdults: 0,
    guestChildren: 0,
    guestInfants: 0,
  });

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
              setFieldNameShow("dates");
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

  const renderGenerals = () => {
    const isActive = fieldNameShow === "general";
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
            className={`w-full flex justify-between text-sm font-medium p-4`}
            onClick={() => setFieldNameShow("general")}
          >
            <span className="text-neutral-400">Flight type?</span>
            <span>{`${dropOffLocationType}, ${flightClassState}`}</span>
          </button>
        ) : (
          <div className="p-5">
            <span className="block font-semibold text-xl sm:text-2xl">
              Flight type?
            </span>
            <div className="relative mt-5">
              <div className="flex space-x-2">
                <div
                  className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer select-none ${
                    dropOffLocationType === "Round-trip"
                      ? "bg-black shadow-black/10 shadow-lg text-white"
                      : "border border-neutral-300 dark:border-neutral-700"
                  }`}
                  onClick={(e) => setDropOffLocationType("Round-trip")}
                >
                  Round-trip
                </div>
                <div
                  className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer select-none ${
                    dropOffLocationType === "One-way"
                      ? "bg-black text-white shadow-black/10 shadow-lg"
                      : "border border-neutral-300 dark:border-neutral-700"
                  }`}
                  onClick={(e) => setDropOffLocationType("One-way")}
                >
                  One-way
                </div>
              </div>

              <div className="mt-6">
                <label className="text-base font-semibold" htmlFor="">
                  Ticket Class:
                </label>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {renderRadio("class", "Economy", "Economy")}
                  {renderRadio("class", "Business", "Business")}
                  {renderRadio("class", "Multiple", "Multiple")}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderRadio = (
    name: string,
    id: string,
    label: string,
    defaultChecked?: boolean
  ) => {
    return (
      <div className="flex items-center ">
        <input
          defaultChecked={flightClassState === label}
          id={id + name}
          name={name}
          onChange={() => setFlightClassState(label)}
          type="radio"
          className="focus:ring-primary-500 h-6 w-6 text-primary-500 border-neutral-300 !checked:bg-primary-500 bg-transparent"
        />
        <label
          htmlFor={id + name}
          className="ml-3 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
        >
          {label}
        </label>
      </div>
    );
  };

  const renderInputGuests = () => {
    const isActive = fieldNameShow === "guests";
    let guestSelected = "";
    if (guestInput.guestAdults || guestInput.guestChildren) {
      const guest =
        (guestInput.guestAdults || 0) + (guestInput.guestChildren || 0);
      guestSelected += `${guest} guests`;
    }

    if (guestInput.guestInfants) {
      guestSelected += `, ${guestInput.guestInfants} infants`;
    }

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
            className={`w-full flex justify-between text-sm font-medium p-4`}
            onClick={() => setFieldNameShow("guests")}
          >
            <span className="text-neutral-400">Who</span>
            <span>{guestSelected || `Add guests`}</span>
          </button>
        ) : (
          <GuestsInput defaultValue={guestInput} onChange={setGuestInput} />
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="w-full space-y-5">
        {renderInputLocationPickup()}
        {/*  */}
        {renderInputLocationDropoff()}
        {/*  */}
        {renderGenerals()}
        {/*  */}
        {renderInputDates()}
        {/*  */}
        {renderInputGuests()}
      </div>
    </div>
  );
};

export default FlightSearchForm;
