import React from "react";
import { IconSearch } from "../icons";

export const GlobalSearch: React.FC = () => {
  return (
    <div className="w-[70%] h-[40px] flex items-center relative rounded-3xl pr-5 bg-gradient-to-b from-[#3f3f3f] via-[#303030] to-[#221f1f80] text-white">
      <label htmlFor="globalSearch" className="cursor-pointer">
        <IconSearch color="#e3e3e3b2" />
      </label>
      <input
        type="text"
        name="globalSearch"
        id="globalSearch"
        className="size-full rounded-l-3xl bg-transparent outline-none pr-2 text-sm placeholder:text-sm"
        placeholder="جستجوی فیلم، سریال و ..."
      />
    </div>
  );
};
