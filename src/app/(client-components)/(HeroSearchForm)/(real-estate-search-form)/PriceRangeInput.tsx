"use client";

import React, { Fragment, useState, FC } from "react";
import { Popover, Transition } from "@headlessui/react";
import Slider from "rc-slider";
import convertNumbThousand from "@/utils/convertNumbThousand";
import ButtonSubmit from "../ButtonSubmit";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

export interface PriceRangeInputProps {
  onChange?: (data: any) => void;
  fieldClassName?: string;
}

const PriceRangeInput: FC<PriceRangeInputProps> = ({
  onChange,
  fieldClassName = "[ nc-hero-field-padding ]",
}) => {
  const [rangePrices, setRangePrices] = useState([100000, 4000000]);

  return (
    <Popover className="flex relative flex-[1.3]">
      {({ open, close }) => (
        <>
          <div
            className={`flex-1 z-10 flex items-center focus:outline-none cursor-pointer ${
              open ? "nc-hero-field-focused" : ""
            }`}
          >
            <Popover.Button
              className={`flex-1 flex text-left items-center focus:outline-none ${fieldClassName} space-x-3 `}
              onClickCapture={() => document.querySelector("html")?.click()}
            >
              <div className="text-neutral-300 dark:text-neutral-400">
                <CurrencyDollarIcon className="w-5 h-5 lg:w-7 lg:h-7" />
              </div>
              <div className="flex-grow">
                <span className="block xl:text-lg font-semibold truncate">
                  {`$${convertNumbThousand(
                    rangePrices[0] / 1000
                  )}k ~ $${convertNumbThousand(rangePrices[1] / 1000)}k`}
                </span>
                <span className="block mt-1 text-sm text-neutral-400 leading-none font-light ">
                  Choose price range
                </span>
              </div>
            </Popover.Button>

            {/* BUTTON SUBMIT OF FORM */}
            <div className="pr-2 xl:pr-4">
              <ButtonSubmit href="/listing-real-estate" />
            </div>
          </div>

          {open && (
            <div className="h-8 absolute self-center top-1/2 -translate-y-1/2 z-0 -left-0.5 right-1 bg-white dark:bg-neutral-800"></div>
          )}

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-0 lg:right-0 z-10 w-full sm:min-w-[340px] max-w-sm bg-white dark:bg-neutral-800 top-full mt-3 py-5 sm:py-6 px-4 sm:px-8 rounded-3xl shadow-xl">
              <div className="relative flex flex-col space-y-8">
                <div className="space-y-5">
                  <span className="font-medium">Range Price </span>
                  <Slider
                    range
                    className="text-red-400"
                    min={10000}
                    max={10000000}
                    defaultValue={[rangePrices[0], rangePrices[1]]}
                    allowCross={false}
                    step={1000}
                    onChange={(e) => setRangePrices(e as number[])}
                  />
                </div>

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
                        className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-7 pr-3 sm:text-sm border-neutral-200 dark:border-neutral-500 rounded-full text-neutral-900 dark:text-neutral-200 bg-transparent"
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
                        className="focus:ring-primary-500 focus:border-priring-primary-500 block w-full pl-7 pr-3 sm:text-sm border-neutral-200 dark:border-neutral-500 rounded-full text-neutral-900 dark:text-neutral-200 bg-transparent"
                        value={convertNumbThousand(rangePrices[1])}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default PriceRangeInput;
