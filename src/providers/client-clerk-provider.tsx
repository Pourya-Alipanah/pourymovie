'use client'

import { clerkCustomTheme } from '@/constants/clerk-custom-theme'
import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

type ClerkProviderProps ={
  children: React.ReactNode
}

const ClientClerkProvider: React.FC<ClerkProviderProps> = ({children}) => {
  return (
    <ClerkProvider appearance={clerkCustomTheme}>
      {children}
    </ClerkProvider>
  )
}

export default ClientClerkProvider