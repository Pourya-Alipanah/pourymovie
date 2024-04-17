import React from 'react'
import { SignIn } from "@clerk/nextjs";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  metadataBase: new URL("https://pourymovie.tech/sign-in"),
  title: "Sign in | Poury Movie",
  description: "صفحه ورود | پوری مووی",
  openGraph: {
    type: "website",
    url: "https://pourymovie.tech/sign-in",
    title: "Sign in | Poury Movie",
    description: "صفحه ورود | پوری مووی",
    images: "../../../../images/pourymovie-meta.jpeg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign in | Poury Movie",
    description: "صفحه ورود | پوری مووی",
    images: "../../../../images/pourymovie-meta.jpeg",
  },
  icons: "../../../favicon.ico",
};

const page = () => {
  return (
    <SignIn />
  )
}

export default page