"use client";

import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navConfig } from "./navConfig";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Minus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DesktopHeader() {
  const [scrolled, setScrolled] = useState<null | boolean>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // run once on mount to set correct initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrolledClass =
    scrolled === null
      ? "bg-gray-200" // SSR safe default
      : scrolled
      ? "backdrop-blur-md bg-white/40"
      : "bg-gray-100";

  return (
    <header className="w-full min-h-16 z-[50] flex items-center justify-center fixed top-12 -translate-y-[50%] left-0 transition-all duration-300">
      <div
        className={cn(
          "w-full max-w-7xl flex items-center justify-between rounded-xl px-4 py-[14px] transition-all duration-300",
          scrolledClass
        )}
      >
        <Logo className="w-24" />
        <DesktopNavigation />
      </div>
    </header>
  );
}

function DesktopNavigation() {
  const pathname = usePathname();
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="gap-6">
        {navConfig.map((item) => {
          const isActive = pathname === item.href;
          return (
            <NavigationMenuItem key={item.title}>
              <NavigationMenuLink
                asChild
                className={cn(
                  "hover:bg-transparent active:bg-transparent uppercase font-medium text-[11.5px] text-muted-foreground hover:text-primary",
                  isActive && "text-primary"
                )}
              >
                <Link href={item.href || "#"}>{item.title}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
        <span className="h-8 w-[1px] bg-gray-500"/>
        <button className="bg-beige size-8 cursor-pointer rounded-md flex items-center justify-center">
            <Search className="w-3 text-primary"/>
        </button>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
