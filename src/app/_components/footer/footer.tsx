import Image from 'next/image'
import React from 'react'
import SideNavigation from './side-navigation'
import { DetailedInfo } from './detailed-info'
import { Copyright } from './copyright'
import Link from 'next/link'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#131313] via-[#131313eb] to-[#221f1fd4] max-sm:hidden" dir="rtl">
        <div className="container h-screen flex flex-col items-center gap-14 text-white sticky top-0">
            <Link href="/" className="flex items-center justify-center mt-5">
                <Image src="/images/pourymovie-logo.png" alt='pourymovie' width={180} height={180} className='max-lg:size-[110px] max-xl:size-[140px]'/>
            </Link>
            <SideNavigation/>

            <DetailedInfo/>

            <Copyright/>
        </div>
    </footer>
  )
}