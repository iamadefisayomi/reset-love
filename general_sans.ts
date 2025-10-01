import localFont from "next/font/local";

export const generalSans = localFont({
  src: [
    { path: "public/fonts/general_sans/GeneralSans-Extralight.woff2", weight: "200", style: "normal" },
    { path: "public/fonts/general_sans/GeneralSans-ExtralightItalic.woff2", weight: "200", style: "italic" },
    { path: "public/fonts/general_sans/GeneralSans-Light.woff2", weight: "300", style: "normal" },
    { path: "public/fonts/general_sans/GeneralSans-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "public/fonts/general_sans/GeneralSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "public/fonts/general_sans/GeneralSans-Italic.woff2", weight: "400", style: "italic" },
    { path: "public/fonts/general_sans/GeneralSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "public/fonts/general_sans/GeneralSans-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "public/fonts/general_sans/GeneralSans-Semibold.woff2", weight: "600", style: "normal" },
    { path: "public/fonts/general_sans/GeneralSans-SemiboldItalic.woff2", weight: "600", style: "italic" },
    { path: "public/fonts/general_sans/GeneralSans-Bold.woff2", weight: "700", style: "normal" },
    { path: "public/fonts/general_sans/GeneralSans-BoldItalic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-general-sans",
  display: "swap",
});