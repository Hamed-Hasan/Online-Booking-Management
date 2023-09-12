"use client";

import React, { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import NcInputNumber from "@/components/NcInputNumber";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonThird from "@/shared/ButtonThird";
import ButtonClose from "@/shared/ButtonClose";
import Checkbox from "@/shared/Checkbox";
import Slider from "rc-slider";
import convertNumbThousand from "@/utils/convertNumbThousand";

// DEMO DATA
const typeOfPaces = [
  {
    name: "Entire place",
    description: "Have a place to yourself",
  },
  {
    name: "Private room",
    description: "Have your own room and share some common spaces",
  },
  {
    name: "Hotel room",
    description:
      "Have a private or shared room in a boutique hotel, hostel, and more",
  },
  {
    name: "Shared room",
    description: "Stay in a shared space, like a common room",
  },
];

const moreFilter1 = [
  { name: "Kitchen", defaultChecked: true },
  { name: "Air conditioning", defaultChecked: true },
  { name: "Heating" },
  { name: "Dryer" },
  { name: "Washer" },
  { name: "Wifi" },
  { name: "Indoor fireplace" },
  { name: "Breakfast" },
  { name: "Hair dryer" },
  { name: " Dedicated workspace" },
];

const moreFilter2 = [
  { name: " Free parking on premise" },
  { name: "Hot tub" },
  { name: "Gym" },
  { name: " Pool" },
  { name: " EV charger" },
];

const moreFilter3 = [
  { name: " House" },
  { name: "Bed and breakfast" },
  { name: "Apartment", defaultChecked: true },
  { name: " Boutique hotel" },
  { name: " Bungalow" },
  { name: " Chalet", defaultChecked: true },
  { name: " Condominium", defaultChecked: true },
  { name: " Cottage" },
  { name: " Guest suite" },
  { name: " Guesthouse" },
];

const moreFilter4 = [{ name: " Pets allowed" }, { name: "Smoking allowed" }];

const TabFilters = () => {
  const [isOpenMoreFilter, setisOpenMoreFilter] = useState(false);
  const [isOpenMoreFilterMobile, setisOpenMoreFilterMobile] = useState(false);
  const [rangePrices, setRangePrices] = useState([0, 1000]);

  //
  const closeModalMoreFilter = () => setisOpenMoreFilter(false);
  const openModalMoreFilter = () => setisOpenMoreFilter(true);
  //
  const closeModalMoreFilterMobile = () => setisOpenMoreFilterMobile(false);
  const openModalMoreFilterMobile = () => setisOpenMoreFilterMobile(true);

  const renderXClear = () => {
    return (
      <span className="w-4 h-4 rounded-full bg-primary-500 text-white flex items-center justify-center ml-3 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    );
  };

  const renderTabsTypeOfPlace = () => {
    return (
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`flex items-center justify-center px-4 py-2 text-sm rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-6000 focus:outline-none ${
                open ? "!border-primary-500 " : ""
              }`}
            >
              <span>Type of place</span>
              <i className="las la-angle-down ml-2"></i>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0 lg:max-w-md">
                <div className="overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
                  <div className="relative flex flex-col px-5 py-6 space-y-5">
                    {typeOfPaces.map((item) => (
                      <div key={item.name} className="">
                        <Checkbox
                          name={item.name}
                          label={item.name}
                          subLabel={item.description}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="p-5 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between">
                    <ButtonThird onClick={close} sizeClass="px-4 py-2 sm:px-5">
                      Clear
                    </ButtonThird>
                    <ButtonPrimary
                      onClick={close}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Apply
                    </ButtonPrimary>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  const renderTabsRoomAndBeds = () => {
    return (
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`flex items-center justify-center px-4 py-2 text-sm rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-6000 focus:outline-none ${
                open ? "!border-primary-500 " : ""
              }`}
            >
              <span>Rooms of Beds</span>
              <i className="las la-angle-down ml-2"></i>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0 lg:max-w-md">
                <div className="overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-neutral-900   border border-neutral-200 dark:border-neutral-700">
                  <div className="relative flex flex-col px-5 py-6 space-y-5">
                    <NcInputNumber label="Beds" max={10} />
                    <NcInputNumber label="Bedrooms" max={10} />
                    <NcInputNumber label="Bathrooms" max={10} />
                  </div>
                  <div className="p-5 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between">
                    <ButtonThird onClick={close} sizeClass="px-4 py-2 sm:px-5">
                      Clear
                    </ButtonThird>
                    <ButtonPrimary
                      onClick={close}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Apply
                    </ButtonPrimary>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  const renderTabsPriceRage = () => {
    return (
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`flex items-center justify-center px-4 py-2 text-sm rounded-full border border-primary-500 bg-primary-50 text-primary-700 focus:outline-none `}
            >
              <span>
                {`$${convertNumbThousand(
                  rangePrices[0]
                )} - $${convertNumbThousand(rangePrices[1])}`}{" "}
              </span>
              {renderXClear()}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0 ">
                <div className="overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
                  <div className="relative flex flex-col px-5 py-6 space-y-8">
                    <div className="space-y-5">
                      <span className="font-medium">Price per day</span>
                      <Slider
                        range
                        className="text-red-400"
                        min={0}
                        max={2000}
                        defaultValue={[rangePrices[0], rangePrices[1]]}
                        allowCross={false}
                        onChange={(e) => setRangePrices(e as number[])}
                      />
                    </div>

                    <div className="flex justify-between space-x-5">
                      <div>
                        <label
                          htmlFor="minPrice"
                          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                        >
                          Min price
                        </label>
                        <div className="mt-1 relative rounded-md">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-neutral-500 sm:text-sm">
                              $
                            </span>
                          </div>
                          <input
                            type="text"
                            name="minPrice"
                            disabled
                            id="minPrice"
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-3 sm:text-sm border-neutral-200 rounded-full text-neutral-900"
                            value={rangePrices[0]}
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
                            <span className="text-neutral-500 sm:text-sm">
                              $
                            </span>
                          </div>
                          <input
                            type="text"
                            disabled
                            name="maxPrice"
                            id="maxPrice"
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-3 sm:text-sm border-neutral-200 rounded-full text-neutral-900"
                            value={rangePrices[1]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between">
                    <ButtonThird onClick={close} sizeClass="px-4 py-2 sm:px-5">
                      Clear
                    </ButtonThird>
                    <ButtonPrimary
                      onClick={close}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Apply
                    </ButtonPrimary>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  const renderMoreFilterItem = (
    data: {
      name: string;
      defaultChecked?: boolean;
    }[]
  ) => {
    const list1 = data.filter((_, i) => i < data.length / 2);
    const list2 = data.filter((_, i) => i >= data.length / 2);
    return (
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col space-y-5">
          {list1.map((item) => (
            <Checkbox
              key={item.name}
              name={item.name}
              label={item.name}
              defaultChecked={!!item.defaultChecked}
            />
          ))}
        </div>
        <div className="flex flex-col space-y-5">
          {list2.map((item) => (
            <Checkbox
              key={item.name}
              name={item.name}
              label={item.name}
              defaultChecked={!!item.defaultChecked}
            />
          ))}
        </div>
      </div>
    );
  };

  const renderTabMoreFilter = () => {
    return (
      <div>
        <div
          className={`flex items-center justify-center px-4 py-2 text-sm rounded-full border border-primary-500 bg-primary-50 text-primary-700 focus:outline-none cursor-pointer`}
          onClick={openModalMoreFilter}
        >
          <span>More filters (3)</span>
          {renderXClear()}
        </div>

        <Transition appear show={isOpenMoreFilter} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-50 overflow-y-auto"
            onClose={closeModalMoreFilter}
          >
            <div className="min-h-screen text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40 dark:bg-opacity-60" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                className="inline-block py-8 px-2 h-screen w-full max-w-4xl"
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-flex flex-col w-full max-w-4xl text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 dark:text-neutral-100 shadow-xl h-full">
                  <div className="relative flex-shrink-0 px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 text-center">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      More filters
                    </Dialog.Title>
                    <span className="absolute left-3 top-3">
                      <ButtonClose onClick={closeModalMoreFilter} />
                    </span>
                  </div>

                  <div className="flex-grow overflow-y-auto">
                    <div className="px-10 divide-y divide-neutral-200 dark:divide-neutral-800">
                      <div className="py-7">
                        <h3 className="text-xl font-medium">Amenities</h3>
                        <div className="mt-6 relative ">
                          {renderMoreFilterItem(moreFilter1)}
                        </div>
                      </div>
                      <div className="py-7">
                        <h3 className="text-xl font-medium">Facilities</h3>
                        <div className="mt-6 relative ">
                          {renderMoreFilterItem(moreFilter2)}
                        </div>
                      </div>
                      <div className="py-7">
                        <h3 className="text-xl font-medium">Property type</h3>
                        <div className="mt-6 relative ">
                          {renderMoreFilterItem(moreFilter3)}
                        </div>
                      </div>
                      <div className="py-7">
                        <h3 className="text-xl font-medium">House rules</h3>
                        <div className="mt-6 relative ">
                          {renderMoreFilterItem(moreFilter4)}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-shrink-0 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between">
                    <ButtonThird
                      onClick={closeModalMoreFilter}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Clear
                    </ButtonThird>
                    <ButtonPrimary
                      onClick={closeModalMoreFilter}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Apply
                    </ButtonPrimary>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    );
  };

  const renderTabMoreFilterMobile = () => {
    return (
      <div>
        <div
          className={`flex lg:hidden items-center justify-center px-4 py-2 text-sm rounded-full border border-primary-500 bg-primary-50 text-primary-700 focus:outline-none cursor-pointer`}
          onClick={openModalMoreFilterMobile}
        >
          <span>More filters (3)</span>
          {renderXClear()}
        </div>

        <Transition appear show={isOpenMoreFilterMobile} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-50 overflow-y-auto"
            onClose={closeModalMoreFilterMobile}
          >
            <div className="min-h-screen text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40 dark:bg-opacity-60" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                className="inline-block py-8 px-2 h-screen w-full max-w-4xl"
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-flex flex-col w-full max-w-4xl text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 dark:text-neutral-100 shadow-xl h-full">
                  <div className="relative flex-shrink-0 px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 text-center">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      More filters
                    </Dialog.Title>
                    <span className="absolute left-3 top-3">
                      <ButtonClose onClick={closeModalMoreFilterMobile} />
                    </span>
                  </div>

                  <div className="flex-grow overflow-y-auto">
                    <div className="px-4 sm:px-6 divide-y divide-neutral-200 dark:divide-neutral-800">
                      {/* ---- */}
                      <div className="py-7">
                        <h3 className="text-xl font-medium">Type of place</h3>
                        <div className="mt-6 relative ">
                          {renderMoreFilterItem(typeOfPaces)}
                        </div>
                      </div>

                      {/* ---- */}
                      <div className="py-7">
                        <h3 className="text-xl font-medium">Range Prices</h3>
                        <div className="mt-6 relative ">
                          <div className="relative flex flex-col space-y-8">
                            <div className="space-y-5">
                              <Slider
                                range
                                className="text-red-400"
                                min={0}
                                max={2000}
                                defaultValue={[0, 1000]}
                                allowCross={false}
                                onChange={(e) => setRangePrices(e as number[])}
                              />
                            </div>

                            <div className="flex justify-between space-x-5">
                              <div>
                                <label
                                  htmlFor="minPrice"
                                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                                >
                                  Min price
                                </label>
                                <div className="mt-1 relative rounded-md">
                                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-neutral-500 sm:text-sm">
                                      $
                                    </span>
                                  </div>
                                  <input
                                    type="text"
                                    name="minPrice"
                                    disabled
                                    id="minPrice"
                                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-3 sm:text-sm border-neutral-200 rounded-full text-neutral-900"
                                    value={rangePrices[0]}
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
                                    <span className="text-neutral-500 sm:text-sm">
                                      $
                                    </span>
                                  </div>
                                  <input
                                    type="text"
                                    disabled
                                    name="maxPrice"
                                    id="maxPrice"
                                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-3 sm:text-sm border-neutral-200 rounded-full text-neutral-900"
                                    value={rangePrices[1]}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ---- */}
                      <div className="py-7">
                        <h3 className="text-xl font-medium">Rooms and beds</h3>
                        <div className="mt-6 relative flex flex-col space-y-5">
                          <NcInputNumber label="Beds" max={10} />
                          <NcInputNumber label="Bedrooms" max={10} />
                          <NcInputNumber label="Bathrooms" max={10} />
                        </div>
                      </div>

                      {/* ---- */}
                      <div className="py-7">
                        <h3 className="text-xl font-medium">Amenities</h3>
                        <div className="mt-6 relative ">
                          {renderMoreFilterItem(moreFilter1)}
                        </div>
                      </div>

                      {/* ---- */}
                      <div className="py-7">
                        <h3 className="text-xl font-medium">Facilities</h3>
                        <div className="mt-6 relative ">
                          {renderMoreFilterItem(moreFilter2)}
                        </div>
                      </div>

                      {/* ---- */}
                      <div className="py-7">
                        <h3 className="text-xl font-medium">Property type</h3>
                        <div className="mt-6 relative ">
                          {renderMoreFilterItem(moreFilter3)}
                        </div>
                      </div>

                      {/* ---- */}
                      <div className="py-7">
                        <h3 className="text-xl font-medium">House rules</h3>
                        <div className="mt-6 relative ">
                          {renderMoreFilterItem(moreFilter4)}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 flex-shrink-0 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between">
                    <ButtonThird
                      onClick={closeModalMoreFilterMobile}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Clear
                    </ButtonThird>
                    <ButtonPrimary
                      onClick={closeModalMoreFilterMobile}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Apply
                    </ButtonPrimary>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    );
  };

  return (
    <div className="flex lg:space-x-4">
      <div className="hidden lg:flex space-x-4">
        {renderTabsTypeOfPlace()}
        {renderTabsPriceRage()}
        {renderTabsRoomAndBeds()}
        {renderTabMoreFilter()}
      </div>
      {renderTabMoreFilterMobile()}
    </div>
  );
};

export default TabFilters;
