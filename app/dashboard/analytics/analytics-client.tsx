"use client";

import {
  Activity,
  ArrowUpRight,
  Flame,
  ChessQueen,
  ChartPie,
  Target,
} from "lucide-react";
import type React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { TodoStatus } from "@prisma/client";

import PageHeading from "@/app/components/page-heading";

type TrendPoint = { label: string; value: number };

type RoutinePerformance = {
  id: string;
  name: string;
  anchor?: string | null;
  habitCount: number;
  completion: number;
};

type WeekdayPerformance = {
  label: string;
  value: number;
  dateLabel: string;
};

type Summary = {
  totalHabits: number;
  averageStreak: number;
  averageCompletion: number;
  averageSuccessRate: number;
  topStreak?: { name: string; streak: number };
  lookbackLabel: string;
  streakGoalDays?: number;
  streakGoalProgress?: number;
  streakGoalGap?: number | null;
  bestStreak: number;
};

type HabitStat = {
  id: string;
  name: string;
  streak: number;
  successRate: number;
  averageCompletion: number;
  cadence: string;
  goalAmount: number;
  goal: string;
  description?: string | null;
  dailyProgress: number;
};

type Props = {
  summary: Summary;
  trend: TrendPoint[];
  weekdayPerformance: WeekdayPerformance[];
  todoStatusCounts: Record<TodoStatus, number>;
  routinePerformance: RoutinePerformance[];
  habits: HabitStat[];
};

const buildAreaPath = (points: number[], width = 720, height = 200) => {
  if (points.length === 0) {
    return "";
  }

  if (points.length === 1) {
    const y = height - (points[0] / 100) * height;
    return `M0,${height} L0,${y} L${width},${y} L${width},${height} Z`;
  }

  const step = width / Math.max(points.length - 1, 1);
  const coords = points.map((value, index) => {
    const x = index * step;
    const y = height - (value / 100) * height;
    return `${x},${y}`;
  });

  return `M0,${height} L${coords.join(" ")} L${width},${height} Z`;
};

const routineBarClasses = [
  "bg-primary",
  "bg-[#41ab5d]",
  "bg-coral",
  "bg-blue-500",
  "bg-amber-400",
  "bg-purple-400",
];

