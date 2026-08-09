import type { Metadata } from "next";

import { AdminSetupRequired } from "@/components/admin/admin-setup-required";
import { AdminStudio } from "@/components/admin/admin-studio";
import { isSanityConfigured } from "@/sanity/env";

export const metadata: Metadata = {
  title: "لوحة إدارة معرض الأنبار الدولي",
  robots: { index: false, follow: false, nocache: true },
};

export const dynamic = "force-dynamic";

export default function AdminPage() {
  if (!isSanityConfigured) {
    return <AdminSetupRequired />;
  }

  return <AdminStudio />;
}
