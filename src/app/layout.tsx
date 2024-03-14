import React from "react";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import { title, description } from "@/constants/metaTagInfo";
import "./globals.css";
import { Footer } from "./_components/footer";

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
      <body className="grid grid-cols-[18rem_1fr_18rem] grid-rows-1 relative bg-[url(/images/main-background.jpg)] bg-center bg-cover bg-no-repeat h-[200vh]"> {/* TODO: remove h-[200vh] */}

        <Footer/>

        <main className="bg-[#221f1fd4]">{children}</main>

        <aside className="bg-[#221f1fd4]"></aside>

      </body>
    </html>
  );
}
