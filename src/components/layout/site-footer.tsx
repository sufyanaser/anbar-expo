import Link from "next/link";

import { navigation, siteConfig } from "@/data/site";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper border-t border-white/10">
      <Container className="grid gap-12 py-14 md:grid-cols-[1fr_2fr] md:py-20">
        <div>
          <p className="latin-wordmark text-xl font-black">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-white/65">{siteConfig.nameAr}</p>
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
            {siteConfig.description}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ANBAR EXPO</p>
          <p className="latin-wordmark tracking-normal">anbarexpo.com</p>
        </Container>
      </div>
    </footer>
  );
}
