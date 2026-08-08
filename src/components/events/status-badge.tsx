import type { ExhibitionEventStatus } from "@/types/event";

const labels: Record<ExhibitionEventStatus, string> = {
  upcoming: "قادم",
  active: "مباشر الآن",
  completed: "مكتمل",
};

export function StatusBadge({ status }: { status: ExhibitionEventStatus }) {
  return (
    <span className="bg-secondary text-primary inline-flex items-center rounded-full px-3 py-1 text-xs font-bold">
      {status === "active" ? (
        <span className="bg-copper ms-2 size-1.5 rounded-full" />
      ) : null}
      {labels[status]}
    </span>
  );
}
