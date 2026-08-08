"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navigation, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { Container } from "./container";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-background/95 sticky top-0 z-50 border-b backdrop-blur-sm">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="group flex shrink-0 flex-col py-3"
          aria-label="الصفحة الرئيسية"
        >
          <span className="latin-wordmark text-ink text-base font-black sm:text-lg">
            {siteConfig.name}
          </span>
          <span className="text-muted-foreground text-[0.68rem] font-semibold">
            {siteConfig.nameAr}
          </span>
        </Link>

        <nav aria-label="التنقل الرئيسي" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "hover:text-primary focus-visible:ring-ring rounded-sm px-3 py-2 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none",
                      active
                        ? "text-primary bg-secondary"
                        : "text-muted-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="border-border text-ink flex size-11 items-center justify-center rounded-sm border lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </Container>

      {open ? (
        <nav
          id="mobile-navigation"
          aria-label="التنقل على الهاتف"
          className="bg-background border-t lg:hidden"
        >
          <Container>
            <ul className="grid py-3 sm:grid-cols-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="hover:bg-secondary focus-visible:bg-secondary block rounded-sm px-3 py-3 font-bold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
