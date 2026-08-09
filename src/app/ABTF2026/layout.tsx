import type { Metadata } from "next";

import { EventFooter } from "@/components/abtf2026/event-footer";
import { EventHeader } from "@/components/abtf2026/event-header";
import { abtf2026 } from "@/data/abtf2026";

export const metadata: Metadata = {
  title: {
    default: abtf2026.titleAr,
    template: `%s | ${abtf2026.titleAr}`,
  },
  description: abtf2026.titleAr,
  applicationName: abtf2026.titleAr,
  icons: {
    icon: [
      {
        url: abtf2026.eventMark,
        type: "image/svg+xml",
      },
    ],
    shortcut: abtf2026.eventMark,
  },
  openGraph: {
    type: "website",
    locale: "ar_IQ",
    url: "/ABTF2026",
    siteName: abtf2026.titleAr,
    title: abtf2026.titleAr,
    description:
      "المنصة الرقمية لمعرض الأنبار الدولي للكتاب والتكنولوجيا وبرنامج فعالياته وخدمات زواره.",
  },
  twitter: {
    card: "summary_large_image",
    title: abtf2026.titleAr,
    description:
      "المنصة الرقمية لمعرض الأنبار الدولي للكتاب والتكنولوجيا وبرنامج فعالياته وخدمات زواره.",
  },
  robots: { index: false, follow: false, nocache: true },
};

export default function Abtf2026Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      id="top"
      className="min-h-screen overflow-x-clip bg-[#f8f4ec] text-[#14242b]"
    >
      <EventHeader />
      {children}
      <EventFooter />
    </div>
  );
}
