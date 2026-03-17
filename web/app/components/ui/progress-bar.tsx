interface ProgressBarProps {
  pct: number;
  barClass?: string;
  trackClass?: string;
  heightClass?: string;
  className?: string;
}

const ProgressBar = ({
  pct,
  barClass = "bg-primary",
  trackClass = "bg-muted/40",
  heightClass = "h-2",
  className,
}: ProgressBarProps) => {
  return (
    <div
      className={`w-full rounded-full overflow-hidden ${heightClass} ${trackClass} ${className ?? ""}`}
    >
      <div
        className={`h-full rounded-full transition-all duration-500 ${barClass}`}
        style={{ width: `${Math.min(Math.max(pct, 0), 100)}%` }}
      />
    </div>
  );
};

export default ProgressBar;
