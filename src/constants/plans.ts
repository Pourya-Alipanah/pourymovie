import { Plan } from "@/types/Plan.types";

export const plans : Plan[] = [
    {
        id: 'bronze',
        name: "برنزی",
        price: 30,
        time: 1,
        discountAfterEndPlan: 10,
        icon:'/svg/bronze-plan.svg'
    },
    {
        id: 'silver',
        name: "نقره ای",
        price: 55,
        time: 2,
        discountAfterEndPlan: 10,
        icon:'/svg/silver-plan.svg'
    },
    {
        id: 'gold',
        name: "طلایی",
        price: 80,
        time: 3,
        discountAfterEndPlan: 10,
        icon:'/svg/gold-plan.svg'
    },
    {
        id: 'diamond',
        name: "الماس",
        price: 150,
        time: 6,
        discountAfterEndPlan: 10,
        icon:'/svg/diamond-plan.svg'
    },
]