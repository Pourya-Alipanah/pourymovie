import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Copyright } from "./copyright";
import { DetailedInfo } from "./detailed-info";

const SideNavigation = dynamic(() => import("./side-navigation"));

export const Footer: React.FC = () => {
  return (
    <footer
      className="bg-gradient-to-b from-[#131313] via-[#131313eb] to-[#221f1fd4] max-sm:hidden h-[100vh] sticky top-0 overflow-scroll pb-10"
      dir="rtl"
    >
      <div className="container flex flex-col items-center 2xl:gap-14 xl:gap-12 lg:gap-10 md:gap-8 sm:gap-6 text-white  h-full">
        <Link href="/" className="flex items-center justify-center mt-5">
          <Image
            src="/images/pourymovie-logo.png"
            alt="pourymovie"
            width={180}
            height={180}
            className="max-lg:size-[110px] max-xl:size-[140px]"
            priority
          />
        </Link>
        <SideNavigation />

        <DetailedInfo />

        <Copyright />
      </div>
    </footer>
  );
};
