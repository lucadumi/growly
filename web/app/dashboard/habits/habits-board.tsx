"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Check,
  Flame,
  LayoutGrid,
  List,
  Moon,
  Plus,
  Sun,
} from "lucide-react";

const TIME_WINDOW_ICONS: Record<
  string,
  { icon: React.ComponentType<{ className?: string }>; className: string }
> = {
  Morning: { icon: Sun, className: "text-yellow-500" },
  Workday: { icon: Briefcase, className: "text-blue-500" },
  Evening: { icon: Moon, className: "text-indigo-400" },
};

import HabitForm from "./components/habit-form";
import HabitSidebar from "./components/habit-sidebar";
import SlideOver from "@/app/components/ui/slide-over";
import PageHeading from "@/app/components/page-heading";
import HabitsTabs from "./components/habits-tabs";
import { formatDayKey, type ProgressByDayMap } from "@/lib/habit-progress";
import {
  addDays,
  shouldShowHabitOnDate,
  startOfWeek,
} from "@/app/dashboard/habits/components/habits-week-utils";
import type { Habit, UnitCategory } from "./types";
import { maskToDays } from "@/lib/cadence";
import {
  patchHabitProgress,
  resetHabitProgress,
} from "./actions/habit-progress";
import { useXP } from "@/app/context/xp-context";
import { XP_PER_HABIT } from "@/lib/xp";

type ProgressEntry = {
  habitId: string;
  date: string;
  progress: number;
};

type SerializedRoutine = {
  id: string;
  name: string;
  habitIds: string[];
};

type HabitsBoardProps = {
  userName?: string | null;
  habits: Habit[];
  progressByDay: ProgressByDayMap;
  progressEntries: ProgressEntry[];
  routines: SerializedRoutine[];
};

const PALETTE = [
  {
    dot: "bg-primary",
    cellFull: "bg-primary/75",
    cellPartial: "bg-primary/25",
    text: "text-primary",
    bar: "bg-primary",
    card: "bg-primary/15 border-transparent",
    ring: "ring-primary/25",
  },
  {
    dot: "bg-coral",
    cellFull: "bg-coral/75",
    cellPartial: "bg-coral/25",
    text: "text-coral",
    bar: "bg-coral",
    card: "bg-coral/15 border-transparent",
    ring: "ring-coral/25",
  },
  {
    dot: "bg-green-soft",
    cellFull: "bg-green-soft/75",
    cellPartial: "bg-green-soft/25",
    text: "text-green-soft",
    bar: "bg-green-soft",
    card: "bg-green-soft/15 border-transparent",
    ring: "ring-green-soft/25",
  },
  {
    dot: "bg-yellow-soft",
    cellFull: "bg-yellow-soft/75",
    cellPartial: "bg-yellow-soft/30",
    text: "text-yellow-soft",
    bar: "bg-yellow-soft",
    card: "bg-yellow-soft/15 border-transparent",
    ring: "ring-yellow-soft/30",
  },
  {
    dot: "bg-accent",
    cellFull: "bg-accent/75",
    cellPartial: "bg-accent/25",
    text: "text-accent",
    bar: "bg-accent",
    card: "bg-accent/15 border-transparent",
    ring: "ring-accent/25",
  },
  {
    dot: "bg-violet-400",
    cellFull: "bg-violet-400/75",
    cellPartial: "bg-violet-400/25",
    text: "text-violet-400",
    bar: "bg-violet-400",
    card: "bg-violet-400/15 border-transparent",
    ring: "ring-violet-400/25",
  },
  {
    dot: "bg-teal-400",
    cellFull: "bg-teal-400/75",
    cellPartial: "bg-teal-400/25",
    text: "text-teal-400",
    bar: "bg-teal-400",
    card: "bg-teal-400/15 border-transparent",
    ring: "ring-teal-400/25",
  },
  {
    dot: "bg-orange-400",
    cellFull: "bg-orange-400/75",
    cellPartial: "bg-orange-400/25",
    text: "text-orange-400",
    bar: "bg-orange-400",
    card: "bg-orange-400/15 border-transparent",
    ring: "ring-orange-400/25",
  },
  {
    dot: "bg-pink-400",
    cellFull: "bg-pink-400/75",
    cellPartial: "bg-pink-400/25",
    text: "text-pink-400",
    bar: "bg-pink-400",
    card: "bg-pink-400/15 border-transparent",
    ring: "ring-pink-400/25",
  },
  {
    dot: "bg-sky-400",
    cellFull: "bg-sky-400/75",
    cellPartial: "bg-sky-400/25",
    text: "text-sky-400",
    bar: "bg-sky-400",
    card: "bg-sky-400/15 border-transparent",
    ring: "ring-sky-400/25",
  },
  {
    dot: "bg-rose-500",
    cellFull: "bg-rose-500/75",
    cellPartial: "bg-rose-500/25",
    text: "text-rose-500",
    bar: "bg-rose-500",
    card: "bg-rose-500/15 border-transparent",
    ring: "ring-rose-500/25",
  },
  {
    dot: "bg-cyan-400",
    cellFull: "bg-cyan-400/75",
    cellPartial: "bg-cyan-400/25",
    text: "text-cyan-400",
    bar: "bg-cyan-400",
    card: "bg-cyan-400/15 border-transparent",
    ring: "ring-cyan-400/25",
  },
];

