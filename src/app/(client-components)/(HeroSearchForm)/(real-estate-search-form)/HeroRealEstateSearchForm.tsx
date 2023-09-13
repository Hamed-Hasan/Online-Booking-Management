"use client";

import React, { FC, useState } from "react";
import RealEstateSearchForm from "./RealEstateSearchForm";

export type SearchRealEstateTab = "Buy" | "Rent" | "Sell";

export interface HeroRealEstateSearchFormProps {
  className?: string;
  currentTab?: SearchRealEstateTab;
}

const HeroRealEstateSearchForm: FC<HeroRealEstateSearchFormProps> = ({
  className = "",
  currentTab = "Buy",
}) => {
  const tabs: SearchRealEstateTab[] = ["Buy", "Rent", "Sell"];
  const [tabActive, setTabActive] = useState<SearchRealEstateTab>(currentTab);

  const renderTab = () => {
    return (
      <ul className="ml-6 md:ml-16 xl:ml-20 inline-flex space-x-4 sm:space-x-8 lg:space-x-10 bg-white dark:bg-neutral-900 pb-6 md:p-6 !pl-0 xl:p-0 rounded-t-3xl">
        {tabs.map((tab) => {
          const active = tab === tabActive;
          return (
            <li
              onClick={() => setTabActive(tab)}
              className={`flex items-center cursor-pointer text-sm lg:text-base font-medium ${
                active
                  ? ""
                  : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-100"
              } `}
              key={tab}
            >
              {active && (
                <span className="block w-2.5 h-2.5 rounded-full bg-neutral-800 dark:bg-neutral-100 mr-2" />
              )}
              <span>{tab}</span>
            </li>
          );
        })}
      </ul>
    );
  };

  const renderForm = () => {
    switch (tabActive) {
      case "Buy":
        return <RealEstateSearchForm />;

      default:
        return <RealEstateSearchForm />;
    }
  };

  return (
    <div
      className={`nc-HeroRealEstateSearchForm w-full max-w-6xl py-5 lg:py-0 ${className}`}
    >
      {renderTab()}
      {renderForm()}
    </div>
  );
};

export default HeroRealEstateSearchForm;
