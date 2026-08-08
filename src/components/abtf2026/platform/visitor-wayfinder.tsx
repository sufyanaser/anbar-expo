"use client";

import { LocateFixed, MapPinned, Navigation, Search } from "lucide-react";
import { useMemo, useState } from "react";

import type { ExhibitorLocation } from "@/types/abtf-platform";

export function VisitorWayfinder({
  exhibitors,
  buildings,
}: {
  exhibitors: readonly ExhibitorLocation[];
  buildings: readonly number[];
}) {
  const [query, setQuery] = useState("");
  const [building, setBuilding] = useState<number | "all">("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [routeMessage, setRouteMessage] = useState("");

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("ar");
    return exhibitors.filter((exhibitor) => {
      const matchesQuery =
        !normalizedQuery ||
        exhibitor.name.toLocaleLowerCase("ar").includes(normalizedQuery);
      const matchesBuilding =
        building === "all" || exhibitor.building === building;
      return matchesQuery && matchesBuilding;
    });
  }, [building, exhibitors, query]);

  const selected = exhibitors.find((exhibitor) => exhibitor.id === selectedId);

  function openRoute() {
    const destinationCoordinates = selected?.coordinates;
    if (!destinationCoordinates) {
      setRouteMessage("إحداثيات هذه الجهة لم تُعتمد بعد.");
      return;
    }

    if (!("geolocation" in navigator)) {
      setRouteMessage("خدمة تحديد الموقع غير متاحة على هذا الجهاز.");
      return;
    }

    setRouteMessage("جارٍ تحديد موقعك…");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const origin = `${position.coords.latitude},${position.coords.longitude}`;
        const destination = `${destinationCoordinates.latitude},${destinationCoordinates.longitude}`;
        const directionsUrl = new URL("https://www.google.com/maps/dir/");
        directionsUrl.searchParams.set("api", "1");
        directionsUrl.searchParams.set("origin", origin);
        directionsUrl.searchParams.set("destination", destination);
        directionsUrl.searchParams.set("travelmode", "walking");
        window.open(directionsUrl.toString(), "_blank", "noopener,noreferrer");
        setRouteMessage("تم فتح مسار المشي في تطبيق الخرائط.");
      },
      () => {
        setRouteMessage("تعذر تحديد موقعك. تحقق من صلاحية GPS وحاول مجددًا.");
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 30000 },
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <section className="rounded-3xl border border-[#073d5b]/10 bg-white p-5 shadow-sm sm:p-7">
        <div className="flex items-center gap-3">
          <Search className="size-6 text-[#087c49]" aria-hidden="true" />
          <div>
            <p className="text-xs font-black text-[#087c49]">البحث الموحد</p>
            <h2 className="mt-1 text-2xl font-black text-[#073d5b]">
              ابحث عن جهة أو عارض
            </h2>
          </div>
        </div>

        <label className="relative mt-7 block">
          <span className="sr-only">اسم العارض أو الجهة</span>
          <Search
            className="pointer-events-none absolute top-1/2 start-4 size-5 -translate-y-1/2 text-[#087c49]"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="اكتب اسم العارض أو الجهة"
            className="min-h-14 w-full rounded-xl border border-[#073d5b]/14 bg-[#f7f5ef] py-3 ps-12 pe-4 text-sm text-[#073d5b] outline-none placeholder:text-[#073d5b]/38 focus:border-[#087c49] focus:ring-2 focus:ring-[#087c49]/15"
          />
        </label>

        <fieldset className="mt-5">
          <legend className="text-xs font-black text-[#073d5b]/55">
            تصفية حسب البناية
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setBuilding("all")}
              className={`min-h-11 rounded-full px-4 text-xs font-black transition-colors ${
                building === "all"
                  ? "bg-[#073d5b] text-white"
                  : "bg-[#e8f0eb] text-[#073d5b] hover:bg-[#dce9e1]"
              }`}
            >
              الكل
            </button>
            {buildings.map((number) => (
              <button
                key={number}
                type="button"
                onClick={() => setBuilding(number)}
                className={`min-h-11 rounded-full px-4 text-xs font-black transition-colors ${
                  building === number
                    ? "bg-[#073d5b] text-white"
                    : "bg-[#e8f0eb] text-[#073d5b] hover:bg-[#dce9e1]"
                }`}
              >
                البناية {number}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="mt-8 border-t border-[#073d5b]/10 pt-6">
          {results.length > 0 ? (
            <ul className="space-y-3">
              {results.map((exhibitor) => (
                <li key={exhibitor.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedId(exhibitor.id);
                      setRouteMessage("");
                    }}
                    className="flex w-full items-center justify-between gap-4 rounded-2xl border border-[#073d5b]/10 p-4 text-start hover:border-[#087c49]/40 hover:bg-[#e8f0eb]/50"
                  >
                    <span>
                      <span className="block font-black text-[#073d5b]">
                        {exhibitor.name}
                      </span>
                      <span className="mt-1 block text-xs text-[#073d5b]/50">
                        البناية {exhibitor.building}
                        {exhibitor.booth ? ` · الجناح ${exhibitor.booth}` : ""}
                      </span>
                    </span>
                    <MapPinned
                      className="size-5 text-[#087c49]"
                      aria-hidden="true"
                    />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="py-8 text-center">
              <LocateFixed
                className="mx-auto size-8 text-[#087c49]"
                aria-hidden="true"
              />
              <p className="mt-4 font-black text-[#073d5b]">
                بيانات المواقع بانتظار الاعتماد
              </p>
              <p className="mt-2 text-sm leading-7 text-[#073d5b]/52">
                سيعمل البحث مباشرة بعد إدخال أسماء الجهات وأرقام البنايات
                والأجنحة والإحداثيات.
              </p>
            </div>
          )}
        </div>
      </section>

      <aside className="flex flex-col rounded-3xl bg-[#073d5b] p-6 text-white sm:p-8">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-[#f0c64f]">
          <Navigation className="size-6" aria-hidden="true" />
        </span>
        <p className="mt-8 text-xs font-black text-[#f0c64f]">عرض المسار</p>
        <h2 className="mt-3 text-3xl leading-tight font-black">
          من موقع الزائر إلى الجهة المطلوبة
        </h2>
        <p className="mt-4 text-sm leading-7 text-white/58">
          يعتمد المسار على GPS في جهاز الزائر وإحداثيات الجهة داخل بيانات
          المنصة. لن يُطلب إذن الموقع قبل اختيار جهة جاهزة للملاحة.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/6 p-5">
          <p className="text-xs font-bold text-white/45">الوجهة المحددة</p>
          <p className="mt-2 font-black">
            {selected ? selected.name : "لم تُحدد جهة بعد"}
          </p>
          {selected && (
            <p className="mt-2 text-xs text-white/50">
              البناية {selected.building}
              {selected.booth ? ` · الجناح ${selected.booth}` : ""}
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={openRoute}
          disabled={!selected?.coordinates}
          className="mt-5 inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-[#f0c64f] px-5 text-sm font-black text-[#073d5b] transition-colors hover:bg-[#f6d778] disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/35"
        >
          <Navigation className="size-4" aria-hidden="true" />
          عرض المسار عبر GPS
        </button>
        <p
          className="mt-3 min-h-6 text-xs leading-6 text-white/55"
          aria-live="polite"
        >
          {routeMessage || "تُفعّل الخاصية عند اعتماد إحداثيات العارضين."}
        </p>
      </aside>
    </div>
  );
}
