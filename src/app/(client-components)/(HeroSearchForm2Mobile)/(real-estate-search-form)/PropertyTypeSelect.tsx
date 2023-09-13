"use client";

import React, { useEffect } from "react";
import { FC } from "react";
import Checkbox from "@/shared/Checkbox";
import { ClassOfProperties } from "../../type";

// DEMO DATA

export interface PropertyTypeSelectProps {
  onChange?: (data: ClassOfProperties[]) => void;
  defaultValue?: ClassOfProperties[];
}

const PropertyTypeSelect: FC<PropertyTypeSelectProps> = ({
  onChange,
  defaultValue,
}) => {
  const [typeOfProperty, setTypeOfProperty] = React.useState<
    ClassOfProperties[]
  >(defaultValue || []);

  useEffect(() => {
    if (!defaultValue) return;
    setTypeOfProperty(defaultValue);
  }, [defaultValue]);

  return (
    <div className="p-5">
      <span className="block font-semibold text-xl sm:text-2xl">
        Property types
      </span>
      <div className="relative flex flex-col space-y-5 mt-7">
        {typeOfProperty.map((item, index) => (
          <div key={item.name} className="">
            <Checkbox
              name={item.name}
              label={item.name}
              subLabel={item.description}
              defaultChecked={typeOfProperty[index].checked}
              onChange={(e) => {
                const newState = typeOfProperty.map((item, i) => {
                  if (i === index) {
                    return { ...item, checked: e };
                  }
                  return item;
                });
                setTypeOfProperty(() => {
                  return newState;
                });
                onChange && onChange(newState);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyTypeSelect;
