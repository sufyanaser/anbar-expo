import {
  CalendarRange,
  Images,
  MapPinned,
  Megaphone,
  Newspaper,
  RadioTower,
  UsersRound,
} from "lucide-react";

import type { PlatformModuleIcon } from "@/types/abtf-platform";

const icons = {
  broadcast: RadioTower,
  calendar: CalendarRange,
  gallery: Images,
  megaphone: Megaphone,
  news: Newspaper,
  exhibitors: UsersRound,
  wayfinding: MapPinned,
} as const;

export function ModuleIcon({
  name,
  className,
}: {
  name: PlatformModuleIcon;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}
