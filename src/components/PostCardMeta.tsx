import React, { FC } from "react";
import Avatar from "@/shared/Avatar";
import { PostDataType } from "@/data/types";
import Link from "next/link";

export interface PostCardMetaProps {
  className?: string;
  meta: Pick<PostDataType, "date" | "author">;
  hiddenAvatar?: boolean;
  size?: "large" | "normal";
}

const PostCardMeta: FC<PostCardMetaProps> = ({
  className = "leading-none",
  meta,
  hiddenAvatar = false,
  size = "normal",
}) => {
  const { date, author } = meta;
  return (
    <div
      className={`nc-PostCardMeta inline-flex items-center fledx-wrap text-neutral-800 dark:text-neutral-200 ${
        size === "normal" ? "text-sm" : "text-base"
      } ${className}`}
      data-nc-id="PostCardMeta"
    >
      <Link
        href={author.href}
        className="flex-shrink-0 relative flex items-center space-x-2"
      >
        {!hiddenAvatar && (
          <Avatar
            radius="rounded-full"
            sizeClass={
              size === "normal" ? "h-7 w-7 text-sm" : "h-10 w-10 text-xl"
            }
            imgUrl={author.avatar}
            userName={author.displayName}
          />
        )}
        <span className="block text-neutral-6000 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
          {author.displayName}
        </span>
      </Link>
      <>
        <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
          ·
        </span>
        <span className="text-neutral-500 dark:text-neutral-400 font-normal line-clamp-1">
          {date}
        </span>
      </>
    </div>
  );
};

export default PostCardMeta;
