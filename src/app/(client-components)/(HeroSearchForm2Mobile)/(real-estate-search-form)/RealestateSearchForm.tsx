"use client";

import React, { useState } from "react";
import convertNumbThousand from "@/utils/convertNumbThousand";
import LocationInput from "../LocationInput";
import PriceRangeInput from "./PriceRangeInput";
import PropertyTypeSelect from "./PropertyTypeSelect";
import { ClassOfProperties } from "../../type";

const RealestateSearchForm = () => {
  //
  const [fieldNameShow, setFieldNameShow] = useState<
    "location" | "propertyType" | "price"
  >("location");
  //
  const [locationInputTo, setLocationInputTo] = useState("");
  const [rangePrices, setRangePrices] = useState([100000, 4000000]);
  const [typeOfProperty, setTypeOfProperty] = useState<ClassOfProperties[]>([
    {
      name: "Duplex House",
      description: "Have a place to yourself",
      checked: true,
    },
    {
      name: "Ferme House",
      description: "Have your own room and share some common spaces",
      checked: true,
    },
    {
      name: "Chalet House",
      description:
        "Have a private or shared room in a boutique hotel, hostel, and more",
      checked: true,
    },
    {
      name: "Maison House",
      description: "Stay in a shared space, like a common room",
      checked: false,
    },
  ]);

  const renderInputLocation = () => {
    const isActive = fieldNameShow === "location";
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
            onClick={() => setFieldNameShow("location")}
          >
            <span className="text-neutral-400">Where</span>
            <span>{locationInputTo || "Location"}</span>
          </button>
        ) : (
          <LocationInput
            headingText="Where to find?"
            defaultValue={locationInputTo}
            onChange={(value) => {
              setLocationInputTo(value);
              setFieldNameShow("propertyType");
            }}
          />
        )}
      </div>
    );
  };

  const renderInputPropertyType = () => {
    const isActive = fieldNameShow === "propertyType";

    let typeOfPropertyText = "";
    if (typeOfProperty && typeOfProperty.length > 0) {
      typeOfPropertyText = typeOfProperty
        .filter((item) => item.checked)
        .map((item) => {
          return item.name;
        })
        .join(", ");
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
            onClick={() => setFieldNameShow("propertyType")}
          >
            <span className="text-neutral-400">Property</span>
            <span className="truncate ml-5">
              {typeOfPropertyText || "Add property"}
            </span>
          </button>
        ) : (
          <PropertyTypeSelect
            defaultValue={typeOfProperty}
            onChange={setTypeOfProperty}
          />
        )}
      </div>
    );
  };

  const renderInputPrice = () => {
    const isActive = fieldNameShow === "price";

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
            onClick={() => setFieldNameShow("price")}
          >
            <span className="text-neutral-400">Price</span>
            <span>
              {`$${convertNumbThousand(
                rangePrices[0] / 1000
              )}k ~ $${convertNumbThousand(rangePrices[1] / 1000)}k`}
            </span>
          </button>
        ) : (
          <PriceRangeInput
            defaultValue={rangePrices}
            onChange={setRangePrices}
          />
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="w-full space-y-5">
        {/*  */}
        {renderInputLocation()}
        {/*  */}
        {renderInputPropertyType()}
        {/*  */}
        {renderInputPrice()}
      </div>
    </div>
  );
};

export default RealestateSearchForm;