const AnalyticsClient: React.FC<Props> = ({
  summary,
  trend,
  weekdayPerformance,
  routinePerformance,
  habits,
  todoStatusCounts = {
    PLANNED: 0,
    IN_PROGRESS: 0,
    COMPLETED: 0,
    MISSED: 0,
  },
}) => {
  const chartAreaRef = useRef<HTMLDivElement>(null);
  const [chartWidth, setChartWidth] = useState(820);
  const [chartHeight, setChartHeight] = useState(320);
  const routineChartRef = useRef<HTMLDivElement>(null);
  const [, setRoutineChartWidth] = useState(820);
  const marginLeft = 60;
  const marginRight = 20;
  const marginTop = 20;
  const marginBottom = 28;

  const innerWidth = chartWidth - marginLeft - marginRight;
  const innerHeight = chartHeight - marginTop - marginBottom;
  const yTicks = [0, 25, 50, 75, 100];
  const xLabelOffset = 18;
  const axisColor = "rgba(100,116,139,0.7)";
  const gridColor = "rgba(148,163,184,0.55)";
  const gridDashColor = "rgba(148,163,184,0.4)";

  const xPositions = useMemo(
    () =>
      trend.map(
        (_, index) =>
          marginLeft +
          (trend.length > 1
            ? (index / (trend.length - 1)) * innerWidth
            : innerWidth / 2),
      ),
    [trend, innerWidth],
  );

  const trendValues = trend.map((point) => point.value);
  const areaPath = useMemo(
    () => buildAreaPath(trendValues, innerWidth, innerHeight),
    [trendValues, innerWidth, innerHeight],
  );

  const currentWeekLabel = useMemo(() => {
    if (weekdayPerformance.length === 0) {
      return "";
    }
    const startLabel = weekdayPerformance[0].dateLabel;
    const endLabel =
      weekdayPerformance[weekdayPerformance.length - 1].dateLabel;
    return startLabel === endLabel
      ? `Week of ${startLabel}`
      : `Week of ${startLabel} — ${endLabel}`;
  }, [weekdayPerformance]);

  useEffect(() => {
    const updateSize = () => {
      if (chartAreaRef.current) {
        const { clientWidth, clientHeight } = chartAreaRef.current;
        setChartWidth(Math.max(320, clientWidth));
        setChartHeight(Math.max(260, clientHeight));
      }
    };

    updateSize();

    const resizeObserver = new ResizeObserver(() => updateSize());
    const areaElement = chartAreaRef.current;
    if (areaElement) {
      resizeObserver.observe(areaElement);
    }

    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const updateRoutineWidth = () => {
      if (routineChartRef.current) {
        setRoutineChartWidth(
          Math.max(360, routineChartRef.current.clientWidth),
        );
      }
    };

    updateRoutineWidth();

    const resizeObserver = new ResizeObserver(() => updateRoutineWidth());
    const routineElement = routineChartRef.current;
    if (routineElement) {
      resizeObserver.observe(routineElement);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const todayDateLabel = useMemo(
    () =>
      new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
      }).format(new Date()),
    [],
  );

  const todoStatusMeta: Record<
    TodoStatus,
    { label: string; color: string; subtle: string }
  > = {
    PLANNED: {
      label: "Planned",
      color: "#6366F1",
      subtle: "rgba(99,102,241,0.18)",
    },
    IN_PROGRESS: {
      label: "In Progress",
      color: "#F59E0B",
      subtle: "rgba(245,158,11,0.18)",
    },
    COMPLETED: {
      label: "Completed",
      color: "#10B981",
      subtle: "rgba(16,185,129,0.18)",
    },
    MISSED: {
      label: "Missed",
      color: "#EF4444",
      subtle: "rgba(239,68,68,0.18)",
    },
  };

  const todoTotal = Object.values(todoStatusCounts).reduce(
    (sum, count) => sum + (count ?? 0),
    0,
  );

  const todoSegments = (
    ["PLANNED", "IN_PROGRESS", "COMPLETED", "MISSED"] as TodoStatus[]
  ).map((status) => {
    const count = todoStatusCounts[status] ?? 0;
    const percent = todoTotal > 0 ? (count / todoTotal) * 100 : 0;
    return { status, count, percent };
  });

  let cursor = 0;
  const pieGradient = todoSegments
    .filter((segment) => segment.percent > 0)
    .map((segment) => {
      const start = cursor;
      const end = cursor + segment.percent;
      cursor = end;
      return `${todoStatusMeta[segment.status].color} ${start}% ${end}%`;
    })
    .join(", ");

  return (
    <main className="relative lg:px-4 xl:px-8 2xl:px-28 lg:pt-18 xl:pt-24 2xl:pt-28 lg:pb-8 xl:pb-12 2xl:pb-16 min-h-screen w-full bg-card text-foreground overflow-hidden">
      <div className="lg:space-y-5 xl:space-y-7">
        <PageHeading
          badgeLabel="Analytics"
          title="Momentum Observatory"
          description="Visualize streaks, momentum, and the habits that keep you moving."
        />

        <section className="grid lg:grid-cols-4 lg:gap-3 xl:gap-4">
          <div className="rounded-2xl bg-primary text-background lg:p-3 xl:p-4 flex flex-col justify-between gap-2">
            <div className="flex items-start justify-between">
              <div className="flex flex-col justify-between h-full">
                <p className="lg:text-[9px] xl:text-[11px] 2xl:text-xs font-semibold uppercase tracking-[0.16em]">
                  Active streak
                </p>
                <h3 className="lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
                  {summary.averageStreak}d
                </h3>
                <p className="lg:text-[11px] xl:text-xs 2xl:text-sm">
                  Average streak across {summary.totalHabits} habits
                </p>
              </div>
              <div className="lg:w-9 lg:h-9 xl:h-10 xl:w-10 2xl:h-11 2xl:w-11 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                <Flame className="lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
              </div>
            </div>
            {summary.streakGoalDays && summary.streakGoalDays > 0 && (
              <div className="lg:space-y-1 xl:space-y-1.5">
                <div className="flex items-center justify-between lg:text-[9px] xl:text-[10px]">
                  <span className="flex items-center gap-1">
                    <Target className="w-2.5 h-2.5" />
                    Goal: {summary.streakGoalDays}d
                  </span>
                  <span className="font-semibold">
                    {summary.streakGoalProgress ?? 0}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full lg:h-1 xl:h-1.5">
                  <div
                    className="h-full rounded-full bg-muted-foreground transition-all duration-500"
                    style={{ width: `${summary.streakGoalProgress ?? 0}%` }}
                  />
                </div>
                {summary.streakGoalGap != null && summary.streakGoalGap > 0 && (
                  <p className="lg:text-[9px] xl:text-[10px]">
                    {summary.streakGoalGap}d to go
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="rounded-2xl bg-[#41ab5d] text-white lg:p-3 xl:p-4 flex items-start justify-between">
            <div className="flex flex-col justify-between h-full">
              <p className="lg:text-[9px] xl:text-[11px] font-semibold uppercase tracking-[0.16em]">
                Consistency
              </p>
              <h3 className="lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
                {summary.averageSuccessRate}%
              </h3>
              <p className="lg:text-[11px] xl:text-xs 2xl:text-sm">
                Completion across {summary.lookbackLabel}
              </p>
            </div>
            <div className="lg:h-9 lg:w-9 xl:h-10 xl:w-10 2xl:h-11 2xl:w-11 rounded-full bg-black/20 flex items-center justify-center">
              <Activity className="lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
            </div>
          </div>

          <div className="rounded-2xl bg-coral text-white lg:p-3 xl:p-4 flex items-start justify-between">
            <div className="flex flex-col justify-between h-full">
              <p className="lg:text-[11px] xl:text-[11px] 2xl:text-xs font-semibold uppercase tracking-[0.16em]">
                Completion lift
              </p>
              <h3 className="lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
                {summary.averageCompletion}%
              </h3>
              <p className="lg:text-[11px] xl:text-xs 2xl:text-sm">
                Average daily completion
              </p>
            </div>
            <div className="lg:w-9 lg:h-9 xl:h-10 xl:w-10 2xl:h-11 2xl:w-11 rounded-full bg-black/20 flex items-center justify-center">
              <ArrowUpRight className="lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
            </div>
          </div>

          <div className="rounded-2xl bg-blue-500 text-white lg:p-3 xl:p-4 flex items-start justify-between">
            <div className="flex flex-col justify-between h-full">
              <p className="lg:text-[9px] xl:text-[11px] 2xl:text-xs font-semibold uppercase tracking-[0.16em]">
                Leader
              </p>
              <h3 className="lg:text-base xl:text-lg 2xl:text-xl font-semibold">
                {summary.topStreak?.name ?? "Waiting for data"}
              </h3>
              <p className="lg:text-[11px] xl:text-xs 2xl:text-sm">
                {summary.topStreak
                  ? `${summary.topStreak.streak} day streak`
                  : "Log habits to start a streak"}
              </p>
            </div>
            <div className="lg:w-9 lg:h-9 xl:h-10 xl:w-10 2xl:h-11 2xl:w-11 rounded-full bg-black/20 flex items-center justify-center">
              <ChessQueen className="lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-3 lg:gap-4 xl:gap-6 items-stretch">
          <div className="col-span-2 flex flex-col h-full">
            <div className="flex items-start justify-between lg:mb-3 xl:mb-4">
              <div>
                <h3 className="lg:text-base xl:text-lg 2xl:text-xl font-semibold">
                  Momentum curve
                </h3>
                <p className="lg:text-[11px] xl:text-xs 2xl:text-sm text-muted-foreground">
                  Completion over time, weighted by all habits.
                </p>
              </div>
              <div className="lg:text-[8px] xl:text-[10px] 2xl:text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {summary.lookbackLabel}
              </div>
            </div>

            <div className="relative flex-1 overflow-hidden flex flex-col lg:gap-2 xl:gap-3 lg:flex-none lg:h-[500px] xl:flex-1">
              <div ref={chartAreaRef} className="relative flex-1">
                <svg
                  viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Completion trend area chart"
                  className="w-full h-full"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="trendGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#f8a84b"
                        stopOpacity="0.35"
                      />
                    </linearGradient>
                    <linearGradient
                      id="strokeGradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#f8a84b" />
                      <stop offset="50%" stopColor="#f8a84b" />
                      <stop offset="100%" stopColor="#f8a84b" />
                    </linearGradient>
                  </defs>

                  <line
                    x1={marginLeft}
                    y1={chartHeight - marginBottom}
                    x2={chartWidth - marginRight}
                    y2={chartHeight - marginBottom}
                    stroke={axisColor}
                    strokeWidth="2"
                  />
                  <line
                    x1={marginLeft}
                    y1={marginTop}
                    x2={marginLeft}
                    y2={chartHeight - marginBottom}
                    stroke={axisColor}
                    strokeWidth="2"
                  />
                  {xPositions.map((x, index) => (
                    <line
                      key={`${trend[index]?.label ?? index}-grid`}
                      x1={x}
                      x2={x}
                      y1={marginTop}
                      y2={chartHeight - marginBottom}
                      stroke={gridDashColor}
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                  ))}
                  {yTicks.map((tick) => {
                    const y =
                      marginTop + innerHeight - (tick / 100) * innerHeight;
                    return (
                      <g key={tick}>
                        <line
                          x1={marginLeft}
                          x2={chartWidth - marginRight}
                          y1={y}
                          y2={y}
                          stroke={gridColor}
                          strokeWidth="1.5"
                        />
                        <text
                          x={marginLeft - 10}
                          y={y + 4}
                          textAnchor="end"
                          className="lg:text-[8px] xl:text-[10px] fill-muted-foreground"
                        >
                          {tick}%
                        </text>
                      </g>
                    );
                  })}

                  <g transform={`translate(${marginLeft} ${marginTop})`}>
                    {areaPath ? (
                      <path
                        d={areaPath}
                        fill="url(#trendGradient)"
                        stroke="url(#strokeGradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    ) : (
                      <rect
                        x="0"
                        y="0"
                        width={innerWidth}
                        height={innerHeight}
                        fill="url(#trendGradient)"
                        opacity="0.35"
                      />
                    )}
                  </g>

                  {trend.map((point, index) => {
                    const x = xPositions[index];
                    const y =
                      marginTop +
                      innerHeight -
                      (point.value / 100) * innerHeight;
                    const isLast = index === trend.length - 1;
                    return (
                      <g key={point.label}>
                        {isLast && (
                          <circle
                            cx={x}
                            cy={y}
                            r={11}
                            fill="url(#strokeGradient)"
                            opacity="0.18"
                          />
                        )}
                        <circle
                          cx={x}
                          cy={y}
                          r={isLast ? 7 : 6}
                          fill="white"
                          stroke="url(#strokeGradient)"
                          strokeWidth={isLast ? 3.5 : 3}
                        />
                        <text
                          x={x}
                          y={y - 14}
                          textAnchor="middle"
                          className={`fill-muted-foreground ${isLast ? "lg:text-[9px] xl:text-[11px] font-semibold" : "lg:text-[8px] xl:text-[10px]"}`}
                        >
                          {point.value}%
                        </text>
                        <text
                          x={x}
                          y={chartHeight - marginBottom + xLabelOffset}
                          textAnchor="middle"
                          dominantBaseline="hanging"
                          className="lg:text-[8px] xl:text-[10px] fill-muted-foreground"
                        >
                          {point.label}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>

          <div className="lg:space-y-3 xl:space-y-4">
            <div className="flex flex-col lg:gap-3 xl:gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="lg:text-sm xl:text-base 2xl:text-lg font-semibold">
                    Weekday rhythm
                  </h3>
                  <p className="lg:text-[11px] xl:text-xs text-muted-foreground">
                    {currentWeekLabel}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-7 lg:gap-4 xl:gap-3 lg:mt-1.5 xl:mt-2">
                {weekdayPerformance.map((day) => {
                  const barHeight = Math.min(
                    100,
                    Math.max(0, Math.round(day.value * 100)),
                  );
                  const isToday = day.dateLabel === todayDateLabel;
                  const barColor =
                    day.value >= 0.75
                      ? "bg-green-500"
                      : day.value >= 0.5
                        ? "bg-secondary/90"
                        : day.value >= 0.25
                          ? "bg-amber-400"
                          : barHeight > 0
                            ? "bg-rose-400"
                            : "bg-gray-200";
                  return (
                    <div
                      key={day.label}
                      className="flex flex-col items-center lg:gap-1 xl:gap-2 text-center"
                    >
                      <div
                        className={`lg:h-24 xl:h-28 w-full rounded-full bg-card/40 overflow-hidden flex items-end transition-all ${isToday ? "ring-2 ring-primary" : "border border-gray-100"}`}
                      >
                        <div
                          className={`w-full ${barColor} transition-all duration-500`}
                          style={{ height: `${barHeight}%` }}
                        />
                      </div>
                      <div
                        className={`lg:text-[9px] xl:text-[11px] 2xl:text-xs font-semibold ${isToday ? "text-primary" : ""}`}
                      >
                        {day.label}
                      </div>
                      <div className="lg:text-[9px] xl:text-[11px] 2xl:text-xs text-muted-foreground">
                        {day.dateLabel}
                      </div>
                      <div
                        className={`lg:text-[9px] xl:text-[11px] 2xl:text-xs font-semibold ${isToday ? "text-primary" : "text-muted-foreground"}`}
                      >
                        {barHeight}%
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between lg:mb-2 xl:mb-4">
                <div>
                  <h3 className="lg:text-sm xl:text-base 2xl:text-lg font-semibold">
                    Status pie
                  </h3>
                  <p className="lg:text-[9px] xl:text-[11px] 2xl:text-xs text-muted-foreground">
                    Completion vs in-flight tasks
                  </p>
                </div>
                <div className="lg:w-8 lg:h-8 xl:h-9 xl:w-9 2xl:h-10 2xl:w-10 rounded-full bg-card/30 flex items-center justify-center">
                  <ChartPie className="lg:w-3 lg:h-3 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 text-primary" />
                </div>
              </div>

              <div className="flex items-center lg:gap-4 xl:gap-6 lg:pt-4 xl:pt-6">
                <div className="relative lg:h-36 lg:w-36 xl:h-52 xl:w-52 shrink-0">
                  <div
                    className="h-full w-full rounded-full"
                    style={{
                      background: pieGradient
                        ? `conic-gradient(${pieGradient})`
                        : "radial-gradient(circle, #f4f4f5 0%, #e5e7eb 100%)",
                    }}
                  />
                  <div className="absolute inset-4 rounded-full bg-white flex flex-col items-center justify-center text-center">
                    <p className="lg:text-[9px] xl:text-[11px] 2xl:text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      Total
                    </p>
                    <p className="lg:text-lg xl:text-xl 2xl:text-2xl font-bold">
                      {todoTotal}
                    </p>
                    <p className="lg:text-[9px] xl:text-[11px] 2xl:text-xs text-muted-foreground">
                      todos
                    </p>
                  </div>
                </div>

                <div className="flex flex-col lg:gap-2 xl:gap-3 flex-1">
                  {todoSegments.map((segment) => {
                    const meta = todoStatusMeta[segment.status];
                    return (
                      <div
                        key={segment.status}
                        className="flex justify-between items-center rounded-2xl bg-card lg:pl-3 xl:pl-4 lg:pr-2 xl:pr-3 lg:py-1 xl:py-2 border border-gray-100"
                      >
                        <p className="lg:text-[11px] xl:text-xs 2xl:text-sm font-semibold">
                          {meta.label}
                        </p>
                        <div className="flex items-center lg:gap-1 xl:gap-1.5">
                          <div
                            className="rounded-full flex items-center justify-center lg:px-2 lg:py-0.5 xl:py-1 lg:text-[8px] xl:text-[11px] 2xl:text-xs font-bold"
                            style={{
                              background: meta.subtle,
                              color: meta.color,
                            }}
                          >
                            {Math.round(segment.percent)}%
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-3 lg:gap-4 xl:gap-6">
          <div>
            <div className="flex items-start justify-between lg:mb-3 xl:mb-4">
              <div>
                <h3 className="lg:text-base xl:text-lg 2xl:text-xl font-semibold">
                  Routines
                </h3>
                <p className="lg:text-[11px] xl:text-xs 2xl:text-sm text-muted-foreground">
                  Average completion, {summary.lookbackLabel.toLowerCase()}
                </p>
              </div>
            </div>
            {routinePerformance.length === 0 ? (
              <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-white/70 lg:px-3 xl:px-4 lg:py-4 xl:py-5 lg:text-[11px] xl:text-xs text-muted-foreground">
                No routines with habits yet.
              </div>
            ) : (
              <div ref={routineChartRef} className="lg:space-y-3 xl:space-y-4">
                {routinePerformance.map((routine, index) => (
                  <div key={routine.id} className="lg:space-y-1 xl:space-y-1.5">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="lg:text-xs xl:text-sm font-semibold">
                          {routine.name}
                        </p>
                        <p className="lg:text-[9px] xl:text-[11px] text-muted-foreground">
                          {routine.anchor ? `${routine.anchor} · ` : ""}
                          {routine.habitCount} habit
                          {routine.habitCount !== 1 ? "s" : ""}
                        </p>
                      </div>
                      <span className="lg:text-xs xl:text-sm font-bold shrink-0">
                        {routine.completion}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full lg:h-1.5 xl:h-2">
                      <div
                        className={`h-full ${routineBarClasses[index % routineBarClasses.length]} rounded-full transition-all duration-500`}
                        style={{ width: `${routine.completion}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="col-span-2">
            <div className="flex items-start justify-between lg:mb-3 xl:mb-4">
              <div>
                <h3 className="lg:text-base xl:text-lg 2xl:text-xl font-semibold">
                  Habit leaderboard
                </h3>
                <p className="lg:text-[11px] xl:text-xs 2xl:text-sm text-muted-foreground">
                  Ranked by streak · success rate over{" "}
                  {summary.lookbackLabel.toLowerCase()}
                </p>
              </div>
            </div>
            {habits.length === 0 ? (
              <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-white/70 lg:px-3 xl:px-4 lg:py-4 xl:py-5 lg:text-[11px] xl:text-xs text-muted-foreground">
                No habits yet. Start tracking to see the leaderboard.
              </div>
            ) : (
              <div className="lg:space-y-2 xl:space-y-2.5 bg-gray-100 p-3 rounded-3xl">
                {[...habits]
                  .sort(
                    (a, b) =>
                      b.streak - a.streak || b.successRate - a.successRate,
                  )
                  .slice(0, 3)
                  .map((habit, index) => (
                    <div
                      key={habit.id}
                      className="flex items-center lg:gap-2 xl:gap-3 rounded-2xl bg-card border border-gray-100 lg:px-3 xl:px-4 lg:py-2 xl:py-2.5"
                    >
                      <span
                        className={`shrink-0 lg:w-5 lg:h-5 xl:w-6 xl:h-6 rounded-full flex items-center justify-center lg:text-[9px] xl:text-[10px] font-bold ${
                          index === 0
                            ? "bg-amber-400 text-white"
                            : index === 1
                              ? "bg-gray-300 text-gray-700"
                              : index === 2
                                ? "bg-amber-700/60 text-white"
                                : "bg-gray-100 text-muted-foreground"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <p className="flex-1 lg:text-xs xl:text-sm font-medium truncate">
                        {habit.name}
                      </p>
                      <span className="shrink-0 rounded-full lg:text-[8px] xl:text-[9px] font-semibold uppercase tracking-wide text-muted-foreground lg:px-1.5 xl:px-2 lg:py-0.5 xl:py-1 bg-gray-100">
                        {habit.cadence}
                      </span>
                      <div className="shrink-0 flex items-center lg:gap-0.5 xl:gap-1">
                        <Flame className="lg:w-2.5 lg:h-2.5 xl:w-3 xl:h-3 text-amber-500" />
                        <span className="lg:text-[10px] xl:text-xs font-semibold">
                          {habit.streak}d
                        </span>
                      </div>
                      <div className="shrink-0 flex items-center lg:gap-1 xl:gap-1.5 lg:w-16 xl:w-20">
                        <div className="flex-1 bg-gray-100 rounded-full lg:h-1 xl:h-1.5">
                          <div
                            className="h-full bg-[#41ab5d] rounded-full transition-all duration-500"
                            style={{ width: `${habit.successRate}%` }}
                          />
                        </div>
                        <span className="lg:text-[9px] xl:text-[10px] text-muted-foreground font-medium w-6 text-right">
                          {habit.successRate}%
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AnalyticsClient;
