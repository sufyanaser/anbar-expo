import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Sans_Arabic } from "next/font/google";
import localFont from "next/font/local";

import { siteConfig } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  display: "swap",
});

const qomraArabic = localFont({
  variable: "--font-qomra-arabic",
  display: "swap",
  fallback: ["Noto Sans Arabic", "Tahoma", "Arial"],
  src: [
    {
      path: "./fonts/qomra/QomraArabicitf-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/qomra/QomraArabicitf-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/qomra/QomraArabicitf-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/qomra/QomraArabicitf-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/qomra/QomraArabicitf-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: "الموقع قيد الإعداد.",
  alternates: { canonical: "/" },
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "ar_IQ",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: "الموقع قيد الإعداد.",
  },
  twitter: {
    card: "summary",
    title: siteConfig.name,
    description: "الموقع قيد الإعداد.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansArabic.variable} ${qomraArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <a className="skip-link" href="#main-content">
          انتقل إلى المحتوى الرئيسي
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
