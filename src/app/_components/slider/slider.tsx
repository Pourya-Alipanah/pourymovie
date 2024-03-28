'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import Link from 'next/link';


const dummyData = [
    {
        id: 1,
        image: '/images/houseDragon.png',
        href: '/movies/house-of-dragon1',
        alt: 'houseDragon1'
    },
    {
        id: 2,
        image: '/images/houseDragon.png',
        href: '/movies/house-of-dragon2',
        alt: 'houseDragon2'
    },
    {
        id: 3,
        image: '/images/houseDragon.png',
        href: '/movies/house-of-dragon3',
        alt: 'houseDragon3'
    },
    {
        id: 4,
        image: '/images/houseDragon.png',
        href: '/movies/house-of-dragon4',
        alt: 'houseDragon4'
    },
]

export const Slider = () => {
  return (
    <Swiper
      spaceBetween={2}
      slidesPerView={1}
      autoplay={{ delay: 8000 }}
      modules={[Autoplay]}
      className='rounded-[14px] h-[280px]'
    >
        {dummyData.map(({ id, image, href , alt})=>(

            <SwiperSlide className='!flex !w-full' key={id}>
                <Link href={href} className='w-full flex'>
                    <Image src={image} 
                        alt={alt}
                        width={879}
                        height={280}
                        className='rounded-[14px] object-cover object-[40%] max-md:object-[30%]'
                    />
                </Link>
            </SwiperSlide>

        ))}
    </Swiper>
  );
};
