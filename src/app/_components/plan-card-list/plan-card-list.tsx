import { Plan } from "@/types/Plan.types";
import React from "react";
import { PlanCard } from "../plan-card/plan-card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";

type PlanCardProps = {
  plans: Plan[];
};

// TODO: link cards to buy subscription page and activate button

export const PlanCardList: React.FC<PlanCardProps> = ({ plans }) => {
  return (
    <div className="grid xl:grid-cols-6 lg:grid-cols-4 grid-cols-2 w-full gap-x-4 gap-y-10 justify-items-center [&>div]:col-span-2 xl:[&>div:last-child]:col-start-4 lg:[&>div:last-child]:col-start-2 xl:[&>div:nth-last-child(2)]:col-start-2">
      <div className="flex flex-col items-center gap-4 py-3 px-6 max-w-[250px] relative bg-dark/70 backdrop-blur-sm rounded-lg">
        <span className="absolute flex gap-[3px] items-center justify-center rounded-md left-1/2 -translate-x-1/2 h-[30px] bg-dark/70 backdrop-blur-sm -top-[30px] p-2 text-[#8685EF]">
          رایگان
        </span>
        <Image
          src="/svg/free-plan.svg"
          alt="پلن رایگان"
          width={36}
          height={36}
          className="pointer-events-none"
        />
        <h2>
          پلن <span className="text-[#8685EF]">رایگان</span>
        </h2>
        <div className="text-center text-sm font-light">
          <p>
            به مدت{" "}
            <span className={`underline text-[#8685EF] font-normal`}>2</span>{" "}
            روز میتوانید بدون محدودیت از سایت دانلود داشته باشید.
          </p>
        </div>
        <div className="text-center text-sm font-light">
          <p>
            به مدت محدود می توانید از سایت استفاده کنید و بعد از آن باید اشتراک
            تهیه کنید.
          </p>
        </div>
        <Link href="/buy-subscription">
          <Button
            className={`text-sm hover:bg-[#8685EF] hover:border-[#8685EF] hover:outline-[#8685EF]`}
          >
            فعالسازی
          </Button>
        </Link>
      </div>
      {plans.map((plan) => (
        <PlanCard key={plan.id} {...plan} />
      ))}
    </div>
  );
};
