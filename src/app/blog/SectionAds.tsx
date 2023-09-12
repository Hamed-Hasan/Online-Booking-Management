import React, { FC } from "react";
import imgAds from "@/images/ads.png";
import Image from "next/image";

export interface SectionAdsProps {
  className?: string;
}

const SectionAds: FC<SectionAdsProps> = ({ className = "" }) => {
  return (
    <a href="/#" className={`nc-SectionAds block w-full ${className}`}>
      <Image className="w-full" src={imgAds} alt="" />
    </a>
  );
};

export default SectionAds;
