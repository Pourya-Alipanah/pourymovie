import { ExpectationBanner } from "@/app/_components/expectation-banner";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://pourymovie.tech/expectation"),
  title: "Expectation | Poury Movie",
  description: "صفحه فیلم های مورد انتظار | پوری مووی",
  openGraph: {
    type: "website",
    url: "https://pourymovie.tech/expectation",
    title: "Expectation | Poury Movie",
    description: "صفحه فیلم های مورد انتظار | پوری مووی",
    images: "../../../../images/pourymovie-meta.jpeg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expectation | Poury Movie",
    description: "صفحه فیلم های مورد انتظار | پوری مووی",
    images: "../../../../images/pourymovie-meta.jpeg",
  },
  icons: "../../../favicon.ico",
};

const Expectation = () => {
  return (
    <div className="flex w-full justify-center pt-10">
      <ExpectationBanner />
    </div>
  );
};

export default Expectation;
