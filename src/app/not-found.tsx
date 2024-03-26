import Image from 'next/image';
import React from 'react'
import { Button } from './_components/button';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='w-full h-[80vh] flex flex-col justify-center items-center gap-2'>
        <Image src='/images/notFound.svg' width={208} height={208} alt='not found' className='pointer-events-none'/>
        <h1 className='text-white text-2xl mt-2'>صفحه مورد نظر یافت نشد</h1>
        <Button variant='primary' isLink>
          <Link href='/'>بریم صفحه اصلی</Link>
        </Button>
    </div>
  )
}
export default NotFound;