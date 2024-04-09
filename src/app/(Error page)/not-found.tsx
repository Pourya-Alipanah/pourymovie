import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/app/_components/button';

const NotFound = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-1">
      <h1 className="text-white text-2xl max-sm:text-lg mt-2 relative top-14 max-sm:top-8">صفحه مورد نظر یافت نشد</h1>
      <div className="relative">
        <Image
          src="/images/notFound.png"
          width={608}
          height={608}
          alt="not found"
          className="pointer-events-none"
          priority
        />
        <Button variant="primary" isLink className='absolute bottom-14 max-sm:bottom-11 left-1/2 -translate-x-1/2 z-10 max-sm:text-xs'>
          <Link href="/">بریم صفحه اصلی</Link>
        </Button>
      </div>
    </div>
  )
}

export default NotFound