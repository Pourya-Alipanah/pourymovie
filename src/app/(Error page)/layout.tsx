import React from "react";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import { clerkCustomTheme } from '@/constants/clerk-custom-theme';
import localFont from "next/font/local";

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
  metadataBase: new URL("https://pourymovie.tech/404"),
  title : '404 | Poury Movie',
  description:'اوپس ! دنبال چی میگشتی؟نتونستیم پیداش کنیم',
  openGraph: {
    type: "website",
    url: "https://pourymovie.tech/404",
    title : '404 | Poury Movie',
    description:'اوپس ! دنبال چی میگشتی؟نتونستیم پیداش کنیم',
    images: "../../images/pourymovie-meta.jpeg",
  },
  twitter: {
    card: "summary_large_image",
    title : '404 | Poury Movie',
    description:'اوپس ! دنبال چی میگشتی؟نتونستیم پیداش کنیم',
    images: "../../images/pourymovie-meta.jpeg",
  },
  icons: "../favicon.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={clerkCustomTheme}>
      <html className={`${figtree.variable} ${vazirMatn.variable}`}>
        <body className="sm:grid w-full h-[100vh] relative bg-[url(/images/main-background.jpg)] bg-center bg-cover bg-no-repeat">

          <main className="bg-[#221f1ff2] w-full h-screen grid place-items-center">
            {children}
          </main>

        </body>
      </html>
    </ClerkProvider>
  );
}
