"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type CountdownValue = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  started: boolean;
};

const units = [
  { key: "days", label: "يوماً" },
  { key: "hours", label: "ساعة" },
  { key: "minutes", label: "دقيقة" },
  { key: "seconds", label: "ثانية" },
] as const;

function getCountdown(targetTime: number): CountdownValue {
  const remaining = Math.max(0, targetTime - Date.now());

  return {
    days: Math.floor(remaining / 86_400_000),
    hours: Math.floor((remaining / 3_600_000) % 24),
    minutes: Math.floor((remaining / 60_000) % 60),
    seconds: Math.floor((remaining / 1_000) % 60),
    started: remaining === 0,
  };
}

export function EventCountdown({
  targetDate,
  className,
}: {
  targetDate: string;
  className?: string;
}) {
  const [countdown, setCountdown] = useState<CountdownValue | null>(null);

  useEffect(() => {
    const targetTime = new Date(targetDate).getTime();
    const update = () => setCountdown(getCountdown(targetTime));

    update();
    const intervalId = window.setInterval(update, 1_000);

    return () => window.clearInterval(intervalId);
  }, [targetDate]);

  if (countdown?.started) {
    return (
      <div className={cn("px-5 py-4 text-center text-white", className)}>
        <p className="text-sm font-normal text-[#f0c64f]">انطلق المعرض</p>
      </div>
    );
  }

  return (
    <div
      className={cn("px-4 py-4 text-white sm:px-5", className)}
      aria-label="الوقت المتبقي لانطلاق المعرض"
    >
      <p className="text-center text-[0.68rem] font-normal tracking-[0.1em] text-[#f0c64f]">
        متبقي على انطلاق المعرض
      </p>
      <div
        className="mt-2.5 grid grid-cols-4 divide-x divide-white/12"
        dir="ltr"
      >
        {units.map((unit) => (
          <div key={unit.key} className="px-1.5 text-center sm:px-2">
            <span className="font-latin block text-xl font-normal tabular-nums sm:text-[1.65rem]">
              {countdown ? String(countdown[unit.key]).padStart(2, "0") : "--"}
            </span>
            <span className="mt-0.5 block text-[0.64rem] font-bold text-white/52">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
