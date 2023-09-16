"use client";

import React, { useEffect, useState } from "react";
import { FC } from "react";
import Slider from "rc-slider";
import convertNumbThousand from "@/utils/convertNumbThousand";

export interface PriceRangeInputProps {
  onChange?: (e: number[]) => void;
  defaultValue?: number[];
}

const PriceRangeInput: FC<PriceRangeInputProps> = ({
  onChange,
  defaultValue,
}) => {
  const [rangePrices, setRangePrices] = useState(
    defaultValue || [100000, 4000000]
  );

  useEffect(() => {
    if (!defaultValue) return;
    setRangePrices(defaultValue);
  }, [defaultValue]);

  return (
    <div className="p-5">
      <span className="block font-semibold text-xl sm:text-2xl">
        Range Price?
      </span>
      <div className="relative flex flex-col space-y-8 mt-7">
        <Slider
          range
          className="text-red-400"
          min={10000}
          max={10000000}
          defaultValue={[rangePrices[0], rangePrices[1]]}
          allowCross={false}
          step={1000}
          onChange={(e) => {
            setRangePrices(e as number[]);
            onChange && onChange(e as number[]);
          }}
        />

        <div className="flex justify-between space-x-3">
          <div>
            <label
              htmlFor="minPrice"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              Min price
            </label>
            <div className="mt-1 relative rounded-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-neutral-500 sm:text-sm">$</span>
              </div>
              <input
                type="text"
                disabled
                name="minPrice"
                id="minPrice"
                className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-7 pr-3 sm:text-sm border-neutral-200 rounded-full text-neutral-900"
                value={convertNumbThousand(rangePrices[0])}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="maxPrice"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              Max price
            </label>
            <div className="mt-1 relative rounded-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-neutral-500 sm:text-sm">$</span>
              </div>
              <input
                disabled
                type="text"
                name="maxPrice"
                id="maxPrice"
                className="focus:ring-primary-500 focus:border-priring-primary-500 block w-full pl-7 pr-3 sm:text-sm border-neutral-200 rounded-full text-neutral-900"
                value={convertNumbThousand(rangePrices[1])}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeInput;
