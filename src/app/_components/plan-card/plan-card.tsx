import { Plan } from "@/types/Plan.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../button";
import classNames from "classnames";

const textColorClasses: Record<string, string> = {
  bronze: "text-[#A97142]",
  silver: "text-[#AAA9AD]",
  gold: "text-[#D4AF37]",
  diamond: "text-[#B9F2FF]/90",
};

const btnColorClasses: Record<string, string> = {
  bronze: "hover:bg-[#A97142] hover:border-[#A97142] hover:outline-[#A97142]",
  silver: "hover:bg-[#AAA9AD] hover:border-[#AAA9AD] hover:outline-[#AAA9AD]",
  gold: "hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:outline-[#D4AF37]",
  diamond:
    "hover:bg-[#B9F2FF]/90 hover:border-[#B9F2FF]/90 hover:outline-[#B9F2FF]/90",
};

export const PlanCard: React.FC<Plan> = ({
  id,
  name,
  price,
  time,
  icon,
  discountAfterEndPlan,
}) => {
  const textClasses = classNames({
    [textColorClasses[id]]: id,
  });

  const btnClasses = classNames({
    [btnColorClasses[id]]: id,
  });

  return (
    <div className="flex flex-col items-center gap-4 py-3 px-6 max-w-[250px] relative bg-dark/70 backdrop-blur-sm rounded-lg">
      <span className="absolute flex gap-[3px] items-center justify-center rounded-md left-1/2 -translate-x-1/2 h-[30px] bg-dark/70 backdrop-blur-sm -top-[30px] p-2">
        <span className={textClasses}>{price}</span> هزار تومان
      </span>
      <Image
        src={icon}
        alt={name}
        width={36}
        height={36}
        className="pointer-events-none"
      />
      <h2>پلن <span className={textClasses}>{name}</span></h2>
      <div className="text-center text-sm font-light">
        <p>
          به مدت{" "}
          <span className={`underline ${textClasses} font-normal`}>{time}</span>{" "}
          ماه میتوانید بدون محدودیت از سایت دانلود داشته باشید.
        </p>
      </div>
      <div className="text-center text-sm font-light">
        <p>
          بعد از اتمام اشتراک میتوانید با تخفیف{" "}
          <span className={`underline ${textClasses} font-normal`}>
            {discountAfterEndPlan}
          </span>{" "}
          درصدی اقدام به خرید پلن جدید کنید.
        </p>
      </div>
      <Link href="/buy-subscription">
        <Button className={`text-sm ${btnClasses}`}>خرید اشتراک</Button>
      </Link>
    </div>
  );
};
