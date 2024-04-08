import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../button";

export const Newest = () => {

  // todo: fetch newest movies from server and remove this dummy data

  return (
    <div className="grid xl:grid-cols-2 gap-2 w-full px-2">
      {Array.from({ length: 7 }).map((_, i) => (
        <div className="bg-dark rounded-lg w-full sm:max-h-[256px] flex p-4 pr-3 box-border" key={i}>

          <div className="flex flex-col flex-grow gap-3 font-light md:text-sm text-xs">

            <Link href="/movie/blackpanther">
              <h2 className="text-center font-semibold text-lg sm:line-clamp-1" lang="en" style={{
                fontSize: "clamp(0.875rem, 0.7733rem + 0.4651vw, 1rem)"
              }}>Black Panther: Wakanda Forever</h2>
            </Link>

            <div className="pr-1">
              <span className="text-cards-white" lang="en">IMDB: </span>
              <span className="text-success">8.5</span>
            </div>

            <div className="pr-1">
              <span className="text-cards-white">ژانر: </span>
              <span>اکشن، ماجراجویی، علمی تخیلی</span>
            </div>

            <div className="pr-1">
              <span className="text-cards-white">کارگردان: </span>
              <span lang="en">Ryan Coogler</span>
            </div>

            <div className="pr-1">
              <span className="text-cards-white">زبان: </span>
              <span>انگلیسی</span>
            </div>

            <div className="pr-1">
              <span className="text-cards-white">مدت زمان: </span>
              <span>148</span>
              <span className="text-cards-white"> دقیقه</span>
            </div>

            <div className="text-center">
              <Link href="/movie/blackpanther" className="text-center">
                <Button variant="primary" isLink className="md:text-sm text-xs size-auto">پخش آنلاین / دانلود</Button>
              </Link>
            </div>

          </div>

          <div className="flex">
            <Link href="/movie/blackpanther" className="size-full overflow-hidden rounded-lg">
              <Image
                src="/images/blackpanther.jpg"
                width={163}
                height={224}
                alt="blackpanther"
                className="flex rounded-lg max-md:object-cover"
              />
            </Link>
          </div>


        </div>
      ))}
    </div>
  );
};
