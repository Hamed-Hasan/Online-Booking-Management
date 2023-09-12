import React, { FC } from "react";
import PostCardMeta from "@/components/PostCardMeta";
import { PostDataType } from "@/data/types";
import Link from "next/link";
import Image from "next/image";

export interface Card3SmallProps {
  className?: string;
  post: PostDataType;
}

const Card3Small: FC<Card3SmallProps> = ({ className = "h-full", post }) => {
  const { title, href, featuredImage } = post;

  return (
    <div
      className={`nc-Card3Small relative flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center ${className}`}
      data-nc-id="Card3Small"
    >
      <Link href={href} className=" absolute inset-0" title={title}></Link>
      <div className="relative space-y-2">
        <PostCardMeta meta={{ ...post }} />
        <h2 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
          <Link href={href} className=" line-clamp-2" title={title}>
            {title}
          </Link>
        </h2>
      </div>

      <Link
        href={href}
        title={title}
        className={`block sm:w-20 flex-shrink-0 relative rounded-lg overflow-hidden mb-5 sm:ml-4 sm:mb-0 group`}
      >
        <div className={`w-full h-0 aspect-w-16 aspect-h-9 sm:aspect-h-16`}>
          <Image
            fill
            className="object-cover group-hover:scale-110 transform transition-transform duration-300"
            src={featuredImage}
            title={title}
            alt=""
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>
      </Link>
    </div>
  );
};

export default Card3Small;
