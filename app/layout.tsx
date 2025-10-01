import type { Metadata, Viewport } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { generalSans } from "@/general_sans";
import {Onest, Playfair_Display } from 'next/font/google'
import CustomToast from "@/components/CustomToast";


const onest = Onest({ subsets: ["latin"], weight: ['100', '200', "300", '400', '500', '600', '700', '800', '900'] });
export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ['400', '500', '600', '700', '800', '900'] 
});

export const viewport: Viewport = {
  maximumScale: 1,
  userScalable: false,
  minimumScale: 1,
}


export const metadata: Metadata = {
  title: {
    template: "%s | TheResetLove™ - Transform Your Relationship",
    default: "TheResetLove™ - From Conflict to Connection",
  },
  manifest: "../manifest.json",
  description:
    "Too many couples spend months planning a wedding, but almost no time preparing for marriage itself. ResetLove™ helps couples move from conflict to clarity, from distance to connection, and from doubt to lasting love with evidence-based tools for every stage of love.",
  keywords:
    "relationship coaching, marriage preparation, couples therapy, love frameworks, conflict resolution, reconnect couples, rebuild trust, ResetLove",
  authors: [{ name: "ResetLove™ Team", url: "https://www.theresetlove.com" }],
  openGraph: {
    title: "ResetLove™ - From Conflict to Connection",
    description:
      "ResetLove™ helps couples move from conflict to clarity, from distance to connection, and from doubt to lasting love. Practical, evidence-based frameworks for every stage of love.",
    url: "https://www.theresetlove.com",
    type: "website",
    images: [
      {
        url: "https://www.theresetlove.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ResetLove™ - From Conflict to Connection",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", onest.className, playfair.variable)}>
        <CustomToast />
        {children}
      </body>
    </html>
  );
}
