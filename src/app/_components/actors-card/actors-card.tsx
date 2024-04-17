import Image from "next/image";
import React from "react";
import { ActorsCardsProps } from "./actors-card.types";

export const ActorsCards: React.FC<ActorsCardsProps> = ({
  name,
  RoleInFilm,
  imageUrl,
}) => {
  return (
    <div className="grid grid-cols-4 max-lg:grid-cols-1 items-center gap-3" dir="ltr" lang="en">
      <div className="flex items-center justify-center">
        <Image
          src={imageUrl}
          alt={name}
          width={62}
          height={62}
          className="rounded-full size-[40px] object-cover"
        />
      </div>
      <div className="lg:col-span-3 flex flex-col gap-2 text-xs font-light max-lg:text-center">
        <p>{name}</p>
        <p className="text-cards-white">{RoleInFilm}</p>
      </div>
    </div>
  );
};