const normalizeGoal = (value?: number | null): number => {
  if (typeof value !== "number" || Number.isNaN(value) || value <= 0) return 1;
  return value;
};

const buildProgressByHabit = (entries: ProgressEntry[]) => {
  const map = new Map<string, Map<string, number>>();
  for (const entry of entries) {
    const dayKey = formatDayKey(new Date(entry.date));
    if (!map.has(entry.habitId)) map.set(entry.habitId, new Map());
    map.get(entry.habitId)!.set(dayKey, entry.progress);
  }
  return map;
};

const averageForDays = (days: Date[], byDay: ProgressByDayMap) => {
  if (days.length === 0) return 0;
  return (
    days.reduce((acc, d) => acc + (byDay[formatDayKey(d)] ?? 0), 0) /
    days.length
  );
};

const fmt = (value: number) =>
  value % 1 === 0 ? String(value) : value.toFixed(1);

type Period = "week" | "month" | "year";

export default function HabitsBoard({
  habits,
  progressByDay,
  progressEntries,
  routines,
}: HabitsBoardProps) {
  const today = new Date();
  const todayKey = formatDayKey(today);

  const router = useRouter();
  const { addXP, level, todayXP } = useXP();
  const [period, setPeriod] = useState<Period>("week");
  const [offset, setOffset] = useState(0);
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [disableViewTransitions, setDisableViewTransitions] = useState(false);
  const [showAddHabit, setShowAddHabit] = useState(false);
  const [addHabitVisible, setAddHabitVisible] = useState(false);

  const openAddHabit = () => {
    setShowAddHabit(true);
    requestAnimationFrame(() => setAddHabitVisible(true));
  };
  const closeAddHabit = () => {
    setAddHabitVisible(false);
    setTimeout(() => setShowAddHabit(false), 300);
  };

  const [selectedHabit, setSelectedHabit] = useState<Habit | null>(null);
  const [showEditHabit, setShowEditHabit] = useState(false);
  const [editHabitVisible, setEditHabitVisible] = useState(false);

  const [isDeletingHabit, setIsDeletingHabit] = useState(false);
  const [selectedRoutineId, setSelectedRoutineId] = useState<string | null>(
    null,
  );

  useEffect(() => {
    if (showAddHabit || showEditHabit) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [showAddHabit, showEditHabit]);

  const openEditHabit = (habit: Habit) => {
    setSelectedHabit(habit);
    setShowEditHabit(true);
    requestAnimationFrame(() => setEditHabitVisible(true));
  };
  const closeEditHabit = () => {
    setEditHabitVisible(false);
    setTimeout(() => {
      setShowEditHabit(false);
      setSelectedHabit(null);
    }, 300);
  };

  const handleDeleteHabit = async () => {
    if (!selectedHabit) return;
    if (!window.confirm("Delete this habit? This cannot be undone.")) return;
    setIsDeletingHabit(true);
    try {
      const res = await fetch(`/api/habits/${selectedHabit.id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        closeEditHabit();
        router.refresh();
      }
    } finally {
      setIsDeletingHabit(false);
    }
  };

  const [localProgress, setLocalProgress] = useState<Record<string, number>>(
    () => {
      const map: Record<string, number> = {};
      for (const e of progressEntries) {
        if (formatDayKey(new Date(e.date)) === todayKey) {
          map[e.habitId] = e.progress;
        }
      }
      return map;
    },
  );

  const [inputValues, setInputValues] = useState<Record<string, string>>({});
  const [pending, setPending] = useState<Record<string, boolean>>({});

  const progressByHabit = buildProgressByHabit(progressEntries);

  const getProgress = (habitId: string, dayKey: string): number => {
    if (dayKey === todayKey) {
      return (
        localProgress[habitId] ?? progressByHabit.get(habitId)?.get(dayKey) ?? 0
      );
    }
    return progressByHabit.get(habitId)?.get(dayKey) ?? 0;
  };

  // Formatters
  const weekdayFmt = new Intl.DateTimeFormat("en-US", { weekday: "short" });
  const monthDayFmt = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  });

  // Period-specific display config
  const baseWeekStart = startOfWeek(today);

  const displayConfig = (() => {
    if (period === "week") {
      const ws = addDays(baseWeekStart, offset * 7);
      const days = Array.from({ length: 7 }, (_, i) => addDays(ws, i));
      return {
        label: `${monthDayFmt.format(days[0]!)} – ${monthDayFmt.format(days[6]!)}`,
        days,
        months: null as null | Array<{ label: string; days: Date[] }>,
      };
    }
    if (period === "month") {
      const dm = new Date(today.getFullYear(), today.getMonth() + offset, 1);
      const daysInM = new Date(
        dm.getFullYear(),
        dm.getMonth() + 1,
        0,
      ).getDate();
      const days = Array.from(
        { length: daysInM },
        (_, i) => new Date(dm.getFullYear(), dm.getMonth(), i + 1),
      );
      return {
        label: dm.toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        }),
        days,
        months: null as null | Array<{ label: string; days: Date[] }>,
      };
    }
    // year
    const yr = today.getFullYear() + offset;
    const months = Array.from({ length: 12 }, (_, m) => {
      const daysInM = new Date(yr, m + 1, 0).getDate();
      return {
        label: new Date(yr, m, 1).toLocaleDateString("en-US", {
          month: "short",
        }),
        days: Array.from({ length: daysInM }, (_, d) => new Date(yr, m, d + 1)),
      };
    });
    return { label: String(yr), days: null, months };
  })();

  const triggerViewSwitch = (update: () => void) => {
    setDisableViewTransitions(true);
    update();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setDisableViewTransitions(false));
    });
  };

  const handlePeriodChange = (p: Period) => {
    triggerViewSwitch(() => {
      setPeriod(p);
      setOffset(0);
    });
  };

  const isCurrentPeriod = offset === 0;

  // Stats always use current week
  const statsWeekDays = Array.from({ length: 7 }, (_, i) =>
    addDays(baseWeekStart, i),
  );

  const activeToday = habits.filter((h) => shouldShowHabitOnDate(h, today));
  const completedToday = activeToday.filter((h) => {
    const progress =
      localProgress[h.id] ?? progressByHabit.get(h.id)?.get(todayKey) ?? 0;
    return progress >= normalizeGoal(h.goalAmount);
  }).length;
  const notStartedToday = activeToday.filter((h) => {
    const progress =
      localProgress[h.id] ?? progressByHabit.get(h.id)?.get(todayKey) ?? 0;
    return progress === 0;
  }).length;
  const todayPct =
    activeToday.length > 0
      ? Math.round((completedToday / activeToday.length) * 100)
      : 0;

  const weekAvg = averageForDays(statsWeekDays, progressByDay);
  const weekPct = Math.round(Math.max(0, Math.min(1, weekAvg)) * 100);
  const prevWeekDays = statsWeekDays.map((d) => addDays(d, -7));
  const prevWeekAvg = averageForDays(prevWeekDays, progressByDay);
  const prevWeekPct = Math.round(Math.max(0, Math.min(1, prevWeekAvg)) * 100);
  const hasPrevData = prevWeekDays.some(
    (d) => typeof progressByDay[formatDayKey(d)] === "number",
  );
  const delta = weekPct - prevWeekPct;
  const trendUp = delta >= 0;
  const trendLabel = hasPrevData
    ? `${trendUp ? "↑" : "↓"} ${Math.abs(delta)}% vs last week`
    : "No prior week data";
  const trendClass = hasPrevData
    ? trendUp
      ? "text-green-soft"
      : "text-coral"
    : "text-muted-foreground";

  // Period % for card header
  const allDisplayDays =
    displayConfig.days ?? displayConfig.months?.flatMap((m) => m.days) ?? [];
  const displayAvg = averageForDays(allDisplayDays, progressByDay);
  const displayPct = Math.round(Math.max(0, Math.min(1, displayAvg)) * 100);
  const periodLabel =
    period === "week"
      ? "this week"
      : period === "month"
        ? "this month"
        : "this year";

  // Board data for week / month (day-level cells)
  const boardHabits =
    (displayConfig.days ?? []).length > 0 || period !== "year"
      ? habits.map((habit, i) => {
          const palette = PALETTE[i % PALETTE.length]!;
          const goal = normalizeGoal(habit.goalAmount);
          const cells = (displayConfig.days ?? []).map((day) => {
            const key = formatDayKey(day);
            const progress = getProgress(habit.id, key);
            const ratio = Math.min(progress / goal, 1);
            const isActive = shouldShowHabitOnDate(habit, day);
            return { ratio, isActive, progress, key };
          });
          const activeDays = cells.filter((c) => c.isActive).length;
          const completedDays = cells.filter(
            (c) => c.isActive && c.ratio >= 1,
          ).length;
          return {
            habit,
            palette,
            cells,
            total: `${completedDays}/${activeDays}`,
          };
        })
      : [];

  // Board data for year (month-level aggregate cells)
  const yearBoardHabits =
    period === "year" && displayConfig.months
      ? habits.map((habit, i) => {
          const palette = PALETTE[i % PALETTE.length]!;
          const goal = normalizeGoal(habit.goalAmount);
          const monthCells = displayConfig.months!.map((m) => {
            const activeDays = m.days.filter((d) =>
              shouldShowHabitOnDate(habit, d),
            );
            if (activeDays.length === 0) {
              return { ratio: 0, isActive: false, label: m.label };
            }
            const totalRatio = activeDays.reduce((sum, day) => {
              const key = formatDayKey(day);
              return (
                sum +
                Math.min(
                  (progressByHabit.get(habit.id)?.get(key) ?? 0) / goal,
                  1,
                )
              );
            }, 0);
            return {
              ratio: totalRatio / activeDays.length,
              isActive: true,
              label: m.label,
            };
          });
          const activeMonths = monthCells.filter((c) => c.isActive).length;
          const completedMonths = monthCells.filter(
            (c) => c.isActive && c.ratio >= 1,
          ).length;
          return {
            habit,
            palette,
            monthCells,
            total: `${completedMonths}/${activeMonths}`,
          };
        })
      : [];

  const isEmpty =
    period === "year" ? yearBoardHabits.length === 0 : boardHabits.length === 0;

  // Sidebar data — only habits scheduled for today
  const sidebarHabits = habits
    .filter((h) => shouldShowHabitOnDate(h, today))
    .map((habit, i) => {
      const palette = PALETTE[i % PALETTE.length]!;
      const goal = normalizeGoal(habit.goalAmount);
      const progress =
        localProgress[habit.id] ??
        progressByHabit.get(habit.id)?.get(todayKey) ??
        0;
      const pct = Math.min(Math.round((progress / goal) * 100), 100);
      const isComplete = progress >= goal;
      const unit = habit.goalUnit ?? "reps";
      return { habit, palette, goal, progress, pct, isComplete, unit };
    });

  // Handlers
  const handleAdd = async (habitId: string) => {
    const raw = inputValues[habitId] ?? "1";
    const amount = parseFloat(raw);
    if (!Number.isFinite(amount) || amount <= 0) return;
    const prev = localProgress[habitId] ?? 0;
    setLocalProgress((p) => ({ ...p, [habitId]: prev + amount }));
    setPending((p) => ({ ...p, [habitId]: true }));
    try {
      const result = await patchHabitProgress(habitId, amount);
      const newProgress =
        typeof result.dailyProgress === "number"
          ? result.dailyProgress
          : prev + amount;
      if (typeof result.dailyProgress === "number") {
        setLocalProgress((p) => ({
          ...p,
          [habitId]: result.dailyProgress!,
        }));
      }
      const habit = habits.find((h) => h.id === habitId);
      const goal = normalizeGoal(habit?.goalAmount);
      const wasComplete = prev >= goal;
      const isNowComplete = newProgress >= goal;
      if (isNowComplete && !wasComplete) {
        addXP(XP_PER_HABIT, "habit", {
          label: `${habit?.name ?? "Habit"} complete!`,
        });
      }
    } catch {
      setLocalProgress((p) => ({ ...p, [habitId]: prev }));
    } finally {
      setPending((p) => ({ ...p, [habitId]: false }));
    }
  };

  const handleReset = async (habitId: string) => {
    const prev = localProgress[habitId] ?? 0;
    setLocalProgress((p) => ({ ...p, [habitId]: 0 }));
    setPending((p) => ({ ...p, [habitId]: true }));
    try {
      await resetHabitProgress(habitId);
    } catch {
      setLocalProgress((p) => ({ ...p, [habitId]: prev }));
    } finally {
      setPending((p) => ({ ...p, [habitId]: false }));
    }
  };

  // Shared cell renderer
  const renderCell = (
    cellClass: string,
    ring: string,
    isToday: boolean,
    isInactive: boolean,
    isComplete: boolean,
    title: string,
    key: string,
    sizeClass = "h-8 w-8",
    iconClass = "h-4 w-4",
  ) => (
    <div key={key} className="flex justify-center" title={title}>
      <span
        className={`flex ${sizeClass} items-center justify-center rounded-md ${cellClass} ${isToday && !isInactive ? `ring-2 ring-offset-1 ${ring}` : ""}`}
      >
        {isComplete && <Check className={`${iconClass} text-white/90`} />}
      </span>
    </div>
  );

  return (
    <>
      <main className="relative lg:px-6 xl:px-8 2xl:px-28 lg:pt-14 xl:pt-20 2xl:pt-28 lg:pb-8 xl:pb-12 2xl:pb-16 min-h-screen w-full bg-card text-foreground overflow-hidden">
        <div className="lg:space-y-6 xl:space-y-8 lg:mb-6 xl:mb-8">
          <PageHeading
            badgeLabel="Your habits"
            title="Habit board"
            description="This board shows your current rhythm, streaks, and where you spend focus time."
          />
          <HabitsTabs active="habits" containerClassName="lg:gap-1 2xl:gap-2" />
        </div>

        <div className="mx-auto w-full">
          <div className="grid lg:gap-4 xl:gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            {/* ── Left: main board ── */}
            <section
              className={`min-w-0 space-y-5 ${disableViewTransitions ? "view-switching" : ""}`}
            >
              {/* Today progress bar */}
              <div className="rounded-2xl px-5 py-4 border border-gray-100 space-y-3 relative overflow-hidden">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-foreground">
                    {today.toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <div className="flex items-center gap-2">
                    {notStartedToday > 0 && todayPct < 100 && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                        {notStartedToday} not started
                      </span>
                    )}
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-xs font-semibold ${
                        todayPct >= 100
                          ? "bg-green-soft/20 text-green-soft"
                          : "bg-muted/60 text-muted-foreground"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${todayPct >= 100 ? "bg-green-soft" : "bg-muted-foreground"}`}
                      />
                      {completedToday}/{activeToday.length} done
                    </span>
                  </div>
                </div>
                <div className="h-2.5 w-full rounded-full bg-muted/40 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${todayPct >= 100 ? "bg-green-soft" : "bg-primary"}`}
                    style={{ width: `${todayPct}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className={trendClass}>{trendLabel}</span>
                  <div className="flex items-center gap-2">
                    {todayXP > 0 && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-0.5 text-[10px] font-bold text-yellow-600">
                        + {todayXP} XP
                      </span>
                    )}
                    <span className="text-primary font-bold">
                      {todayPct}% of today's goal
                    </span>
                  </div>
                </div>
              </div>

              {/* Toolbar */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-1 rounded-full bg-gray-200 p-1 text-xs font-semibold text-muted-foreground">
                  {(["Week", "Month", "Year"] as const).map((label) => {
                    const p = label.toLowerCase() as Period;
                    return (
                      <button
                        key={label}
                        type="button"
                        onClick={() => handlePeriodChange(p)}
                        className={`rounded-full px-4 py-2 transition ${
                          period === p
                            ? "bg-white text-foreground"
                            : "hover:text-foreground"
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
                <button
                  type="button"
                  onClick={openAddHabit}
                  className="inline-flex items-center gap-2 rounded-full bg-primary lg:px-3 xl:px-4 lg:py-1.5 xl:py-2 lg:text-[11px] xl:text-[12px] 2xl:text-[13px] font-semibold text-white transition hover:brightness-105 active:scale-95"
                >
                  <Plus className="h-4 w-4" />
                  Add Habit
                </button>
              </div>

              {/* Board card */}
              <div className="rounded-2xl bg-card overflow-hidden border-8 border-gray-100">
                {/* Card header */}
                <div className="flex items-center justify-between gap-4 px-5 pt-5 pb-4 border-b border-gray-100 bg-gray-100">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-bold text-foreground">
                        {displayConfig.label}
                      </div>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                        Lv. {level}
                      </span>
                    </div>
                    <div
                      className={`text-xs font-semibold flex items-center gap-1.5 ${trendClass}`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${trendClass.includes("green") ? "bg-green-soft" : trendClass.includes("coral") ? "bg-coral" : "bg-muted-foreground"}`}
                      />
                      {displayPct}% {periodLabel}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* View toggle – only for week */}
                    {period === "week" && (
                      <div className="flex items-center gap-0.5 rounded-full bg-muted/50 p-0.5">
                        <button
                          type="button"
                          onClick={() =>
                            triggerViewSwitch(() => setViewMode("list"))
                          }
                          aria-pressed={viewMode === "list"}
                          className={`grid h-7 w-7 place-items-center rounded-full transition ${viewMode === "list" ? "bg-white text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                        >
                          <List className="h-3.5 w-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            triggerViewSwitch(() => setViewMode("grid"))
                          }
                          aria-pressed={viewMode === "grid"}
                          className={`grid h-7 w-7 place-items-center rounded-full transition ${viewMode === "grid" ? "bg-white text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                        >
                          <LayoutGrid className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    )}

                    {/* Period navigation */}
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() =>
                          triggerViewSwitch(() => setOffset((o) => o - 1))
                        }
                        className="grid h-8 w-8 place-items-center rounded-full border border-gray-100 bg-white text-muted-foreground transition hover:border-gray-200 hover:text-foreground"
                        aria-label={`Previous ${period}`}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      {!isCurrentPeriod && (
                        <button
                          type="button"
                          onClick={() => triggerViewSwitch(() => setOffset(0))}
                          className="rounded-full border border-gray-100 bg-white px-3 py-1 text-xs font-semibold text-muted-foreground transition hover:border-gray-200 hover:text-foreground"
                        >
                          Today
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() =>
                          triggerViewSwitch(() => setOffset((o) => o + 1))
                        }
                        disabled={isCurrentPeriod}
                        className="grid h-8 w-8 place-items-center rounded-full border border-gray-100 bg-white text-muted-foreground transition hover:border-gray-200 hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label={`Next ${period}`}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Period progress bar */}
                <div className="px-5 py-2.5 border-b border-gray-50">
                  <div className="h-1.5 w-full rounded-full bg-muted/50 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-500"
                      style={{ width: `${displayPct}%` }}
                    />
                  </div>
                </div>

                {/* Content */}
                {isEmpty ? (
                  <div className="px-5 py-10 text-center">
                    <p className="text-sm font-semibold text-foreground">
                      No habits yet
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Create a habit to start tracking.
                    </p>
                  </div>
                ) : period === "year" ? (
                  /* ── Year view: habits as rows, months as columns ── */
                  <div className="px-5 py-5 space-y-4">
                    <div className="grid grid-cols-[148px_repeat(12,1fr)_52px] gap-1.5 text-xs font-semibold text-muted-foreground">
                      <span />
                      {displayConfig.months!.map((m) => (
                        <span key={m.label} className="text-center">
                          {m.label}
                        </span>
                      ))}
                      <span />
                    </div>
                    <div className="space-y-4">
                      {yearBoardHabits.map((row) => (
                        <div
                          key={row.habit.id}
                          className="grid grid-cols-[148px_repeat(12,1fr)_52px] items-center gap-1.5"
                        >
                          <button
                            type="button"
                            onClick={() => openEditHabit(row.habit)}
                            className="flex items-center gap-2 min-w-0 group text-left"
                            title="Edit habit"
                          >
                            <span
                              className={`h-2.5 w-2.5 shrink-0 rounded-full ${row.palette.dot}`}
                            />
                            <span className="truncate text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                              {row.habit.name}
                            </span>
                            {(row.habit.streak ?? 0) > 0 && (
                              <span className="shrink-0 inline-flex items-center gap-0.5 text-[10px] font-bold text-primary">
                                <Flame className="h-3 w-3" />
                                {row.habit.streak}
                              </span>
                            )}
                          </button>
                          {row.monthCells.map((cell) => {
                            const isComplete = cell.ratio >= 1;
                            const isPartial = cell.ratio > 0 && cell.ratio < 1;
                            const cellClass = !cell.isActive
                              ? "bg-muted/20"
                              : isComplete
                                ? row.palette.cellFull
                                : isPartial
                                  ? row.palette.cellPartial
                                  : "bg-muted/40";
                            return (
                              <div
                                key={cell.label}
                                className="flex justify-center"
                                title={
                                  !cell.isActive
                                    ? `${cell.label}: not scheduled`
                                    : `${cell.label}: ${Math.round(cell.ratio * 100)}% avg`
                                }
                              >
                                <span
                                  className={`flex h-8 w-8 items-center justify-center rounded-md ${cellClass}`}
                                >
                                  {isComplete && (
                                    <Check className="h-4 w-4 text-white/90" />
                                  )}
                                </span>
                              </div>
                            );
                          })}
                          <div className="text-right text-xs font-bold text-muted-foreground">
                            {row.total}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : period === "month" ? (
                  /* ── Month view: habits as rows, days as mini cells ── */
                  <div className="px-5 py-5 overflow-x-auto">
                    <div
                      style={{
                        minWidth: `${148 + (displayConfig.days?.length ?? 0) * 12 + 52}px`,
                      }}
                    >
                      {/* Day-of-month headers */}
                      <div
                        className="mb-3 gap-0.5 text-[10px] font-semibold text-muted-foreground"
                        style={{
                          display: "grid",
                          gridTemplateColumns: `148px repeat(${displayConfig.days?.length ?? 0}, minmax(12px, 1fr)) 52px`,
                        }}
                      >
                        <span />
                        {(displayConfig.days ?? []).map((day) => {
                          const key = formatDayKey(day);
                          const isToday = key === todayKey;
                          return (
                            <span
                              key={key}
                              className={`text-center ${isToday ? "text-primary font-bold" : ""}`}
                            >
                              {day.getDate()}
                            </span>
                          );
                        })}
                        <span />
                      </div>
                      {/* Habit rows */}
                      <div className="space-y-4">
                        {boardHabits.map((row) => (
                          <div
                            key={row.habit.id}
                            className="gap-0.5 items-center"
                            style={{
                              display: "grid",
                              gridTemplateColumns: `148px repeat(${displayConfig.days?.length ?? 0}, minmax(12px, 1fr)) 52px`,
                            }}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <span
                                className={`h-2.5 w-2.5 shrink-0 rounded-full ${row.palette.dot}`}
                              />
                              <span className="truncate text-xs font-semibold text-foreground">
                                {row.habit.name}
                              </span>
                              {(row.habit.streak ?? 0) > 0 && (
                                <span className="shrink-0 inline-flex items-center gap-0.5 text-[10px] font-bold text-primary">
                                  <Flame className="h-3 w-3" />
                                  {row.habit.streak}
                                </span>
                              )}
                            </div>
                            {row.cells.map((cell, idx) => {
                              const isToday = cell.key === todayKey;
                              const isComplete = cell.ratio >= 1;
                              const isPartial =
                                cell.ratio > 0 && cell.ratio < 1;
                              const isInactive = !cell.isActive;
                              const cellClass = isInactive
                                ? "bg-muted/20"
                                : isComplete
                                  ? row.palette.cellFull
                                  : isPartial
                                    ? row.palette.cellPartial
                                    : "bg-muted/40";
                              return renderCell(
                                cellClass,
                                row.palette.ring,
                                isToday,
                                isInactive,
                                isComplete,
                                isInactive
                                  ? "Not scheduled"
                                  : isComplete
                                    ? `${fmt(cell.progress)} – completed`
                                    : `${fmt(cell.progress)} logged`,
                                `${row.habit.id}-${idx}`,
                                "w-full max-w-6 aspect-square",
                                "h-3 w-3",
                              );
                            })}
                            <div className="text-right text-xs font-bold text-muted-foreground">
                              {row.total}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : viewMode === "list" ? (
                  /* ── Week list view: habits as rows, days as columns ── */
                  <div className="px-5 py-5 space-y-4">
                    <div className="grid grid-cols-[148px_repeat(7,1fr)_52px] gap-2 text-xs font-semibold text-muted-foreground">
                      <span />
                      {(displayConfig.days ?? []).map((day) => {
                        const key = formatDayKey(day);
                        const isToday = key === todayKey;
                        return (
                          <span
                            key={day.toISOString()}
                            className={`text-center ${isToday ? "text-primary font-bold" : ""}`}
                          >
                            {weekdayFmt.format(day)}
                          </span>
                        );
                      })}
                      <span />
                    </div>
                    <div className="space-y-4">
                      {boardHabits.map((row) => (
                        <div
                          key={row.habit.id}
                          className="grid grid-cols-[148px_repeat(7,1fr)_52px] items-center gap-2"
                        >
                          <button
                            type="button"
                            onClick={() => openEditHabit(row.habit)}
                            className="flex items-center gap-1.5 min-w-0 group text-left"
                            title={row.habit.description ?? "Edit habit"}
                          >
                            <span
                              className={`h-2.5 w-2.5 shrink-0 rounded-full ${row.palette.dot}`}
                            />
                            <span className="truncate text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                              {row.habit.name}
                            </span>
                            {(() => {
                              const tw = row.habit.timeWindow;
                              const meta = tw
                                ? (TIME_WINDOW_ICONS[tw] ?? null)
                                : null;
                              if (!meta) return null;
                              const Icon = meta.icon;
                              return (
                                <Icon
                                  className={`h-3 w-3 shrink-0 ${meta.className}`}
                                />
                              );
                            })()}
                            {(row.habit.streak ?? 0) > 0 && (
                              <span className="shrink-0 inline-flex items-center gap-0.5 text-[10px] font-bold text-primary">
                                <Flame className="h-3 w-3" />
                                {row.habit.streak}
                              </span>
                            )}
                          </button>
                          {row.cells.map((cell, idx) => {
                            const isToday = cell.key === todayKey;
                            const isComplete = cell.ratio >= 1;
                            const isPartial = cell.ratio > 0 && cell.ratio < 1;
                            const isInactive = !cell.isActive;
                            const cellClass = isInactive
                              ? "bg-muted/20"
                              : isComplete
                                ? row.palette.cellFull
                                : isPartial
                                  ? row.palette.cellPartial
                                  : "bg-muted/40";
                            return renderCell(
                              cellClass,
                              row.palette.ring,
                              isToday,
                              isInactive,
                              isComplete,
                              isInactive
                                ? "Not scheduled"
                                : isComplete
                                  ? `${fmt(cell.progress)} – completed`
                                  : `${fmt(cell.progress)} logged`,
                              `${row.habit.id}-${idx}`,
                            );
                          })}
                          <div className="text-right text-xs font-bold text-muted-foreground">
                            {row.total}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* ── Week grid view: days as rows, habits as columns ── */
                  <div className="px-5 py-5">
                    <div className="flex">
                      {/* Fixed day-labels column */}
                      <div className="shrink-0 w-[100px]">
                        {/* Spacer matching the habit-header height */}
                        <div className="mb-3 h-[52px]" />
                        <div className="space-y-4">
                          {(displayConfig.days ?? []).map((day) => {
                            const key = formatDayKey(day);
                            const isToday = key === todayKey;
                            return (
                              <div
                                key={key}
                                className={`h-8 flex items-center text-xs font-semibold ${isToday ? "text-primary" : "text-muted-foreground"}`}
                              >
                                <span>{weekdayFmt.format(day)}</span>
                                <span className="ml-1 text-[10px] opacity-60">
                                  {monthDayFmt.format(day)}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Scrollable habits area */}
                      <div className="overflow-x-auto min-w-0">
                        <div
                          style={{ minWidth: `${boardHabits.length * 48}px` }}
                        >
                          {/* Habit name headers */}
                          <div
                            className="mb-3 gap-2 text-xs font-semibold text-muted-foreground"
                            style={{
                              display: "grid",
                              gridTemplateColumns: `repeat(${boardHabits.length}, 1fr)`,
                            }}
                          >
                            {boardHabits.map((row) => (
                              <div
                                key={row.habit.id}
                                className="flex flex-col items-center gap-1 h-[52px] justify-start"
                                title={row.habit.name}
                              >
                                <span
                                  className={`h-2 w-2 rounded-full ${row.palette.dot}`}
                                />
                                <span className="max-w-full truncate px-1 text-center text-[10px] leading-tight">
                                  {row.habit.name}
                                </span>
                                {(row.habit.streak ?? 0) > 0 && (
                                  <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-primary">
                                    <Flame className="h-2.5 w-2.5" />
                                    {row.habit.streak}d
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                          {/* Cell rows */}
                          <div className="space-y-4">
                            {(displayConfig.days ?? []).map((day) => {
                              const key = formatDayKey(day);
                              const isToday = key === todayKey;
                              return (
                                <div
                                  key={key}
                                  className="gap-2 items-center"
                                  style={{
                                    display: "grid",
                                    gridTemplateColumns: `repeat(${boardHabits.length}, 1fr)`,
                                  }}
                                >
                                  {boardHabits.map((row) => {
                                    const cell = row.cells.find(
                                      (c) => c.key === key,
                                    )!;
                                    const isComplete = cell.ratio >= 1;
                                    const isPartial =
                                      cell.ratio > 0 && cell.ratio < 1;
                                    const isInactive = !cell.isActive;
                                    const cellClass = isInactive
                                      ? "bg-muted/20"
                                      : isComplete
                                        ? row.palette.cellFull
                                        : isPartial
                                          ? row.palette.cellPartial
                                          : "bg-muted/40";
                                    return renderCell(
                                      cellClass,
                                      row.palette.ring,
                                      isToday,
                                      isInactive,
                                      isComplete,
                                      isInactive
                                        ? "Not scheduled"
                                        : isComplete
                                          ? `${row.habit.name}: ${fmt(cell.progress)} – completed`
                                          : `${row.habit.name}: ${fmt(cell.progress)} logged`,
                                      `${row.habit.id}-${key}`,
                                    );
                                  })}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* ── Right: sidebar ── */}
            <div className="relative min-w-0">
              <HabitSidebar
                sidebarHabits={sidebarHabits}
                completedToday={completedToday}
                activeTodayCount={activeToday.length}
                routines={routines}
                selectedRoutineId={selectedRoutineId}
                onSelectRoutine={setSelectedRoutineId}
                pending={pending}
                inputValues={inputValues}
                onInputChange={(habitId, value) =>
                  setInputValues((v) => ({ ...v, [habitId]: value }))
                }
                onAdd={handleAdd}
                onReset={handleReset}
                onEditHabit={openEditHabit}
              />
            </div>
          </div>
        </div>
        {/* Edit habit slide-over */}
        <SlideOver
          show={showEditHabit && !!selectedHabit}
          visible={editHabitVisible}
          onClose={closeEditHabit}
          badge="Edit habit"
          title={selectedHabit?.name ?? ""}
          actions={
            <>
              <button
                type="button"
                onClick={handleDeleteHabit}
                disabled={isDeletingHabit}
                className="inline-flex items-center gap-2 rounded-full bg-coral px-4 py-1.5 lg:text-[11px] xl:text-[12px] 2xl:text-[13px] font-semibold text-white transition hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isDeletingHabit ? "Deleting..." : "Delete"}
              </button>
              <button
                type="submit"
                form="edit-habit-form"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 lg:text-[11px] xl:text-[12px] 2xl:text-[13px] font-semibold text-white transition hover:brightness-105 active:scale-95"
              >
                Update habit
              </button>
            </>
          }
        >
          {selectedHabit && (
            <HabitForm
              key={selectedHabit.id}
              formId="edit-habit-form"
              mode="edit"
              habitId={selectedHabit.id}
              initialHabit={{
                name: selectedHabit.name,
                description: selectedHabit.description ?? "",
                scheduledDays: maskToDays(selectedHabit.cadence ?? "Daily"),
                startDate: selectedHabit.startDate
                  ? new Date(selectedHabit.startDate).toISOString().slice(0, 10)
                  : new Date().toISOString().slice(0, 10),
                timeWindow: selectedHabit.timeWindow ?? "07:00",
                goalAmount:
                  selectedHabit.goalAmount != null
                    ? String(selectedHabit.goalAmount)
                    : "1",
                goalUnit: selectedHabit.goalUnit ?? "count",
                goalUnitCategory:
                  (selectedHabit.goalUnitCategory as UnitCategory) ??
                  "Quantity",
              }}
              hideSubmitButton
              onSuccess={() => {
                closeEditHabit();
                router.refresh();
              }}
              onCancel={closeEditHabit}
            />
          )}
        </SlideOver>

        {/* Add habit slide-over */}
        <SlideOver
          show={showAddHabit}
          visible={addHabitVisible}
          onClose={closeAddHabit}
          badge="Create habit"
          title="Design a new habit"
          actions={
            <button
              type="submit"
              form="add-habit-form"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 lg:text-[11px] xl:text-[12px] 2xl:text-[13px] font-semibold text-white transition hover:brightness-105 active:scale-95"
            >
              Create habit
            </button>
          }
        >
          <HabitForm
            formId="add-habit-form"
            hideSubmitButton
            onSuccess={() => {
              closeAddHabit();
              router.refresh();
            }}
            onCancel={closeAddHabit}
          />
        </SlideOver>
      </main>
    </>
  );
}
