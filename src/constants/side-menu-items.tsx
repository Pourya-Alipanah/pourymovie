import { IconCalendar, IconHeartOutline, IconHome, IconPurchaseTag } from "@/app/_components/icons";
import type { NavigationMenuItem } from "@/types/navigation-menu-item.types";

export const menuItems: NavigationMenuItem[] = [
    {
        title: "صفحه اصلی",
        href: "/",
        icon: <IconHome className="max-lg:size-5 max-md:size-4 max-sm:size-7"/>
    },
    {
        title: "مورد علاقه" ,
        href: "/favorite",
        icon: <IconHeartOutline className="max-lg:size-5 max-md:size-4 max-sm:size-8"/>
    },
    {
        title: "مورد انتظار" ,
        href: "/expectation",
        icon: <IconCalendar className="max-lg:size-5 max-md:size-4 max-sm:size-8"/>
    },
    {
        title: "خرید اشتراک" ,
        href: "/buy-subscription",
        icon: <IconPurchaseTag className="max-lg:size-5 max-md:size-4 max-sm:size-8"/>
    },
]