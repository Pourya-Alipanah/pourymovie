import { PlanCardList } from '@/app/_components/plan-card-list'
import { plans } from '@/constants/plans'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL("https://pourymovie.tech/buy-subscription"),
  title: "Buy Subscription | Poury Movie",
  description: "صفحه خرید اشتراک | پوری مووی",
  openGraph: {
    type: "website",
    url: "https://pourymovie.tech/buy-subscription",
    title: "Buy Subscription | Poury Movie",
    description: "صفحه خرید اشتراک | پوری مووی",
    images: "../../../../images/pourymovie-meta.jpeg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Subscription | Poury Movie",
    description: "صفحه خرید اشتراک | پوری مووی",
    images: "../../../../images/pourymovie-meta.jpeg",
  },
  icons: "../../../favicon.ico",
};

const BuySubscription = () => {
  return (
    <div className="pt-16 px-7">
        <PlanCardList plans={plans} />
    </div>
  )
}

export default BuySubscription