import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const eventTitle = "معرض الأنبار الدولي للكتاب والتكنولوجيا";

export const metadata: Metadata = {
  title: { absolute: eventTitle },
  description: `الدخول إلى المنصة الرقمية الرسمية لـ ${eventTitle}.`,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ar_IQ",
    url: "/",
    title: eventTitle,
    description: `الدخول إلى المنصة الرقمية الرسمية لـ ${eventTitle}.`,
    images: [
      {
        url: "/brand/abtf2026/identity/abtf-home-cover.webp",
        width: 1920,
        height: 1049,
        alt: eventTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: eventTitle,
    description: `الدخول إلى المنصة الرقمية الرسمية لـ ${eventTitle}.`,
    images: ["/brand/abtf2026/identity/abtf-home-cover.webp"],
  },
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden bg-[#eee4d4] bg-[url('/brand/abtf2026/identity/abtf-paper-texture.webp')] bg-cover bg-center px-4 py-8 sm:px-8 sm:py-12">
      <Link
        href="/ABTF2026"
        aria-label={`الدخول إلى ${eventTitle}`}
        className="group block w-full max-w-[75rem] overflow-hidden rounded-2xl border border-[#9a7541]/24 bg-[#f6f1e8] shadow-[0_28px_90px_rgba(6,59,90,0.16)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[#9a7541]/42 hover:shadow-[0_34px_110px_rgba(6,59,90,0.22)] focus-visible:ring-3 focus-visible:ring-[#087c49] focus-visible:ring-offset-4 focus-visible:ring-offset-[#eee4d4] focus-visible:outline-none sm:rounded-3xl motion-reduce:transform-none motion-reduce:transition-none"
      >
        <Image
          src="/brand/abtf2026/identity/abtf-home-cover.webp"
          width={1920}
          height={1049}
          alt={eventTitle}
          priority
          sizes="(max-width: 1280px) calc(100vw - 2rem), 1200px"
          className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.012] motion-reduce:transform-none motion-reduce:transition-none"
        />
      </Link>
    </div>
  );
}
