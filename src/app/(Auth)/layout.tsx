import React from "react";
import type { Metadata } from "next";
import ClientClerkProvider from "@/providers/client-clerk-provider";
import { Figtree } from "next/font/google";
import "../globals.css";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loading } from "../_components/loading";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pourymovie.tech/sign-in"),
  title: "Auth | Poury Movie",
  description: "صفحه ورود و ثبت نام | پوری مووی",
  openGraph: {
    type: "website",
    url: "https://pourymovie.tech/sign-in",
    title: "Auth | Poury Movie",
    description: "صفحه ورود و ثبت نام | پوری مووی",
    images: "../../images/pourymovie-meta.jpeg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auth | Poury Movie",
    description: "صفحه ورود و ثبت نام | پوری مووی",
    images: "../../images/pourymovie-meta.jpeg",
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
      <html lang="en" className={`${figtree.variable}`}>
        <body className="sm:grid w-full h-[100vh] relative bg-[url(/images/main-background.jpg)] bg-center bg-cover bg-no-repeat">
          <main className="bg-[#221f1fd4] w-full h-screen grid place-items-center overflow-y-scroll">
            <ClerkLoading>
              <Loading size="large" type="balls" variant="primary" />
            </ClerkLoading>
            <ClerkLoaded>{children}</ClerkLoaded>
          </main>
        </body>
      </html>
    </ClientClerkProvider>
  );
}
