import React from "react";
import { IconGithub, IconLinkedin } from "../icons";

export const DetailedInfo: React.FC = () => {
  return (
    <div className="flex flex-col w-full">

      <div className="flex flex-col items-start pr-10">

        <p className="flex items-center justify-center mb-2 max-lg:text-sm">
          <span className="list-item text-primary/70 text-3xl max-lg:text-2xl" />
          ارتباط با ما
        </p>

        <div className="flex justify-center items-center flex-wrap w-full gap-3 pl-10 max-lg:text-sm max-md:text-xs">
          <a href="https://github.com/Pourya-Alipanah" target="_blank" className="flex items-center text-nowrap">
            گیت هاب
            <IconGithub color="#8685efb3" />
          </a>
          <a href="https://www.linkedin.com/in/pourya-alipanah/" target="_blank" className="flex items-center">
            لینکدین
            <IconLinkedin color="#8685efb3"/>
          </a>
        </div>
      </div>
    </div>
  );
};
