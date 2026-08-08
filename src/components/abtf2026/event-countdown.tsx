"use client";

import { useEffect, useState } from "react";

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

export function EventCountdown({ targetDate }: { targetDate: string }) {
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
      <div className="rounded-xl border border-white/14 bg-[#042f49]/94 px-6 py-5 text-center text-white shadow-xl">
        <p className="text-sm font-normal text-[#f0c64f]">انطلق المعرض</p>
      </div>
    );
  }

  return (
    <div
      className="rounded-xl border border-white/14 bg-[#042f49]/94 p-4 text-white shadow-xl sm:p-5"
      aria-label="الوقت المتبقي لانطلاق المعرض"
    >
      <p className="text-center text-xs font-normal tracking-[0.12em] text-[#f0c64f]">
        متبقي على انطلاق المعرض
      </p>
      <div className="mt-4 grid grid-cols-4 gap-2" dir="ltr">
        {units.map((unit) => (
          <div
            key={unit.key}
            className="rounded-lg border border-white/10 bg-white/7 px-2 py-3 text-center"
          >
            <span className="font-latin block text-xl font-normal tabular-nums sm:text-2xl">
              {countdown ? String(countdown[unit.key]).padStart(2, "0") : "--"}
            </span>
            <span className="mt-1 block text-[0.68rem] font-bold text-white/58">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
