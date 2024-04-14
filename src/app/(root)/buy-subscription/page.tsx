import { PlanCardList } from '@/app/_components/plan-card-list'
import { plans } from '@/constants/plans'
import React from 'react'

const BuySubscription = () => {
  return (
    <div className="pt-16 px-7">
        <PlanCardList plans={plans} />
    </div>
  )
}

export default BuySubscription