import { Clock3 } from "lucide-react";

export function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#073d5b]/12 bg-white px-6 py-14 text-center shadow-sm sm:px-10 sm:py-16">
      <div
        className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#087c49,#f0c64f,#087c49)]"
        aria-hidden="true"
      />
      <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[#e8f0eb] text-[#087c49]">
        <Clock3 className="size-7" aria-hidden="true" />
      </span>
      <p className="mx-auto mt-6 w-fit rounded-full bg-[#e8f0eb] px-3 py-1.5 text-xs font-bold text-[#087c49]">
        قيد استكمال المحتوى الرسمي
      </p>
      <h2 className="mt-4 text-2xl font-bold text-[#073d5b]">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#073d5b]/58 sm:text-base sm:leading-8">
        {description}
      </p>
      <p className="mx-auto mt-5 max-w-lg text-xs leading-6 text-[#073d5b]/42">
        سيظهر المحتوى هنا فور اعتماده ونشره من فريق إدارة المعرض.
      </p>
    </div>
  );
}
