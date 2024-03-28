"use client";
import { menuItems } from "@/constants/side-menu-items";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IconLogin } from "../icons";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const MobileNavigation: React.FC = () => {
  const pathname = usePathname();
  return (
    <ul className="flex items-center justify-evenly w-full gap-3">
      {menuItems.map(({ href, icon }) => {
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

      <li
        key={`navigation-sign-in`}
        className="w-[55px] h-[45px] flex items-center justify-center size-full box-content"
      >
        <SignedOut>
          <Link
            href="/sign-in"
            className={`flex items-center justify-center size-full hover:bg-primary-focus/40 rounded-[8px] transition-colors`}
          >
            <span className="h-full flex items-center justify-center">
              <IconLogin
                className="max-sm:size-7"
                viewBox="0 0 50 50"
                strokeWidth={3}
              />
            </span>
          </Link>
        </SignedOut>
        <SignedIn>
          <span className="h-full flex items-center justify-center">
            <UserButton />
          </span>
        </SignedIn>
      </li>
    </ul>
  );
};

export default MobileNavigation;
