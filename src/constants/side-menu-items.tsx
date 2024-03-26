import { IconCalendar, IconHeartOutline, IconHome, IconPurchaseTag } from "@/app/_components/icons";
import type { NavigationMenuItem } from "@/types/navigation-menu-item.types";

export const menuItems: NavigationMenuItem[] = [
    {
        title: "صفحه اصلی",
        href: "/",
        icon: <IconHome/>
    },
    {
        title: "مورد علاقه" ,
        href: "/favorite",
        icon: <IconHeartOutline/>
    },
    {
        title: "مورد انتظار" ,
        href: "/expectation",
        icon: <IconCalendar/>
    },
    {
        title: "خرید اشتراک" ,
        href: "/buy-subscription",
        icon: <IconPurchaseTag/>
    },
]