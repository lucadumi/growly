"use client";

export const normalizeGoal = (value?: number | null) => {
  if (typeof value !== "number" || Number.isNaN(value) || value <= 0) {
    return 1;
  }
  return value;
};
