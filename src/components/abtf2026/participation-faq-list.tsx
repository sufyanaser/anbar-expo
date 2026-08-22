import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import {
  BadgeCheck,
  ChevronDown,
  CircleAlert,
  ClipboardCheck,
} from "lucide-react";

import type { ParticipationFaqDisplayStyle } from "@/data/abtf-participation-faq";
import type {
  ManagedParticipationFaqItem,
  ManagedParticipationFaqPage,
} from "@/sanity/content";

const statusStyles = {
  confirmed: "border-[#087c49]/20 bg-[#e8f0eb] text-[#087c49]",
  "partially-confirmed": "border-[#b98621]/25 bg-[#fff5d5] text-[#7a5209]",
  "awaiting-approval": "border-[#a55a2a]/20 bg-[#fff0e5] text-[#8a431b]",
} as const;

const statusIcons = {
  confirmed: BadgeCheck,
  "partially-confirmed": ClipboardCheck,
  "awaiting-approval": CircleAlert,
} as const;

const portableTextComponents: PortableTextComponents = {
  block: { normal: ({ children }) => <p>{children}</p> },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc space-y-2 pe-5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal space-y-2 pe-5">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
};

function StatusBadge({ entry }: { entry: ManagedParticipationFaqItem }) {
  const StatusIcon = statusIcons[entry.status];

  return (
    <span
      className={`inline-flex w-fit shrink-0 items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold ${statusStyles[entry.status]}`}
    >
      <StatusIcon className="size-4" aria-hidden="true" />
      {entry.statusLabel}
    </span>
  );
}

function Answer({ entry }: { entry: ManagedParticipationFaqItem }) {
  const firstItem = entry.answer[0];

  if (typeof firstItem === "string") {
    return entry.answer.map((paragraph) => (
      <p key={paragraph as string}>{paragraph as string}</p>
    ));
  }

  return (
    <PortableText
      value={entry.answer as PortableTextBlock[]}
      components={portableTextComponents}
    />
  );
}

function QuestionDetails({
  entry,
  showHighlights,
  showNotes,
}: {
  entry: ManagedParticipationFaqItem;
  showHighlights: boolean;
  showNotes: boolean;
}) {
  return (
    <>
      <div className="space-y-4 text-base leading-9 text-[#073d5b]/68">
        <Answer entry={entry} />
      </div>

      {showHighlights && entry.highlights?.length ? (
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="خلاصة الإجابة">
          {entry.highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-full border border-[#087c49]/14 bg-[#e8f0eb]/70 px-4 py-2 text-xs font-bold text-[#087c49]"
            >
              {highlight}
            </li>
          ))}
        </ul>
      ) : null}

      {showNotes && entry.note ? (
        <p className="mt-6 rounded-2xl border border-[#b98621]/18 bg-[#fff8df] p-4 text-sm leading-7 text-[#68470c]">
          <span className="font-normal">ملاحظة: </span>
          {entry.note}
        </p>
      ) : null}
    </>
  );
}

function StandardQuestions({
  questions,
  displayStyle,
  showHighlights,
  showNotes,
}: {
  questions: ManagedParticipationFaqPage["questions"];
  displayStyle: Exclude<ParticipationFaqDisplayStyle, "accordion">;
  showHighlights: boolean;
  showNotes: boolean;
}) {
  const isCompact = displayStyle === "compact";

  return (
    <ol className={isCompact ? "grid gap-5 lg:grid-cols-2" : "space-y-5"}>
      {questions.map((entry, index) => (
        <li
          key={entry.id}
          id={entry.id}
          className={`scroll-mt-40 rounded-3xl border border-[#073d5b]/10 bg-white shadow-sm ${
            isCompact ? "p-5 sm:p-6" : "p-6 sm:p-8"
          }`}
        >
          <div
            className={`flex gap-5 ${
              isCompact
                ? "flex-col"
                : "flex-col sm:flex-row sm:items-start sm:justify-between"
            }`}
          >
            <div className="flex items-start gap-4">
              <span className="font-latin flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#073d5b] text-sm font-normal text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="pt-1 text-xl leading-8 font-normal text-[#073d5b] sm:text-2xl sm:leading-9">
                {entry.question}
              </h2>
            </div>
            <StatusBadge entry={entry} />
          </div>

          <div className="mt-6 border-t border-[#073d5b]/8 pt-6">
            <QuestionDetails
              entry={entry}
              showHighlights={showHighlights}
              showNotes={showNotes}
            />
          </div>
        </li>
      ))}
    </ol>
  );
}

function AccordionQuestions({
  questions,
  showHighlights,
  showNotes,
}: {
  questions: ManagedParticipationFaqPage["questions"];
  showHighlights: boolean;
  showNotes: boolean;
}) {
  return (
    <ol className="space-y-4">
      {questions.map((entry, index) => (
        <li key={entry.id} id={entry.id} className="scroll-mt-40">
          <details className="group rounded-3xl border border-[#073d5b]/10 bg-white shadow-sm open:border-[#087c49]/24">
            <summary className="flex cursor-pointer list-none items-start gap-4 p-5 focus-visible:ring-2 focus-visible:ring-[#d3a528] focus-visible:outline-none sm:items-center sm:p-7 [&::-webkit-details-marker]:hidden">
              <span className="font-latin flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#073d5b] text-sm font-normal text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="min-w-0 flex-1 text-lg leading-8 font-normal text-[#073d5b] sm:text-2xl">
                {entry.question}
              </h2>
              <span className="hidden sm:block">
                <StatusBadge entry={entry} />
              </span>
              <ChevronDown
                className="mt-2 size-5 shrink-0 text-[#087c49] transition-transform group-open:rotate-180 sm:mt-0"
                aria-hidden="true"
              />
            </summary>
            <div className="border-t border-[#073d5b]/8 px-5 py-6 sm:px-7 sm:py-7">
              <div className="mb-5 sm:hidden">
                <StatusBadge entry={entry} />
              </div>
              <QuestionDetails
                entry={entry}
                showHighlights={showHighlights}
                showNotes={showNotes}
              />
            </div>
          </details>
        </li>
      ))}
    </ol>
  );
}

export function ParticipationFaqList({
  page,
}: {
  page: ManagedParticipationFaqPage;
}) {
  if (page.displayStyle === "accordion") {
    return (
      <AccordionQuestions
        questions={page.questions}
        showHighlights={page.showHighlights}
        showNotes={page.showNotes}
      />
    );
  }

  return (
    <StandardQuestions
      questions={page.questions}
      displayStyle={page.displayStyle}
      showHighlights={page.showHighlights}
      showNotes={page.showNotes}
    />
  );
}
