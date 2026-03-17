import type { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  iconBgClass: string;
  label: string;
  value: ReactNode;
  progressPct: number;
  progressBgClass: string;
  progressBarClass: string;
}

const StatCard = ({
  icon,
  iconBgClass,
  label,
  value,
  progressPct,
  progressBgClass,
  progressBarClass,
}: StatCardProps) => {
  return (
    <div className="lg:rounded-xl xl:rounded-2xl bg-card border border-gray-100 lg:p-3 xl:p-4 2xl:p-5 flex items-center gap-3 relative overflow-hidden">
      <div
        className={`lg:w-9 lg:h-9 xl:w-11 xl:h-11 2xl:w-13 2xl:h-13 shrink-0 rounded-full flex items-center justify-center ${iconBgClass}`}
      >
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="lg:text-[10px] xl:text-[11px] 2xl:text-xs text-muted-foreground font-medium uppercase tracking-wide">
          {label}
        </p>
        <p className="lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-foreground leading-tight">
          {value}
        </p>
        <div
          className={`mt-1 h-1 w-full rounded-full overflow-hidden ${progressBgClass}`}
        >
          <div
            className={`h-full rounded-full transition-all duration-500 ${progressBarClass}`}
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
