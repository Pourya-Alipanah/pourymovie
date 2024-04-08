import React from 'react'
import dynamic from 'next/dynamic'

const MobileNavigation = dynamic(() => import('./mobile-navigation'))

export const MobileFooter = () => {
  return (
    <div className='fixed bottom-1 z-50 left-[50%] -translate-x-[50%] w-[98%] h-[60px] bg-dark text-white flex flex-row justify-center items-center rounded-2xl sm:hidden' dir="rtl">
        <MobileNavigation/>
    </div>
  )
}
