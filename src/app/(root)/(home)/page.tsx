import { FilmCard } from "@/app/_components/film-card";
import { Slider } from "@/app/_components/slider";
import Image from "next/image";

export default function Home() {

  // TODO: fetch data from backend and pass it to FilmCard component

  return (
    <div lang="fa" className="flex flex-col items-center pt-10">
      <Slider />

      <div className="flex items-center w-full gap-2 mt-6 mb-3 pr-1 text-lg">
        <Image src="/svg/new.svg" width={33} height={33} alt="new" />
        جدیدترین‌ها
      </div>
      <div className="grid xl:grid-cols-2 gap-2 w-full px-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <FilmCard key={i} placementPage="main" />
        ))}
      </div>
    </div>
  );
}
