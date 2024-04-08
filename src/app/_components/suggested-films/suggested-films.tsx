import React from "react";
import { SuggestedFilmCard } from "../suggested-film-card";
import { IconArrowDownOutlined } from "../icons";

export const SuggestedFilms: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-between mt-10 mb-6 text-white font-light">
        <span className="max-lg:text-sm max-md:text-xs text-nowrap">فیلم های پیشنهادی</span>
        <span>
          <IconArrowDownOutlined className="max-lg:size-5 max-md:size-4" />
        </span>
      </div>
      <div className="w-3/4 flex flex-col items-center max-sm:flex-row max-sm:flex-wrap max-sm:flex-[1fr,1fr] max-sm:justify-center max-sm:w-full max-sm:gap-3">
        <SuggestedFilmCard />
        <SuggestedFilmCard />
        <SuggestedFilmCard />
        <SuggestedFilmCard />
        <SuggestedFilmCard />
      </div>
    </>
  );
};
