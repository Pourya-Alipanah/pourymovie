"use client";
import { menuItems } from "@/constants/side-menu-items";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideNavigation: React.FC = () => {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col items-center w-full gap-3">

      {menuItems.map(({title , href , icon}) => {

        const isActive = pathname === href;

        return (

          <li key={`navigation-${href}`} className="h-[3rem] w-full">

            <Link
              href={href}
              className={`flex items-center size-full hover:bg-primary-focus/40 rounded-l-[4px] transition-colors max-lg:text-sm ${
                isActive &&
                "border-l-8 border-primary-focus bg-primary-focus/40"
              }`}
            >

              <span className="w-12 h-full flex items-center justify-center">
                {icon}
              </span>

              {title}

            </Link>

          </li>
        );

      })}

    </ul>
  );
};

export default SideNavigation;
