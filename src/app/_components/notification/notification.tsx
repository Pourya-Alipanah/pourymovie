import React from 'react'
import { Button } from '../button'
import { IconNotification } from '../icons'

export const Notification = () => {
  return (
    <Button shape='circle' isOutline variant='primary' size='normal' className='max-sm:hidden'>
      <IconNotification className='!stroke-white max-lg:size-5 max-md:size-4'/>
    </Button>
  )
}
