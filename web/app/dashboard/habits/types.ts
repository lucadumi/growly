"use client";

import type { ReactNode } from "react";
import type { Habit as PrismaHabit } from "@/lib/generated/prisma";

export { maskToDays, daysToMask, cadenceLabel, cadenceSummary, DAY_LABELS } from "@/lib/cadence";

export type HabitRiskLevel = "low" | "medium" | "high";

/** Kept for legacy compatibility — cadence is now stored as a 7-char bitmask. */
export type Cadence = string;
export type UnitCategory = "Quantity" | "Time";

export interface HabitFormState {
  name: string;
  description: string;
  /** 7-element boolean array Mon→Sun, replaces the old cadence dropdown. */
  scheduledDays: boolean[];
  startDate: string;
  timeWindow: string;
  goalAmount: string;
  goalUnit: string;
  goalUnitCategory: UnitCategory;
}

export type Habit = Omit<PrismaHabit, "dailyProgress"> & {
  dailyProgress?: number | null;
  streak?: number;
  completion?: number;
};

export type HabitReflection = {
  id: string;
  userId: string;
  entryDate: string | Date;
  note: string;
  createdAt: string | Date;
  updatedAt: string | Date;
};

export type PlaybookItem = {
  title: string;
  detail: string;
  label: "Prevent" | "Rescue" | "Review";
  meta: string;
  icon: "ShieldCheck" | "LifeBuoy" | "CalendarClock";
  accent: string;
};

export type MenuPosition = {
  top: number;
  left: number;
};

export type PortalProps = {
  children: ReactNode;
};
