import { Button } from "@/app/_components/button";
import {
  IconDownloadOutlined,
  IconHeartOutline,
  IconShareOutlined,
} from "@/app/_components/icons";
import Image from "next/image";
import React from "react";

// TODO: fetch movie details from API
// TODO: implement rating component
// TODO: implement share button
// TODO: implement like button add farovite movie to user's list

const movieDetails = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="flex flex-col w-full pt-10 px-4">
      <div className="grid grid-cols-4 max-lg:grid-cols-1 max-lg:justify-items-center w-full">
        <div className="flex">
          <Image
            src={`/images/movies/${params.slug}.jpg`}
            alt="interstellar"
            width={235}
            height={310}
            className="rounded-lg h-[310px] object-cover"
          />
        </div>
        <div className="col-span-3 flex flex-col gap-5 py-2 px-5 max-lg:text-center">
          <h2 className="text-xl">
            میان ستاره ای | <span lang="en">Interstellar</span>
          </h2>

          <ul className="flex items-center gap-8 text-xs text-cards-white list-disc max-lg:justify-center text-nowrap">
            <li>فیلم سینمایی</li>
            <li>
              سال تولید:{" "}
              <span className="text-primary/70" lang="en">
                2014
              </span>
            </li>
            <li>
              <span className="text-primary/70" lang="en">
                149
              </span>{" "}
              دقیقه
            </li>
          </ul>

          <div className="grid grid-cols-6 max-lg:justify-items-center">
            <div className="max-lg:col-span-2 flex flex-col gap-2 text-center items-start max-lg:items-center justify-center text-sm text-cards-white w-full">
              <span lang="en">IMDB: 8.6</span>
              1,234,567
            </div>
            <div className="col-span-5 max-lg:col-span-4 flex flex-col gap-2 text-sm max-md:text-xs font-light max-lg:justify-center sm:text-nowrap">
              <div className="flex items-center gap-2">
                <Image
                  src="/svg/award.svg"
                  alt="award"
                  width={24}
                  height={24}
                />
                <p>برنده 44 جایزه و نامزد شده در 148 بخش</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/svg/medal.svg"
                  alt="medal"
                  width={24}
                  height={24}
                />
                <p>
                  جزء 250 فیلم برتر <span lang="en">IMDb</span> با رتبه{" "}
                  <span className="text-primary/70">53</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-6  max-lg:justify-center">
            <a href="#download-box" className="ml-5">
              <Button variant="primary" className="max-md:text-sm">
                دانلود / پخش
                <IconDownloadOutlined viewBox="0 0 35 35" />
              </Button>
            </a>

            <Button isOutline shape="circle" variant="primary">
              <IconShareOutlined className="!stroke-white" />
            </Button>

            <Button isOutline shape="circle" variant="primary">
              <IconHeartOutline className="!stroke-white" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:w-2/3 w-full items-start mt-8 md:text-sm text-xs max-md:font-light gap-1">
        <span className="text-primary/70">خلاصه داستان : </span>

        <p>
          آینده زمین با بلایا، قحطی و خشکسالی پر شده است. تنها یک راه برای تضمین
          بقای بشر وجود دارد: سفر بین ستاره ای. یک کرم چاله تازه کشف شده در
          دوردست‌های منظومه شمسی به تیمی از فضانوردان اجازه می‌دهد به جایی بروند
          که هیچ‌کس قبلاً نرفته است، سیاره‌ای که ممکن است محیط مناسبی برای حفظ
          حیات انسان داشته باشد....
        </p>
      </div>

      <div className="flex flex-col gap-6 mt-12 lg:w-3/4 w-full">
        <div className="underline underline-offset-[12px] decoration-2 decoration-primary/70 md:text-xl text-lg">
          توضیحات کلی
        </div>
        <div className="grid grid-cols-2 md:text-sm text-xs font-light pr-2 [&>div>div]:line-clamp-1">
          <div className="flex flex-col gap-4">
            <div className="">
              <span className="text-cards-white">ژانر : </span>
              علمی تخیلی
            </div>
            <div className="">
              <span className="text-cards-white">کارگردان : </span>
              کریستوفر نولان
            </div>
            <div className="">
              <span className="text-cards-white">نویسنده : </span>
              جاناتان نولان , کریستوفر نولان
            </div>
            <div className="">
              <span className="text-cards-white">بازیگران : </span>
              متیو مک‌کانهی , آن هاتاوی , جسیکا چستین
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="">
              <span className="text-cards-white">زبان : </span>
              انگلیسی
            </div>
            <div className="">
              <span className="text-cards-white">محصول : </span>
              آمریکا , انگلیس
            </div>
            <div className="">
              <span className="text-cards-white">رده سنی : </span>
              PG-13
            </div>
            <div className="">
              <span className="text-cards-white">زیرنویس : </span>
              دارد
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default movieDetails;
