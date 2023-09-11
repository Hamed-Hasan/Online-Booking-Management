import React, { FC } from "react";
import { AuthorType } from "@/data/types";
import { StarIcon } from "@heroicons/react/24/solid";
import Avatar from "@/shared/Avatar";
import Badge from "@/shared/Badge";
import Link from "next/link";

export interface CardAuthorBoxProps {
  className?: string;
  author: AuthorType;
  index?: number;
}

const CardAuthorBox: FC<CardAuthorBoxProps> = ({
  className = "",
  author,
  index,
}) => {
  const { displayName, href = "/", avatar, starRating } = author;
  return (
    <Link
      href={href}
      className={`nc-CardAuthorBox relative flex flex-col items-center justify-center text-center px-3 py-5 sm:px-6 sm:py-7  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
    >
      {index && (
        <Badge
          className="absolute left-3 top-3"
          color={index === 1 ? "red" : index === 2 ? "blue" : "green"}
          name={`#${index}`}
        />
      )}
      <Avatar
        sizeClass="w-20 h-20 text-2xl"
        radius="rounded-full"
        imgUrl={avatar}
        userName={displayName}
      />
      <div className="mt-3">
        <h2 className={`text-base font-medium`}>
          <span className="line-clamp-1">{displayName}</span>
        </h2>
        <span
          className={`block mt-1.5 text-sm text-neutral-500 dark:text-neutral-400`}
        >
          New York
        </span>
      </div>
      <div className="py-2 px-5 mt-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center ">
        <span className="text-xs font-medium pt-[1px]">
          {starRating || 4.9}
        </span>
        <StarIcon className="w-5 h-5 text-amber-500 ml-2 " />
      </div>
    </Link>
  );
};

export default CardAuthorBox;
