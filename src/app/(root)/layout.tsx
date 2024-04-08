import React from "react";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

import { title, description } from "@/constants/metaTagInfo";
import { Footer } from "../_components/footer";
import { GlobalSearch } from "../_components/global-search";
import { Notification } from "../_components/notification";
import { AccountSection } from "../_components/account-section";
import { SuggestedFilms } from "../_components/suggested-films";
import { MobileFooter } from "../_components/mobile-footer";

import "../globals.css";
import ClientClerkProvider from "@/providers/client-clerk-provider";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

const vazirMatn = localFont({
  src: [
    {
      path: "../../../public/fonts/vazirMatn/VazirmatnThin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../../public/fonts/vazirMatn/VazirmatnLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/vazirMatn/VazirmatnRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/vazirMatn/VazirmatnSemiBold.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/vazirMatn/VazirmatnBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/vazirMatn/VazirmatnBlack.woff2",
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
    images: "../../../images/pourymovie-meta.jpeg",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: "../../../images/pourymovie-meta.jpeg",
  },
  icons: "../favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientClerkProvider>
      <html lang="fa" className={`${figtree.variable} ${vazirMatn.variable}`}>
        <body className="relative">
          <Image
            src={"/images/main-background.jpg"}
            alt="background-image"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="sm:grid sm:grid-cols-[0.7fr_3fr_0.9fr] sm:grid-rows-1 max-sm:flex max-sm:flex-col-reverse relative">
            <aside
              className="bg-[#221f1fd4] flex flex-col items-center py-10 max-sm:pb-[80px]"
              dir="rtl"
            >
              <AccountSection />

              <SuggestedFilms />

            </aside>

            <main
              className="bg-[#221f1fd4] flex flex-col pr-4 py-10 max-sm:pl-4 max-sm:pt-5"
              dir="rtl"
            >
              <div className="flex items-center justify-around">
                <GlobalSearch />
                <Notification />
                <Link href="/" className="sm:hidden">
                  <Image
                    src="/images/pourymovie-logo.png"
                    alt="logo"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
              {children}
            </main>

            <Footer />

            <MobileFooter />
          </div>
        </body>
      </html>
    </ClientClerkProvider>
  );
}
