"use client"

import useResponsive from "@/hooks/useResponsive";
import DesktopHeader from "./desktopHeader";

export default function Header() {
  const deviceType = useResponsive();

  if (deviceType === null) return null;

  return deviceType === "desktop" ? <DesktopHeader /> : <div />;
}
