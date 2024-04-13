"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../button";
import { IconArrowDownOutlined } from "../icons";
import Link from "next/link";

const dummyData = [
  {
    id: 1,
    title: "House of The Dragon",
    titleDescription: "قسمت 8 فصل اول",
    image: "/images/houseDragon.png",
    href: "/movies/house-of-dragon1",
    alt: "houseDragon1",
  },
  {
    id: 2,
    title: "House of The Dragon",
    titleDescription: "قسمت 8 فصل اول",
    image: "/images/houseDragon.png",
    href: "/movies/house-of-dragon2",
    alt: "houseDragon2",
  },
  {
    id: 3,
    title: "House of The Dragon",
    titleDescription: "قسمت 8 فصل اول",
    image: "/images/houseDragon.png",
    href: "/movies/house-of-dragon3",
    alt: "houseDragon3",
  },
  {
    id: 4,
    title: "House of The Dragon",
    titleDescription: "قسمت 8 فصل اول",
    image: "/images/houseDragon.png",
    href: "/movies/house-of-dragon4",
    alt: "houseDragon4",
  },
];

export const ExpectationBanner = () => {
  // TODO: Implement Timer Component
  // TODO: remove dummyData and implement real data fetching
  // TODO: implement notification reminder

  return (
    <div className="flex flex-col gap-4">
      {dummyData.map(({ id, title, titleDescription, image, href, alt }) => (
        <div className="relative" key={id}>
          <Image
            src={image}
            alt={alt}
            width={879}
            height={280}
            className="rounded-[14px] object-cover object-[40%] max-md:object-[30%] max-h-[280px]"
          />

          <div className="flex flex-col px-4 py-5 absolute top-1/2 -translate-y-1/2 right-5 w-1/3 h-[90%] max-h-[226px] max-w-[322px] rounded-lg bg-transparent backdrop-blur-sm overflow-hidden">
            <div className="flex max-md:flex-col gap-2 items-center justify-center border-b-2 border-dashed border-cards-white pb-4">
              <span className="text-center 2xl:text-base max-xl:text-xs max-md:font-light">
                بهت یادآوری کنم؟
              </span>
              <Button
                variant="primary"
                size="small"
                className="text-xs max-lg:p-0 max-lg:font-light max-md:font-extralight text-nowrap"
              >
                یادآوری کن
              </Button>
            </div>
            <div className="flex justify-center items-center h-full text-center 2xl:text-base max-xl:text-xs max-md:font-light">
              Timer Component
            </div>
          </div>

          <Link href={href}>
            <Button
              variant="neutral"
              className="absolute left-3 bottom-3 gap-2 text-xs w-24 h-8 p-0"
            >
              دیدن صفحه
              <IconArrowDownOutlined className="rotate-90 translate-y-[2px]" />
            </Button>
          </Link>

          <div className="flex gap-2 absolute left-3 top-0 text-xs max-w-[50%]">
            <div
              lang="en"
              className="flex justify-center items-center text-center bg-dark h-9 py-4 px-2 rounded-b-lg"
            >
              <p>{title}</p>
            </div>
            <div className="flex justify-center items-center text-center bg-dark h-9 py-4 px-2 rounded-b-lg">
              <p>{titleDescription}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
