// Pure cadence helpers — no "use client" so usable in server components too.

export const DAY_LABELS = ["M", "T", "W", "T", "F", "S", "S"] as const;

/** Convert a 7-char bitmask (e.g. "1111100") or a legacy string to a boolean[7]. */
export function maskToDays(mask: string): boolean[] {
  if (mask.length === 7 && /^[01]+$/.test(mask)) {
    return mask.split("").map((c) => c === "1");
  }
  // Legacy values
  if (mask === "Weekly") return [false, false, false, false, false, false, true];
  // "Daily" / "Monthly" / unknown → every day
  return [true, true, true, true, true, true, true];
}

/** Convert a boolean[7] to a 7-char bitmask string. */
export function daysToMask(days: boolean[]): string {
  return days.map((d) => (d ? "1" : "0")).join("");
}

/** Human-readable label for a cadence value. */
export function cadenceLabel(cadence: string): string {
  if (cadence.length === 7 && /^[01]+$/.test(cadence)) {
    const count = cadence.split("").filter((c) => c === "1").length;
    if (count === 0) return "No repeat";
    if (count === 7) return "Daily";
    const isWeekdays = cadence === "1111100";
    const isWeekends = cadence === "0000011";
    if (isWeekdays) return "Weekdays";
    if (isWeekends) return "Weekends";
    return `${count}x/week`;
  }
  // Legacy labels pass through as-is
  return cadence;
}

/** Summary sentence shown below the day picker in the form. */
export function cadenceSummary(days: boolean[]): string {
  const count = days.filter(Boolean).length;
  if (count === 0) return "No days selected";
  if (count === 7) return "Every day";
  const mask = daysToMask(days);
  if (mask === "1111100") return "Weekdays only";
  if (mask === "0000011") return "Weekends only";
  return `${count} day${count > 1 ? "s" : ""} a week`;
}
