import React from "react";
import { Button } from "../button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export const AccountSection: React.FC = () => {
  return (
    <div className="flex justify-center items-center gap-3 min-h-[48px] max-sm:hidden">
      <SignedOut>
        <Link href="/sign-in">
          <Button
            isOutline
            variant="primary"
            className="rounded-2xl text-sm max-lg:text-xs max-md:hidden"
          >
            ورود
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button
            variant="primary"
            className="rounded-2xl text-sm max-lg:text-xs max-md:hidden"
          >
            ثبت نام
          </Button>
        </Link>
        <Link href="/sign-in">
          <Button
            variant="primary"
            className="rounded-2xl text-sm max-md:text-[10px] max-md:block hidden"
          >
            ورود یا ثبت نام
          </Button>
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton showName />
      </SignedIn>
    </div>
  );
};
