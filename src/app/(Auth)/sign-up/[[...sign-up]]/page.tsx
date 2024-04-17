import React from 'react'
import { SignUp } from "@clerk/nextjs";
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL("https://pourymovie.tech/sign-up"),
  title: "Sign up | Poury Movie",
  description: "صفحه ثبت نام | پوری مووی",
  openGraph: {
    type: "website",
    url: "https://pourymovie.tech/sign-up",
    title: "Sign up | Poury Movie",
    description: "صفحه ثبت نام | پوری مووی",
    images: "../../../../images/pourymovie-meta.jpeg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign up | Poury Movie",
    description: "صفحه ثبت نام | پوری مووی",
    images: "../../../../images/pourymovie-meta.jpeg",
  },
  icons: "../../../favicon.ico",
};

const page = () => {
  return (
    <SignUp />
  )
}

export default page