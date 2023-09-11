import React, { FC } from "react";
import ButtonSecondary from "@/shared/ButtonSecondary";
import Link from "next/link";
import Image from "next/image";

export interface CollectionProps {
  className?: string;
  featuredImage?: string;
  name?: string;
  desc?: string;
  color?: string;
}

const Collection: FC<CollectionProps> = ({
  className = "",
  featuredImage = "https://images.pexels.com/photos/5059013/pexels-photo-5059013.jpeg?auto=compress&cs=tinysrgb&w=1600",
  name = "Collection",
  desc = "The most popular <br /> in the world",
  color,
}) => {
  return (
    <Link href={"/listing-stay"} className={`nc-Collection block ${className}`}>
      <div
        className={`relative w-full aspect-w-16 aspect-h-11 sm:aspect-h-10 h-0 rounded-2xl overflow-hidden group ${color}`}
      >
        <div>
          <Image
            src={featuredImage}
            fill
            alt=""
            className="object-cover "
            sizes="300px"
          />
        </div>
        <span className="opacity-0 group-hover:opacity-40 absolute inset-0 bg-black/10 transition-opacity"></span>

        <div>
          <div className="absolute inset-5 flex flex-col">
            <div className="max-w-xs">
              <span className={`block mb-2 text-sm text-slate-700`}>
                {name}
              </span>
              {desc && (
                <h2
                  className={`text-xl md:text-2xl text-slate-900 font-semibold`}
                  dangerouslySetInnerHTML={{ __html: desc }}
                ></h2>
              )}
            </div>
            <div className="mt-auto">
              <ButtonSecondary
                sizeClass="py-3 px-4 sm:py-3.5 sm:px-6"
                fontSize="text-sm font-medium"
              >
                Show more
              </ButtonSecondary>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Collection;
