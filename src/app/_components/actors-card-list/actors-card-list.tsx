import React from "react";
import { ActorsCardsProps } from "../actors-card/actors-card.types";
import { IconArrowDownOutlined } from "../icons";
import { ActorsCards } from "../actors-card/actors-card";

type ActorsCardListProps = {
    actor: ActorsCardsProps[]
}

export const ActorsCardList: React.FC<ActorsCardListProps> = ({
  actor
}) => {
  return (
    <>
      <div className="flex items-center justify-between mt-10 mb-6 text-white font-light">
        <span className="max-lg:text-sm max-md:text-xs text-nowrap">
          ستارگان
        </span>
        <span>
          <IconArrowDownOutlined className="max-lg:size-5 max-md:size-4" />
        </span>
      </div>
      <div className="flex flex-col gap-7 max-sm:flex-row max-sm:flex-wrap max-sm:justify-center w-full items-center px-4">
        {actor.map(actor=>(
            <ActorsCards key={actor.id} {...actor} />
        ))}
      </div>
    </>
  );
};
