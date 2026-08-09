import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { abtf2026 } from "@/data/abtf2026";
import { getOfficialEntities } from "@/sanity/content";

export async function OfficialPartners() {
  const entities = await getOfficialEntities();
  const officialEntities = entities.filter(
    (entity) => !["concurrent", "mediaSponsor"].includes(entity.role),
  );
  const concurrentEntity = entities.find(
    (entity) => entity.role === "concurrent",
  );
  const mediaSponsorEntity = entities.find(
    (entity) => entity.role === "mediaSponsor",
  );

  return (
    <section
      id="official"
      className="scroll-mt-32 bg-[#eee4d4] bg-[url('/brand/abtf2026/identity/abtf-paper-texture.webp')] bg-cover bg-center py-20 sm:scroll-mt-36 sm:py-24"
    >
      <div className="mx-auto w-[min(100%-2rem,80rem)]">
        <div className="max-w-3xl">
          <p className="text-xs font-normal tracking-[0.16em] text-[#087c49]">
            الإطار الرسمي
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#073d5b] sm:text-5xl">
            الرعاية والإشراف والتنظيم
          </h2>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-3xl border border-[#9a6b16]/22 bg-[#8a5f12]/18 shadow-[0_24px_70px_rgba(111,76,13,0.1)] lg:grid-cols-3 lg:gap-px">
          {officialEntities.map((entity, index) => (
            <article
              key={entity.label}
              className={`group relative bg-[linear-gradient(145deg,rgba(255,252,244,0.98)_0%,rgba(245,231,191,0.98)_58%,rgba(211,170,91,0.94)_100%)] p-7 sm:p-9 ${entity.href ? "cursor-pointer" : ""}`}
            >
              {entity.href && (
                <Link
                  href={entity.href}
                  className="absolute inset-1 z-10 rounded-xl focus-visible:ring-3 focus-visible:ring-[#073d5b] focus-visible:outline-none"
                  aria-label={`فتح الملف التعريفي لـ ${entity.name}`}
                >
                  <span className="sr-only">الملف التعريفي</span>
                </Link>
              )}
              <span
                className="font-latin absolute end-7 top-7 text-xs font-normal text-[#79500b]/65"
                aria-hidden="true"
              >
                0{index + 1}
              </span>
              <p className="text-xs font-normal tracking-[0.14em] text-[#3a2605]">
                {entity.label}
              </p>
              <div className="mt-6 flex items-center justify-between gap-5">
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl leading-8 font-bold text-[#073d5b]">
                    {entity.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-sm leading-7 text-[#3a2605]">
                    <p>{entity.detail}</p>
                    {entity.href && (
                      <ArrowLeft
                        className="size-4 shrink-0 transition-transform group-hover:-translate-x-1"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </div>
                <div className="flex size-20 shrink-0 items-center justify-center rounded-xl border border-[#80580f]/15 bg-white/80 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_24px_rgba(101,68,10,0.1)] sm:size-24">
                  <Image
                    src={entity.mark.src}
                    width={entity.mark.width}
                    height={entity.mark.height}
                    alt={entity.mark.alt}
                    className="max-h-full w-auto object-contain"
                    unoptimized={entity.mark.src.endsWith(".svg")}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#073d5b]/12 bg-white/78 px-6 py-7 text-[#073d5b] shadow-sm backdrop-blur-md sm:flex-row sm:px-9">
          <div>
            <p className="text-xs font-normal tracking-[0.14em] text-[#087c49]">
              بالتزامن مع
            </p>
            <p className="mt-2 text-2xl font-bold">
              {concurrentEntity?.name || abtf2026.concurrentEvent}
            </p>
          </div>
          <span className="flex size-20 items-center justify-center rounded-2xl border border-[#073d5b]/10 bg-[#f7f5ef] p-2">
            <Image
              src={
                concurrentEntity?.mark.src || "/brand/abtf2026/partner-03.svg"
              }
              width={2328}
              height={2398}
              alt="شعار معرض صُنع في سوريا"
              className="max-h-full w-auto"
              unoptimized
            />
          </span>
        </div>

        <Link
          href={mediaSponsorEntity?.href || abtf2026.mediaSponsor.href}
          className="group relative mt-6 flex flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl border border-[#00e8bb]/28 bg-[linear-gradient(110deg,#00a58f_0%,#006f7f_46%,#003b46_100%)] px-6 py-7 text-white shadow-lg shadow-[#006f7f]/18 transition-transform hover:-translate-y-0.5 focus-visible:ring-3 focus-visible:ring-[#00e8bb] focus-visible:outline-none sm:flex-row sm:px-9"
          aria-label={`عرض تفاصيل ${mediaSponsorEntity?.label || abtf2026.mediaSponsor.label}`}
        >
          <span
            className="pointer-events-none absolute top-1/2 -left-36 hidden size-[30rem] -translate-y-1/2 rounded-full bg-[repeating-radial-gradient(circle,transparent_0,transparent_31px,rgba(255,255,255,0.14)_32px,rgba(255,255,255,0.14)_34px,transparent_35px,transparent_62px)] opacity-75 [mask-image:linear-gradient(to_right,black_20%,rgba(0,0,0,0.72)_58%,transparent_92%)] sm:block"
            aria-hidden="true"
          />
          <span
            className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_42%,rgba(255,255,255,0.08))]"
            aria-hidden="true"
          />
          <span className="relative">
            <span className="text-xs font-normal tracking-[0.14em] text-white/76">
              {mediaSponsorEntity?.label || abtf2026.mediaSponsor.label}
            </span>
            <span className="mt-2 block text-2xl font-bold">
              {mediaSponsorEntity?.name || abtf2026.mediaSponsor.name}
            </span>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white/82">
              التفاصيل والتواصل والإعلانات
              <ArrowLeft
                className="size-4 transition-transform group-hover:-translate-x-1"
                aria-hidden="true"
              />
            </span>
          </span>
          <span className="relative flex size-20 shrink-0 items-center justify-center rounded-2xl border border-white/38 bg-white/10 p-2 shadow-inner shadow-white/10 backdrop-blur-sm">
            <span
              role="img"
              aria-label={`شعار ${mediaSponsorEntity?.name || abtf2026.mediaSponsor.name}`}
              className="size-full bg-[linear-gradient(145deg,#ffffff_8%,#eef1f4_42%,#aeb6c0_72%,#ffffff_100%)] drop-shadow-[0_6px_10px_rgba(0,20,27,0.24)]"
              style={{
                maskImage: `url('${mediaSponsorEntity?.mark.src || abtf2026.mediaSponsor.mark}')`,
                WebkitMaskImage: `url('${mediaSponsorEntity?.mark.src || abtf2026.mediaSponsor.mark}')`,
                maskPosition: "center",
                WebkitMaskPosition: "center",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskSize: "contain",
                WebkitMaskSize: "contain",
              }}
            />
          </span>
        </Link>
      </div>
    </section>
  );
}
