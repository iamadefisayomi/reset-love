"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  isPlain?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ isPlain = false, className }) => {
  const logoSrc = isPlain ? "/logo-plain.svg" : "/logo.svg";

  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className="flex w-fit items-center gap-1"
    >
      <Image
        src={logoSrc}
        alt="The reset love"
        width={160}
        height={48}
        className={cn(
          "h-auto w-28",
          className
        )}
        draggable={false}
        priority
      />
    </Link>
  );
};

export default Logo;
