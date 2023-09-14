import React, { FC } from "react";
import SectionGridHasMap from "../SectionGridHasMap";

export interface ListingCarMapPageProps {}

const ListingCarMapPage: FC<ListingCarMapPageProps> = () => {
  return (
    <div className="container pb-24 lg:pb-28 2xl:pl-10 xl:pr-0 xl:max-w-none">
      <SectionGridHasMap />
    </div>
  );
};

export default ListingCarMapPage;
