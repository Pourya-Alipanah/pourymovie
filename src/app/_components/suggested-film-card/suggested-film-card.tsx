import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FilmCard } from "./film-card.types";

// todo: remove Partial and dummy data
export const SuggestedFilmCard: React.FC<Partial<FilmCard>> = ({
  image = "/images/got.png",
  rating = 9.3,
  title = "Game of Thrones",
  year = 2011,
  href = "/got",
}) => {
  return (
    <Link
      href={href}
      className="flex relative mb-2 rounded-[11px] group overflow-hidden"
      lang="en"
    >
      <Image src={image} alt="got" width={190} height={235} />
      <div className="absolute rounded-b-[11px] bottom-0 bg-[#000000b3] w-full h-1/3 group-hover:h-full group-hover:rounded-t-[11px] transition-all duration-500 ease-in-out flex flex-col justify-center items-center backdrop-blur-[2px] text-center max-md:pt-4">

        <span className="text-white text-lg max-xl:text-base max-lg:text-xs max-md:text-[10px] font-bold">
          {title}
        </span>

        <span className="text-primary-badge text-sm max-lg:text-xs font-light max-md:text-[8px]">
          IMDB: {rating}
        </span>

        <span className="text-white transition-all duration-500 max-lg:opacity-0 text-xs max-md:text-[8px] font-extralight max-lg:relative max-lg:-bottom-full max-lg:group-hover:bottom-0 max-lg:group-hover:opacity-100">
          {year}
        </span>
      </div>
    </Link>
  );
};
