import { Newest } from "@/app/_components/newest";
import { Slider } from "@/app/_components/slider";
import Image from "next/image";

export default function Home() {
  return (
    <div lang="fa" className="flex flex-col items-center pt-10">

      <Slider/>

      <div className="flex items-center w-full gap-2 mt-6 mb-3 pr-1 text-lg">
        <Image src='/svg/new.svg' width={33} height={33} alt="new"/>
        جدیدترین‌ها
      </div>
      
      <Newest/>
    </div>
  );
}
