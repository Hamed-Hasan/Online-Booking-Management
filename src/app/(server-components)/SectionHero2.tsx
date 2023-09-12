import React, { FC } from "react";
import imagePng from "@/images/hero-right-3.png";
import Image from "next/image";
import HeroRealEstateSearchForm from "../(client-components)/(HeroSearchForm)/(real-estate-search-form)/HeroRealEstateSearchForm";

export interface SectionHero2Props {
  className?: string;
  children?: React.ReactNode;
}

const SectionHero2: FC<SectionHero2Props> = ({ className = "", children }) => {
  return (
    <div className={`nc-SectionHero2 relative ${className}`}>
      <div className="absolute inset-y-0 w-5/6 xl:w-3/4 right-0 flex-grow">
        <Image fill className="object-cover" src={imagePng} alt="hero" />
      </div>
      <div className="relative py-14 lg:py-20">
        <div className="relative inline-flex">
          <div className="w-screen right-20 md:right-52 inset-y-0 absolute bg-primary-500"></div>
          <div className="relative max-w-3xl inline-flex flex-shrink-0 flex-col items-start py-16 sm:py-20 lg:py-24 space-y-8 sm:space-y-10 text-white">
            {children ? (
              children
            ) : (
              <h2 className="font-semibold text-4xl md:text-5xl xl:text-7xl !leading-[110%]">
                Find Your Best <br /> Smart Real Estate
              </h2>
            )}
          </div>
        </div>
        <div className="hidden lg:block lg:mt-20 w-full">
          <HeroRealEstateSearchForm />
        </div>
      </div>
    </div>
  );
};

export default SectionHero2;
