import {
  ArrowLeft,
  Building2,
  CalendarDays,
  MapPin,
  Navigation,
  Newspaper,
  RadioTower,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

import { exhibitionBuildings } from "@/data/abtf-platform";
import {
  getExhibitors,
  getEventSettings,
  getLiveStream,
  getNewsEntries,
  getPlatformModules,
  getProgramEntries,
} from "@/sanity/content";

async function getOperationalCards() {
  const [liveStreamConfig, programEntries, newsEntries, exhibitorLocations] =
    await Promise.all([
      getLiveStream(),
      getProgramEntries(),
      getNewsEntries(),
      getExhibitors(),
    ]);

  const operationalCards = [
    {
      icon: RadioTower,
      eyebrow: "التغطية الرسمية",
      title: "البث المباشر",
      detail: liveStreamConfig.sourceUrl
        ? "البث متاح الآن عبر القناة الرسمية."
        : "يُفعّل عند انطلاق التغطية الرسمية.",
      status: liveStreamConfig.sourceUrl ? "متصل" : "غير متصل حالياً",
      statusTone: liveStreamConfig.sourceUrl ? "active" : "idle",
      href: "/ABTF2026/live",
    },
    {
      icon: CalendarDays,
      eyebrow: "الجدول الرسمي",
      title: "برنامج الفعاليات",
      detail: "مواعيد الندوات والأمسيات والأنشطة اليومية.",
      status: `${programEntries.length} فعاليات مدرجة`,
      statusTone: "ready",
      href: "/ABTF2026/program",
    },
    {
      icon: Newspaper,
      eyebrow: "المركز الإعلامي",
      title: "آخر الأخبار",
      detail: "البيانات والتحديثات الرسمية المرتبطة بالمعرض.",
      status:
        newsEntries.length > 0
          ? `${newsEntries.length} تحديثات`
          : "قيد الإعداد",
      statusTone: newsEntries.length > 0 ? "ready" : "idle",
      href: "/ABTF2026/news",
    },
    {
      icon: UsersRound,
      eyebrow: "قاعدة المشاركين",
      title: "دليل العارضين",
      detail: "البحث بالاسم والتصنيف وموقع الجناح داخل المعرض.",
      status:
        exhibitorLocations.length > 0
          ? `${exhibitorLocations.length} عارضاً`
          : "تُضاف البيانات قريباً",
      statusTone: exhibitorLocations.length > 0 ? "ready" : "idle",
      href: "/ABTF2026/exhibitors",
    },
  ] as const;

  return operationalCards;
}

export async function PlatformStatusStrip() {
  const [eventSettings, platformModules] = await Promise.all([
    getEventSettings(),
    getPlatformModules(),
  ]);
  const overviewFacts = [
    {
      icon: CalendarDays,
      label: "موعد المعرض",
      value: eventSettings.opening.date,
    },
    {
      icon: MapPin,
      label: "الموقع",
      value: eventSettings.venue,
    },
    {
      icon: Building2,
      label: "مرافق المعرض",
      value: `${eventSettings.buildingCount || exhibitionBuildings.length} بنايات`,
    },
    {
      icon: Navigation,
      label: "الخدمات الرقمية",
      value: `${platformModules.length} أقسام مترابطة`,
    },
  ] as const;

  return (
    <section
      aria-label="معلومات تشغيل المعرض"
      className="relative z-10 border-b border-[#073d5b]/10 bg-white"
    >
      <div className="mx-auto grid w-[min(100%,80rem)] divide-y divide-[#073d5b]/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {overviewFacts.map((item) => (
          <div
            key={item.label}
            className="flex min-h-28 items-center gap-4 px-6 py-5 lg:px-7"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#e8f0eb] text-[#087c49]">
              <item.icon className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs text-[#073d5b]/48">{item.label}</p>
              <p className="mt-1.5 text-sm font-bold text-[#073d5b]">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export async function EventCommandCenter() {
  const operationalCards = await getOperationalCards();

  return (
    <section
      id="platform"
      className="scroll-mt-32 bg-[#f7f5ef] py-20 sm:scroll-mt-36 sm:py-24"
    >
      <div className="mx-auto w-[min(100%-2rem,80rem)]">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative flex size-3">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#087c49] opacity-20 motion-reduce:animate-none" />
                <span className="relative inline-flex size-3 rounded-full bg-[#087c49]" />
              </span>
              <p className="text-xs tracking-[0.14em] text-[#087c49]">
                لوحة متابعة المعرض
              </p>
            </div>
            <h2 className="mt-4 max-w-3xl text-3xl leading-tight font-bold text-[#073d5b] sm:text-5xl">
              وصول مباشر إلى حالة الخدمات والمعلومات
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-[#073d5b]/58 lg:ms-auto">
            نقطة بدء عملية للزائر والعارض والإعلام، تعرض حالة الأقسام وتربط
            بالمعلومات الرسمية من واجهة واحدة.
          </p>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-3xl border border-[#073d5b]/12 bg-[#073d5b] shadow-[0_22px_70px_rgba(3,40,63,0.16)] lg:grid-cols-4 lg:divide-x lg:divide-white/10">
          {operationalCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative flex min-h-64 flex-col border-b border-white/10 p-6 text-white transition-colors hover:bg-white/6 focus-visible:z-10 focus-visible:ring-3 focus-visible:ring-[#f0c64f] focus-visible:outline-none lg:border-b-0 lg:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/7 text-[#f0c64f]">
                  <card.icon className="size-5" aria-hidden="true" />
                </span>
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[0.68rem] ${
                    card.statusTone === "active"
                      ? "bg-[#23b26d]/15 text-[#79e2ab]"
                      : card.statusTone === "ready"
                        ? "bg-[#f0c64f]/12 text-[#f0c64f]"
                        : "bg-white/8 text-white/52"
                  }`}
                >
                  <span
                    className={`size-1.5 rounded-full ${
                      card.statusTone === "active"
                        ? "bg-[#79e2ab]"
                        : card.statusTone === "ready"
                          ? "bg-[#f0c64f]"
                          : "bg-white/35"
                    }`}
                  />
                  {card.status}
                </span>
              </div>
              <div className="mt-auto pt-10">
                <p className="text-xs text-[#f0c64f]">{card.eyebrow}</p>
                <h3 className="mt-2 text-2xl font-bold">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/52">
                  {card.detail}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white/82">
                  فتح القسم
                  <ArrowLeft
                    className="size-4 transition-transform group-hover:-translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
