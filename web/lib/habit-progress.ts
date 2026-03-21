export type ProgressByDayMap = Record<string, number>;

const padDate = (date: Date) => {
  const utcDate = new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
  );
  return utcDate.toISOString().split("T")[0];
};

export const formatDayKey = (date: Date): string => padDate(date);

export const buildDayKey = (year: number, month: number, day: number): string =>
  formatDayKey(new Date(Date.UTC(year, month, day)));

export const getUtcDayStart = (date: Date): Date =>
  new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
  );

export const getLocalDayKey = (): string => {
  const now = new Date();
  return buildDayKey(now.getFullYear(), now.getMonth(), now.getDate());
};

export const parseClientDate = (value: unknown): Date | null => {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return null;
  }
  const parsed = new Date(value + "T00:00:00.000Z");
  return isNaN(parsed.getTime()) ? null : parsed;
};
