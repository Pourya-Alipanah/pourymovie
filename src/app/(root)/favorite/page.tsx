import { FilmCard } from "@/app/_components/film-card";
import Image from "next/image";
import React from "react";

const Favorite = () => {
  // TODO: fetch data from backend and pass it to FilmCard component

  // TODO: create modal for delete favorite item and clear list

  return (
    <>
      <div className="flex items-center mt-7 pr-8 justify-between">
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/svg/heart-filled.svg"
            width={26}
            height={26}
            alt="favorite-icon"
          />
          مورد علاقه‌ها
        </div>
      </div>
      <div className="flex items-center justify-end pl-8 mb-2">
        <button className="flex items-center gap-1 text-sm font-light">
          پاک کردن لیست
          <Image
            src="/svg/trash.svg"
            width={18}
            height={18}
            alt="favorite-icon"
          />
        </button>
      </div>
      <div className="grid xl:grid-cols-2 gap-2 w-full px-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <FilmCard key={i} placementPage="favorite" />
        ))}
      </div>
    </>
  );
};

export default Favorite;
