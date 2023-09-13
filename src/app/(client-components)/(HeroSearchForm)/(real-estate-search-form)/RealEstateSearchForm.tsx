import React, { FC } from "react";
import LocationInput from "../LocationInput";
import PriceRangeInput from "./PriceRangeInput";
import PropertyTypeSelect from "./PropertyTypeSelect";

export interface RealEstateSearchFormProps {}

const RealEstateSearchForm: FC<RealEstateSearchFormProps> = ({}) => {
  const renderForm = () => {
    return (
      <form className="w-full relative xl:mt-8 flex flex-col lg:flex-row lg:items-center rounded-3xl lg:rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-700 lg:divide-y-0">
        <LocationInput className="flex-[1.5]" />

        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        <PropertyTypeSelect />
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        <PriceRangeInput />
      </form>
    );
  };

  return renderForm();
};

export default RealEstateSearchForm;
