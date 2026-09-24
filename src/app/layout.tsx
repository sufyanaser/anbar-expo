import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Sans_Arabic } from "next/font/google";
import localFont from "next/font/local";

import { PwaRegister } from "@/components/pwa/pwa-register";
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
  description: siteConfig.description,
  applicationName: "ANBAR EXPO",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: ["/shortcut-icon-96x96.png"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ANBAR EXPO",
  },
  formatDetection: { telephone: false },
  alternates: { canonical: "/" },
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "ar_IQ",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#161412",
  colorScheme: "light",
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
        <PwaRegister />
        <a className="skip-link" href="#main-content">
          انتقل إلى المحتوى الرئيسي
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
