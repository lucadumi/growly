"use client";

import {
  Briefcase,
  Check,
  Clock,
  Flame,
  Moon,
  Pencil,
  Plus,
  RotateCcw,
  Sun,
} from "lucide-react";

import type { Habit } from "../types";

type PaletteEntry = {
  dot: string;
  text: string;
  bar: string;
  card: string;
};

type SidebarHabitItem = {
  habit: Habit;
  palette: PaletteEntry;
  goal: number;
  progress: number;
  pct: number;
  isComplete: boolean;
  unit: string;
};

type SerializedRoutine = {
  id: string;
  name: string;
  habitIds: string[];
};

interface HabitSidebarProps {
  sidebarHabits: SidebarHabitItem[];
  completedToday: number;
  activeTodayCount: number;
  routines: SerializedRoutine[];
  selectedRoutineId: string | null;
  onSelectRoutine: (id: string | null) => void;
  pending: Record<string, boolean>;
  inputValues: Record<string, string>;
  onInputChange: (habitId: string, value: string) => void;
  onAdd: (habitId: string) => void;
  onReset: (habitId: string) => void;
  onEditHabit: (habit: Habit) => void;
}

const fmt = (value: number) =>
  value % 1 === 0 ? String(value) : value.toFixed(1);

const HabitSidebar = ({
  sidebarHabits,
  completedToday,
  activeTodayCount,
  routines,
  selectedRoutineId,
  onSelectRoutine,
  pending,
  inputValues,
  onInputChange,
  onAdd,
  onReset,
  onEditHabit,
}: HabitSidebarProps) => {
  const renderHabitCard = (item: SidebarHabitItem) => {
    const isPending = pending[item.habit.id] ?? false;
    const inputVal = inputValues[item.habit.id] ?? "1";
    return (
      <div
        key={item.habit.id}
        className={`flex flex-col justify-between rounded-2xl px-3 py-3 border transition-all ${
          item.isComplete ? item.palette.card : "bg-card border-gray-100"
        }`}
      >
        <div className="flex items-start justify-between gap-2 mb-2">
          <button
            type="button"
            onClick={() => onEditHabit(item.habit)}
            className="flex items-center gap-2 min-w-0 group text-left"
            title="Edit habit"
          >
            <span className="truncate text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              {item.habit.name}
            </span>
            <Pencil className="h-3 w-3 shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <div className="flex shrink-0 items-center gap-1.5">
            {item.isComplete && (
              <span className={`${item.palette.text}`}>
                <Check className="lg:w-3.5 lg:h-3.5 xl:h-4 xl:w-4" />
              </span>
            )}
            {(item.habit.streak ?? 0) > 0 && (
              <span className="inline-flex bg-secondary rounded-full px-2 py-0.5 text-[11px] items-center gap-0.5 text-xs font-bold text-primary">
                <Flame className="h-3 w-3" />
                {item.habit.streak}
              </span>
            )}
          </div>
        </div>
        {/* Description row */}
        {item.habit.description && (
          <div className="flex items-center gap-1.5 mb-3 min-w-0">
            <span className="truncate text-[10px] text-muted-foreground leading-snug">
              {item.habit.description}
            </span>
          </div>
        )}
        <div>
          <div className="space-y-1.5 mb-3">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-muted-foreground">
                {fmt(item.progress)} / {fmt(item.goal)}
                {item.unit !== "count" && ` ${item.unit}`}
              </span>
              <span
                className={
                  item.pct >= 100 ? item.palette.text : "text-muted-foreground"
                }
              >
                {item.pct}%
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${item.palette.bar}`}
                style={{ width: `${item.pct}%` }}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min="0.1"
              step="0.1"
              value={inputVal}
              onChange={(e) => onInputChange(item.habit.id, e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") onAdd(item.habit.id);
              }}
              className="w-16 rounded-xl border border-gray-200 px-2 py-1.5 text-center text-xs font-semibold outline-none focus:border-primary transition"
              disabled={isPending}
            />
            <button
              type="button"
              onClick={() => onAdd(item.habit.id)}
              disabled={isPending}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition hover:border-primary/40 hover:bg-primary/12 disabled:opacity-50"
            >
              <Plus className="h-3.5 w-3.5" />
              Add
            </button>
            <button
              type="button"
              onClick={() => onReset(item.habit.id)}
              disabled={isPending || item.progress <= 0}
              title="Reset today's progress"
              className="grid h-8 w-8 shrink-0 place-items-center rounded-xl border border-gray-200 text-muted-foreground transition hover:border-gray-300 hover:text-foreground disabled:opacity-30"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const filteredSidebarHabits = selectedRoutineId
    ? sidebarHabits.filter((h) =>
        routines
          .find((r) => r.id === selectedRoutineId)
          ?.habitIds.includes(h.habit.id),
      )
    : sidebarHabits;

  const sidebarById = new Map(
    filteredSidebarHabits.map((h) => [h.habit.id, h]),
  );
  const assignedIds = new Set(routines.flatMap((r) => r.habitIds));
  const ungrouped = filteredSidebarHabits.filter(
    (h) => !assignedIds.has(h.habit.id),
  );

  return (
    <aside className="absolute inset-0 flex flex-col overflow-hidden border-b border-gray-100 pb-2">
      <div className="shrink-0 flex items-center justify-between px-1 mb-3">
        <p className="text-sm font-bold text-foreground">Today's habits</p>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-xs font-semibold ${
            completedToday === activeTodayCount && activeTodayCount > 0
              ? "bg-green-soft/20 text-green-soft"
              : "bg-gray-200 text-muted-foreground"
          }`}
        >
          {completedToday}/{activeTodayCount}
        </span>
      </div>

      {routines.length > 0 && (
        <div className="shrink-0 flex flex-wrap gap-1 px-1 mb-3">
          <button
            type="button"
            onClick={() => onSelectRoutine(null)}
            className={`rounded-full px-2.5 py-0.5 lg:text-[10px] 2xl:text-xs font-semibold transition ${
              selectedRoutineId === null
                ? "bg-primary text-white"
                : "bg-gray-100 text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {routines.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() =>
                onSelectRoutine(selectedRoutineId === r.id ? null : r.id)
              }
              className={`rounded-full px-2.5 py-0.5 lg:text-[10px] 2xl:text-xs font-semibold transition ${
                selectedRoutineId === r.id
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-muted-foreground hover:text-foreground"
              }`}
            >
              {r.name}
            </button>
          ))}
        </div>
      )}

      <div className="flex-1 overflow-y-auto min-h-0 space-y-3 pr-0.5">
        {sidebarHabits.length === 0 ? (
          <div className="rounded-2xl bg-card/30 px-5 py-6">
            <p className="text-sm font-semibold text-foreground">
              No habits yet
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Add a habit to start tracking.
            </p>
          </div>
        ) : filteredSidebarHabits.length === 0 ? (
          <div className="rounded-2xl bg-card/30 px-5 py-6">
            <p className="text-xs text-muted-foreground">
              No habits scheduled today for this routine.
            </p>
          </div>
        ) : (
          <>
            {routines.map((routine) => {
              const items = routine.habitIds
                .map((id) => sidebarById.get(id))
                .filter(Boolean) as SidebarHabitItem[];
              if (items.length === 0) return null;
              return (
                <div key={routine.id} className="space-y-2">
                  <p className="px-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {routine.name}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {items.map(renderHabitCard)}
                  </div>
                </div>
              );
            })}
            {ungrouped.length > 0 && (
              <div className="space-y-2">
                {routines.length > 0 && (
                  <p className="px-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Other
                  </p>
                )}
                <div className="grid grid-cols-2 gap-2">
                  {ungrouped.map(renderHabitCard)}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </aside>
  );
};

export default HabitSidebar;
