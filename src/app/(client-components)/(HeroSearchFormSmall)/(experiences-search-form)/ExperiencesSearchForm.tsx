"use client";

import React, { FC } from "react";
import LocationInput from "../LocationInput";
import GuestsInput from "../GuestsInput";
import ExperiencesDateSingleInput from "./ExperiencesDateSingleInput";

export interface ExperiencesSearchFormProps {}

const ExperiencesSearchForm: FC<ExperiencesSearchFormProps> = ({}) => {
  const renderForm = () => {
    return (
      <form className="w-full relative flex flex-row rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800">
        <LocationInput
          // onInputDone={() => setDateFocused(true)}
          className="flex-[1.5]"
        />
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        <ExperiencesDateSingleInput className="flex-[1.2]" />
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        <GuestsInput className="flex-1" submitLink="/listing-experiences" />
      </form>
    );
  };

  return renderForm();
};

export default ExperiencesSearchForm;
