"use client";
import { menuItems } from "@/constants/side-menu-items";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MobileNavigation: React.FC = () => {
  const pathname = usePathname();
  return (
    <ul className="flex items-center justify-evenly w-full gap-3">

      {menuItems.map(({href , icon}) => {

        const isActive = pathname === href;

        return (

          <li key={`navigation-${href}`} className="w-[55px] h-[45px]">

            <Link
              href={href}
              className={`flex items-center justify-center size-full box-content hover:bg-primary-focus/40 rounded-[8px] transition-colors max-lg:text-sm ${
                isActive &&
                "border-b-4 border-primary-focus bg-primary-focus/40"
              }`}
            >

              <span className="h-full flex items-center justify-center">
                {icon}
              </span>

            </Link>

          </li>
        );

      })}

    </ul>
  );
};

export default MobileNavigation;
