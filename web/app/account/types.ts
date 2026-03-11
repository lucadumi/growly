export type AccountAnalytics = {
  stats: { label: string; value: string; tone: string }[];
  weekDays: { label: string; active: boolean }[];
  habitSlices: { name: string; successRate: number; color: string }[];
};
