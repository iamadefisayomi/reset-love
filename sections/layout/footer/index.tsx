"use client"

import React, { memo, useMemo, ReactNode } from "react";
import Logo from "@/components/Logo";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { _footerListMenu, FooterMenuProps } from "./_footerListMenu";


const Footer: React.FC = () => {
  const memoizedFooterListMenu = useMemo(() => _footerListMenu, []);

  return (
    <footer className="w-full bg-[#242B3A] p-2 py-8 flex items-center justify-center">
      <div className="w-full max-w-7xl flex flex-col gap-4">

        <div className="w-full flex items-center justify-between gap-4 border-b border-b-gray-600 pb-4">
          <Logo isPlain />

          <div className="flex items-center gap-2">
            <SocialIcons icon='mdi:instagram' />
            <SocialIcons icon='ic:outline-tiktok' />
            <SocialIcons icon='pajamas:twitter' />
            <SocialIcons icon='formkit:linkedin' />
            <SocialIcons icon='ri:facebook-fill' />
          </div>
        </div>

        <div className="w-full flex items-start gap-20">
            <div className="flex flex-col items-start gap-3 w-full max-w-[300px]">
              <h2 className="font-semibold text-lg capitalize text-pink">join newsletter</h2>
              <div className="relative bg-white py-4 rounded-md flex items-center w-full ">
                <Icon icon="system-uicons:mail" className="size-6 text-primary absolute left-2" />
                <input type="email" placeholder="Enter your email here" className="outline-none font-medium text-xs border-none text-muted-foreground px-9 "/>
                <Button className="absolute right-1 aspect-square">
                  <Icon icon="formkit:arrowright" className="text-xl text-white " />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-4">
              {memoizedFooterListMenu.map((menu, index) => (
                <MenuComponent key={index} menu={menu} />
              ))}
            </div>
        </div>

        <div className="w-full cursor-default text-[12.5px] border-t border-t-gray-600 pt-4 text-sm flex flex-col md:flex-row text-gray-300 items-center justify-between gap-4">
            <p>© 2025 ResetLove™. All rights reserved.</p>
            <p>Designed with 💖 for healing and transformation</p>
        </div>

      </div>
    </footer>
    
  );
};

const SocialIcons = ({icon}: {icon: string}) => (
  <button className="rounded-full bg-transparent group/social-icon text-white size-[34px] flex items-center justify-center border cursor-pointer border-gray-400">
    <Icon icon={icon} className="text-[16px] group-hover/social-icon:text-lg group-hover/social-icon:text-gold duration-300" />
  </button>
)



type MenuComponentProps = {
  menu: FooterMenuProps;
};

const MenuComponent: React.FC<MenuComponentProps> = memo(({ menu }) => (
  <div className="w-full">
    <h4 className="scroll-m-20 cursor-default font-semibold text-lg capitalize text-pink mb-2 tracking-tight">
      {menu.header}
    </h4>
    <ul className="flex flex-col items-start text-xs capitalize gap-2">
      {menu.list.map((item, index) => (
        <Link href={item.url} key={index} className="flex items-center gap-2">
          {
            item.icon && (
              <div className="size-8 flex items-center justify-center rounded-full bg-white">
                {item.icon}
              </div>
            )
          }
          <li key={index} className=" text-gray-300 text-[12.5px] hover:text-gray-400 font-medium duration-300">{item.label}</li>
        </Link>
      ))}
    </ul>
  </div>
  
));

MenuComponent.displayName = 'MenuComponent'

Footer.displayName = 'Footer'
export default Footer;
