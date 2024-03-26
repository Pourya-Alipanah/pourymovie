import React from "react";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import { title, description } from "@/constants/metaTagInfo";
import "./globals.css";
import { Footer } from "./_components/footer";
import { GlobalSearch } from "./_components/global-search";
import { Notification } from "./_components/notification";
import { AccountSection } from "./_components/account-section";
import { IconArrowDownOutlined } from "./_components/icons";
import { SuggestedFilms } from "./_components/suggested-films";
import { MobileFooter } from "./_components/mobile-footer";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

const vazirMatn = localFont({
  src: [
    {
      path: "../../public/fonts/vazirMatn/VazirmatnThin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazirMatn/VazirmatnLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazirMatn/VazirmatnRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazirMatn/VazirmatnSemiBold.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazirMatn/VazirmatnBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazirMatn/VazirmatnBlack.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-vazir-matn",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pourymovie.tech"),
  title,
  description,
  openGraph: {
    type: "website",
    url: "https://pourymovie.tech",
    title,
    description,
    images: "../../images/pourymovie-meta.jpeg",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: "../../images/pourymovie-meta.jpeg",
  }
  }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" className={`${figtree.variable} ${vazirMatn.variable}`}>
      <body className="sm:grid sm:grid-cols-[1fr_3fr_1fr] sm:grid-rows-1 relative bg-[url(/images/main-background.jpg)] bg-center bg-cover bg-no-repeat ">

        <Footer/>

        <main className="bg-[#221f1fd4] flex flex-col px-4 py-10">
          <div className="flex items-center justify-around">
            <GlobalSearch/>
            <Notification/>
          </div>
          {children}
        </main>

        <aside className="bg-[#221f1fd4] flex flex-col items-center py-10">
          <AccountSection/>

          <div className="flex items-center justify-between mt-10 mb-6 text-white font-light">
            <span className="max-lg:text-sm max-md:text-xs">فیلم های پیشنهادی</span>
            <span>
              <IconArrowDownOutlined className="max-lg:size-5 max-md:size-4"/>
            </span>
          </div>

          <SuggestedFilms/>

        </aside>

        <MobileFooter/>

      </body>
    </html>
  );
}
