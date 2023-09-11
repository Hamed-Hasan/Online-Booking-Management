import React, { FC } from "react";
import { TaxonomyType } from "@/data/types";
import Badge from "@/shared/Badge";
import convertNumbThousand from "@/utils/convertNumbThousand";
import Link from "next/link";
import Image from "next/image";

export interface CardCategoryBox1Props {
  className?: string;
  taxonomy: TaxonomyType;
}

const CardCategoryBox1: FC<CardCategoryBox1Props> = ({
  className = "",
  taxonomy,
}) => {
  const { count, name, thumbnail, href = "/" } = taxonomy;
  return (
    <Link
      href={href}
      className={`nc-CardCategoryBox1 relative flex items-center p-3 sm:p-6 [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ]  ${className}`}
    >
      <Badge
        className="absolute right-2 top-2"
        color="gray"
        name={convertNumbThousand(count)}
      />

      <div className="relative flex-shrink-0 w-24 h-24 rounded-full overflow-hidden">
        <Image
          src={thumbnail || ""}
          fill
          alt=""
          sizes="(max-width: 400px) 100vw, 400px"
        />
      </div>
      <div className="ml-4 flex-grow overflow-hidden">
        <h2 className="text-base font-medium">
          <span className="line-clamp-1">{name}</span>
        </h2>
        <span
          className={`block mt-2 text-sm text-neutral-500 dark:text-neutral-400`}
        >
          19 minutes drive
        </span>
      </div>
    </Link>
  );
};

export default CardCategoryBox1;
