"use client";

import { Search, Store } from "lucide-react";
import { useMemo, useState } from "react";

import type { ExhibitorLocation } from "@/types/abtf-platform";

export function ExhibitorDirectory({
  exhibitors,
}: {
  exhibitors: readonly ExhibitorLocation[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const categories = useMemo(
    () => [...new Set(exhibitors.map((exhibitor) => exhibitor.category))],
    [exhibitors],
  );

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("ar");
    return exhibitors.filter((exhibitor) => {
      const matchesQuery =
        !normalizedQuery ||
        exhibitor.name.toLocaleLowerCase("ar").includes(normalizedQuery);
      const matchesCategory =
        category === "all" || exhibitor.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [category, exhibitors, query]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 rounded-3xl border border-[#073d5b]/10 bg-white p-5 shadow-sm md:grid-cols-[1fr_18rem] md:p-6">
        <label className="relative block">
          <span className="sr-only">ابحث باسم العارض أو الجهة</span>
          <Search
            className="pointer-events-none absolute top-1/2 start-4 size-5 -translate-y-1/2 text-[#087c49]"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="ابحث باسم العارض أو الجهة"
            className="min-h-13 w-full rounded-xl border border-[#073d5b]/14 bg-[#f7f5ef] py-3 ps-12 pe-4 text-sm text-[#073d5b] outline-none placeholder:text-[#073d5b]/38 focus:border-[#087c49] focus:ring-2 focus:ring-[#087c49]/15"
          />
        </label>

        <label>
          <span className="sr-only">تصفية حسب التصنيف</span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="min-h-13 w-full rounded-xl border border-[#073d5b]/14 bg-[#f7f5ef] px-4 text-sm font-bold text-[#073d5b] outline-none focus:border-[#087c49] focus:ring-2 focus:ring-[#087c49]/15"
          >
            <option value="all">كل التصنيفات</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="text-sm font-bold text-[#073d5b]/55" aria-live="polite">
        {exhibitors.length > 0
          ? `${results.length} نتيجة مطابقة`
          : "0 نتيجة مطابقة"}
      </p>

      {results.length > 0 ? (
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {results.map((exhibitor) => (
            <li
              key={exhibitor.id}
              className="rounded-2xl border border-[#073d5b]/10 bg-white p-6"
            >
              <Store className="size-6 text-[#087c49]" aria-hidden="true" />
              <h2 className="mt-6 text-xl font-normal text-[#073d5b]">
                {exhibitor.name}
              </h2>
              <p className="mt-2 text-sm text-[#073d5b]/55">
                {exhibitor.category}
              </p>
              <p className="mt-5 text-sm font-bold text-[#073d5b]">
                البناية {exhibitor.building}
                {exhibitor.booth ? ` · الجناح ${exhibitor.booth}` : ""}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="rounded-3xl border border-dashed border-[#073d5b]/20 bg-white px-6 py-14 text-center">
          <Store className="mx-auto size-8 text-[#087c49]" aria-hidden="true" />
          <h2 className="mt-5 text-xl font-normal text-[#073d5b]">
            لا توجد نتائج مطابقة
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#073d5b]/55">
            استخدم اسم العارض أو التصنيف للعثور على الجهة المطلوبة.
          </p>
        </div>
      )}
    </div>
  );
}
