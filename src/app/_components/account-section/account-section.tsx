import React from 'react'
import { Button } from '../button'

export const AccountSection: React.FC = () => {
  return (
    <div className='flex justify-center items-center gap-3'>
        <Button isOutline variant='primary' className='rounded-2xl text-sm max-lg:text-xs max-md:hidden'>ورود</Button>
        
        <Button variant='primary' className='rounded-2xl text-sm max-lg:text-xs max-md:hidden'>ثبت نام</Button>

        <Button variant='primary' className='rounded-2xl text-sm max-md:text-[10px] max-md:block hidden'>ورود یا ثبت نام</Button>
    </div>
  )
}
