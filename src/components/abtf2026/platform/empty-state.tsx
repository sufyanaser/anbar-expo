import { CircleDashed } from "lucide-react";

export function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-dashed border-[#073d5b]/20 bg-white px-6 py-14 text-center sm:px-10">
      <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[#e8f0eb] text-[#087c49]">
        <CircleDashed className="size-7" aria-hidden="true" />
      </span>
      <h2 className="mt-6 text-2xl font-normal text-[#073d5b]">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#073d5b]/58 sm:text-base sm:leading-8">
        {description}
      </p>
    </div>
  );
}
