import { Icon } from "@iconify/react";
import { ReactNode } from "react";


export type FooterMenuProps = {
  header: string;
  list: { label: string; url: string, icon?: ReactNode }[];
};


export const _footerListMenu: FooterMenuProps[] = [
  {
    header: "quick links",
    list: [
      { label: "about christie", url: "/about" },
      { label: "services", url: "/blog" },
      { label: "blog", url: "/map" },
      { label: "testimonials", url: "/faq" },
      { label: "contact", url: "/contact" },
    ],
  },
  {
    header: "policy",
    list: [
      { label: "privacy policy", url: "/agents" },
      { label: "terms of service", url: "/listings" },
      { label: "disclaimer", url: "/listings" },
    ],
  },
  {
    header: "services",
    list: [
      { label: "1:1 coaching", url: "/agents" },
      { label: "couples coaching", url: "/listings" },
      { label: "workshop", url: "/listings" },
      { label: "online courses", url: "/office-space" },
    ],
  },
  {
    header: "get in touch",
    list: [
      { label: "book a session", url: "/agents", icon: <Icon icon="uis:calender" className="text-[16px] text-primary" /> },
      { label: "hello@theresetlove.com", url: "/listings", icon: <Icon icon="tabler:mail-filled" className="text-[16px] text-primary" /> },
    ],
  },
];