import React from 'react'
import MobileNavigation from './mobile-navigation'

export const MobileFooter = () => {
  return (
    <div className='fixed bottom-1 left-[50%] -translate-x-[50%] w-[98%] h-[60px] bg-dark text-white flex flex-row justify-center items-center rounded-2xl sm:hidden' dir="rtl">
        <MobileNavigation/>
    </div>
  )
}
