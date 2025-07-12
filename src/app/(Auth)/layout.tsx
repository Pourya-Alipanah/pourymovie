import authPic from "@public/images/authPic.jpeg";
import { Figtree } from "next/font/google";
import Image from "next/image";
import React from "react";

import "../globals.css";

import { Providers } from "@/providers";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en" className={`${figtree.variable}`}>
        <body className="sm:grid w-full h-[100vh] relative">
          <Image
            src={"/images/main-background.jpg"}
            alt="background-image"
            fill
            priority
            className="object-cover object-center"
          />
          <main className="bg-[#221f1fd4] relative z-10 w-full h-screen grid place-items-center overflow-y-scroll">
            <section className="flex min-w-[800px] max-w-[800px] py-10 min-h-[400px] rounded-lg bg-dark/80">
              <div className="flex justify-center items-center w-[350px] relative">
                <Image
                  src={authPic}
                  width={320}
                  style={{
                    borderRadius: "12px",
                  }}
                  alt="auth pic"
                />
              </div>
              {children}
            </section>
          </main>
        </body>
      </html>
    </Providers>
  );
}
