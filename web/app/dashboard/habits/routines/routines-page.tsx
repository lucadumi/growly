"use client";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Clock3, Edit, GripVertical, Target, Trash2, X } from "lucide-react";
import { cadenceLabel } from "@/lib/cadence";


import PageHeading from "@/app/components/page-heading";
import HabitsTabs from "../components/habits-tabs";

import Button from "@/app/components/ui/button";
import RoutineFormPage from "./routine-form";

type Habit = {
  id: string;
  name: string;
  cadence: string;
  focus: string;
};

type Routine = {
  id: string;
  name: string;
  anchor: string | null;
  notes: string | null;
  isDefault: boolean;
  habits: Habit[];
};

type RoutinesPageProps = {
  initialBacklog: Habit[];
  initialRoutines: Routine[];
  allHabits: Habit[];
};

const dropClasses =
  "rounded-2xl border-2 border-dashed transition bg-card/30 hover:border-primary/60";

const RoutinesPage: React.FC<RoutinesPageProps> = ({
  initialBacklog,
  initialRoutines,
  allHabits,
}) => {
  const [backlog, setBacklog] = useState<Habit[]>(initialBacklog);
  const [routines, setRoutines] = useState<Routine[]>(initialRoutines);
  const [deletingRoutineId, setDeletingRoutineId] = useState<string | null>(
    null,
  );
  const [routineError, setRoutineError] = useState<string | null>(null);
  const hasMountedRef = useRef(false);
  const persistTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [hoverTarget, setHoverTarget] = useState<string | null>(null);

  const [showCreateRoutine, setShowCreateRoutine] = useState(false);
  const [createRoutineVisible, setCreateRoutineVisible] = useState(false);
  const [selectedRoutine, setSelectedRoutine] = useState<Routine | null>(null);
  const [showEditRoutine, setShowEditRoutine] = useState(false);
  const [editRoutineVisible, setEditRoutineVisible] = useState(false);

  useEffect(() => {
    const isOpen = showCreateRoutine || showEditRoutine;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showCreateRoutine, showEditRoutine]);

  const moveHabit = (habitId: string, source: string, target: string) => {
    if (!habitId || source === target) return;

    let pulled: Habit | null = null;

    if (source === "backlog") {
      setBacklog((prev) => {
        const next = prev.filter((habit) => {
          if (habit.id === habitId) {
            pulled = habit;
            return false;
          }
          return true;
        });
        return next;
      });
    } else {
      setRoutines((prev) =>
        prev.map((routine) => {
          if (routine.id !== source) return routine;
          const remaining = routine.habits.filter((habit) => {
            if (habit.id === habitId) {
              pulled = habit;
              return false;
            }
            return true;
          });
          return remaining.length === routine.habits.length
            ? routine
            : { ...routine, habits: remaining };
        }),
      );
    }

    requestAnimationFrame(() => {
      if (!pulled) return;
      if (target === "backlog") {
        setBacklog((prev) => {
          if (prev.find((habit) => habit.id === pulled!.id)) return prev;
          return [...prev, pulled!];
        });
        return;
      }

      setRoutines((prev) =>
        prev.map((routine) => {
          if (routine.id !== target) return routine;
          if (routine.habits.find((habit) => habit.id === pulled!.id))
            return routine;
          return { ...routine, habits: [...routine.habits, pulled!] };
        }),
      );
    });
  };

  const handleDrop =
    (target: string) =>
    (event: React.DragEvent<HTMLDivElement | HTMLButtonElement>) => {
      event.preventDefault();
      const habitId = event.dataTransfer.getData("habitId");
      const source = event.dataTransfer.getData("source");
      setHoverTarget(null);
      moveHabit(habitId, source, target);
    };

  const handleDragStart =
    (habitId: string, source: string) =>
    (event: React.DragEvent<HTMLDivElement>) => {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("habitId", habitId);
      event.dataTransfer.setData("source", source);
    };

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    if (persistTimerRef.current) {
      clearTimeout(persistTimerRef.current);
      persistTimerRef.current = null;
    }

    persistTimerRef.current = setTimeout(() => {
      const payload = {
        routines: routines.map((routine) => ({
          id: routine.id,
          habitIds: routine.habits.map((habit) => habit.id),
        })),
      };

      (async () => {
        try {
          const response = await fetch("/api/routines", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          if (!response.ok) {
            console.error("Failed to persist routines", await response.text());
          }
        } catch (error) {
          console.error("Failed to persist routines", error);
        }
      })();
    }, 450);

    return () => {
      if (persistTimerRef.current) {
        clearTimeout(persistTimerRef.current);
        persistTimerRef.current = null;
      }
    };
  }, [routines, backlog]);

  const openCreateRoutine = () => {
    setShowCreateRoutine(true);
    requestAnimationFrame(() => setCreateRoutineVisible(true));
  };
  const closeCreateRoutine = () => {
    setCreateRoutineVisible(false);
    setTimeout(() => setShowCreateRoutine(false), 300);
  };

  const openEditRoutine = (routine: Routine) => {
    setSelectedRoutine(routine);
    setShowEditRoutine(true);
    requestAnimationFrame(() => setEditRoutineVisible(true));
  };
  const closeEditRoutine = () => {
    setEditRoutineVisible(false);
    setTimeout(() => {
      setShowEditRoutine(false);
      setSelectedRoutine(null);
    }, 300);
  };

  const handleDeleteRoutine = useCallback(
    async (routineId: string, routineHabits: Habit[]) => {
      if (!routineId) {
        return;
      }
      setRoutineError(null);
      setDeletingRoutineId(routineId);
      try {
        const response = await fetch(`/api/routines/${routineId}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          const payload = await response.json().catch(() => null);
          const message =
            payload && typeof payload === "object" && "error" in payload
              ? (payload as { error?: string }).error
              : null;
          throw new Error(message ?? "Unable to delete this routine.");
        }
        setRoutines((prev) =>
          prev.filter((routine) => routine.id !== routineId),
        );
        setBacklog((prev) => {
          const existingIds = new Set(prev.map((habit) => habit.id));
          const additions = routineHabits.filter(
            (habit) => !existingIds.has(habit.id),
          );
          return additions.length > 0 ? [...prev, ...additions] : prev;
        });
      } catch (error) {
        if (error instanceof Error) {
          setRoutineError(error.message);
        } else {
          setRoutineError("Unable to delete this routine.");
        }
      } finally {
        setDeletingRoutineId((current) =>
          current === routineId ? null : current,
        );
      }
    },
    [],
  );

  return (
    <>
      <main className="relative overflow-hidden w-full min-h-screen lg:pt-18 xl:pt-24 2xl:pt-28 text-foreground g:pb-8 xl:pb-12 2xl:pb-16 bg-card">
        <div className="lg:px-4 xl:px-8 2xl:px-28 lg:space-y-6 xl:space-y-8">
          <PageHeading
            badgeLabel="Routines"
            title="Group habits into routines"
            description="Drag habits into the routines that keep you steady. Changes now sync directly to your saved layouts."
            actions={
              <div className="flex flex-row lg:gap-2 xl:gap-3">
                <Button
                  className="lg:text-[10px] font-semibold xl:text-xs 2xl:text-sm text-white hover:brightness-105 transition lg:h-6 xl:h-8 2xl:h-10 bg-primary lg:px-3 xl:px-4"
                  onClick={openCreateRoutine}
                >
                  Create routine
                </Button>
              </div>
            }
          />

          <div className="flex flex-wrap items-center lg:gap-2 xl:gap-3">
            <HabitsTabs
              active="routines"
              containerClassName="lg:gap-0.5 xl:gap-1 2xl:gap-2"
              tabClassName="border border-transparent"
            />
            <span className="lg:text-[9px] xl:text-[11px] 2xl:text-xs text-muted-foreground">
              Move habits between the backlog and your routines.
            </span>
          </div>
          {routineError ? (
            <div className="rounded-2xl border border-rose-100 bg-rose-50 lg:px-3 xl:px-4 lg:py-1 xl:py-2 lg:text-[11px] xl:text-xs font-semibold text-rose-700">
              {routineError}
            </div>
          ) : null}

          <div className="grid lg:grid-cols-[0.95fr_1.05fr] lg:gap-3 xl:gap-5">
            <div
              className={`relative overflow-hidden ${dropClasses} ${
                hoverTarget === "backlog"
                  ? "border-primary/80"
                  : "border-gray-200"
              } lg:p-4 xl:p-5 h-full`}
              onDragOver={(event) => event.preventDefault()}
              onDragEnter={() => setHoverTarget("backlog")}
              onDragLeave={() => setHoverTarget(null)}
              onDrop={handleDrop("backlog")}
            >
              <div className="flex items-center justify-between lg:mb-2 xl:mb-3">
                <div>
                  <h2 className="lg:text-sm xl:text-base 2xl:text-lg font-semibold lg:mb-0.5 xl:mb-1">
                    Habit backlog
                  </h2>
                  <p className="lg:text-[11px] xl:text-xs 2xl:text-sm text-muted-foreground">
                    Drop habits here to pull them out of a routine.
                  </p>
                </div>
              </div>

              <div className="lg:space-y-2 xl:space-y-3">
                {backlog.length === 0 ? (
                  <div className="rounded-xl lg:border xl:border-2 border-dashed border-gray-200 bg-muted/40 lg:px-3 xl:px-4 lg:py-2 xl:py-3 lg:text-[9px] xl:text-[11px] 2xl:text-xs text-muted-foreground">
                    No loose habits. Drag one back from a routine to stash it
                    here.
                  </div>
                ) : (
                  backlog.map((habit) => (
                    <div
                      key={habit.id}
                      draggable
                      onDragStart={handleDragStart(habit.id, "backlog")}
                      className="rounded-xl border border-gray-100 bg-card lg:px-3 xl:px-4 lg:py-2 xl:py-3 flex items-center justify-between lg:gap-2 xl:gap-3 cursor-grab"
                    >
                      <div>
                        <p className="font-semibold lg:text-xs xl:text-sm 2xl:text-base">
                          {habit.name}
                        </p>
                        <p className="lg:text-[9px] xl:text-[11px] 2xl:text-xs text-muted-foreground">
                          {cadenceLabel(habit.cadence)} - {habit.focus}
                        </p>
                      </div>
                      <GripVertical className="lg:w-3 lg:h-3 xl:w-4 xl:h-4 text-muted-foreground" />
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 lg:gap-3 xl:gap-4">
              {routines.map((routine) => (
                <div
                  key={routine.id}
                  className={`${dropClasses} ${
                    hoverTarget === routine.id
                      ? "border-primary/40"
                      : "border-gray-200"
                  } lg:p-3 xl:p-4 2xl:p-5 flex flex-col gap-4`}
                  onDragOver={(event) => event.preventDefault()}
                  onDragEnter={() => setHoverTarget(routine.id)}
                  onDragLeave={() => setHoverTarget(null)}
                  onDrop={handleDrop(routine.id)}
                >
                  <div className="flex items-start justify-between lg:gap-1 xl:gap-2">
                    <div className="space-y-1">
                      <h3 className="lg:text-sm xl:text-base 2xl:text-lg font-semibold leading-tight">
                        {routine.name}
                      </h3>
                      {!routine.isDefault && (
                        <div className="flex items-center lg:gap-1 xl:gap-2 lg:text-[11px] xl:text-xs text-muted-foreground">
                          <Clock3 className="lg:w-2 lg:h-2 xl:w-3 xl:h-3 text-primary" />
                          <span>{routine.anchor ?? "Not set"}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col items-end lg:gap-1.5 xl:gap-2">
                      {routine.isDefault ? (
                        <span className="lg:text-[8px] xl:text-[10px] font-semibold uppercase tracking-wide text-primary/70 border border-primary/20 rounded-full lg:px-1.5 xl:px-2 lg:py-0.5">
                          Default
                        </span>
                      ) : (
                        <div className="flex items-center lg:gap-2 xl:gap-3 2xl:gap-4">
                          <button
                            type="button"
                            onClick={() => openEditRoutine(routine)}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Edit className="lg:w-3 lg:h-3 xl:w-4 xl:h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              handleDeleteRoutine(routine.id, routine.habits)
                            }
                            disabled={deletingRoutineId === routine.id}
                            className="inline-flex lg:text-[9px] xl:text-[11px] 2xl:text-xs items-center lg:gap-1.5 xl:gap-2 rounded-full cursor-pointer text-red-400 disabled:cursor-not-allowed disabled:opacity-70"
                          >
                            <span>
                              {deletingRoutineId === routine.id ? (
                                "Deleting..."
                              ) : (
                                <Trash2 className="lg:w-3 lg:h-3 xl:w-4 xl:h-4" />
                              )}
                            </span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="lg:space-y-2 xl:space-y-3">
                    {routine.habits.length === 0 ? (
                      <div className="rounded-xl border border-dashed border-gray-200 bg-muted/40 lg:px-3 xl:px-4 lg:py-2 xl:py-3 lg:text-[9px] xl:text-[11px] 2xl:text-xs text-muted-foreground">
                        Empty slot. Drag a habit from the backlog to start this
                        routine.
                      </div>
                    ) : (
                      routine.habits.map((habit) => (
                        <div
                          key={habit.id}
                          draggable
                          onDragStart={handleDragStart(habit.id, routine.id)}
                          className="rounded-xl border border-gray-100 bg-card/50 lg:px-3 xl:px-4 lg:py-2 xl:py-3 flex items-center justify-between lg:gap-2 xl:gap-3 cursor-grab"
                        >
                          <div>
                            <p className="lg:text-xs xl:text-sm 2xl:text-base font-semibold">
                              {habit.name}
                            </p>
                            <p className="lg:text-[9px] xl:text-[11px] 2xl:text-xs text-muted-foreground">
                              {cadenceLabel(habit.cadence)} - {habit.focus}
                            </p>
                          </div>
                          <GripVertical className="lg:w-3 lg:h-3 xl:w-4 xl:h-4 text-muted-foreground" />
                        </div>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Create routine slide-over */}
      {showCreateRoutine && (
        <div
          className={`fixed inset-0 z-50 flex justify-end transition-colors duration-300 ${createRoutineVisible ? "bg-black/20" : "bg-black/0"}`}
        >
          <div
            className="absolute inset-0 backdrop-blur-[2px]"
            onClick={closeCreateRoutine}
          />
          <div
            className={`relative h-full w-full max-w-5xl bg-card border-l-8 border-gray-100 flex flex-col transition-transform duration-300 ease-out ${createRoutineVisible ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  New routine
                </p>
                <h2 className="text-lg font-semibold text-foreground">
                  Create a routine
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  form="create-routine-form"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-white hover:brightness-105 transition"
                >
                  Create routine
                </button>
                <button
                  type="button"
                  onClick={closeCreateRoutine}
                  aria-label="Close"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <RoutineFormPage
                mode="create"
                habits={allHabits}
                formId="create-routine-form"
                panelMode
                onSuccess={(result) => {
                  const habitMap = new Map(allHabits.map((h) => [h.id, h]));
                  const routineHabits = result.habitIds
                    .map((id) => habitMap.get(id))
                    .filter(Boolean) as Habit[];
                  setRoutines((prev) => [
                    ...prev,
                    {
                      id: result.id,
                      name: result.name,
                      anchor: result.anchor,
                      notes: result.notes,
                      habits: routineHabits,
                    },
                  ]);
                  const assignedIds = new Set(result.habitIds);
                  setBacklog((prev) => prev.filter((h) => !assignedIds.has(h.id)));
                  closeCreateRoutine();
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Edit routine slide-over */}
      {showEditRoutine && selectedRoutine && (
        <div
          className={`fixed inset-0 z-50 flex justify-end transition-colors duration-300 ${editRoutineVisible ? "bg-black/20" : "bg-black/0"}`}
        >
          <div
            className="absolute inset-0 backdrop-blur-[2px]"
            onClick={closeEditRoutine}
          />
          <div
            className={`relative h-full w-full max-w-5xl bg-card border-l-8 border-gray-100 flex flex-col transition-transform duration-300 ease-out ${editRoutineVisible ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Edit routine
                </p>
                <h2 className="text-lg font-semibold text-foreground">
                  {selectedRoutine.name}
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  form="edit-routine-form"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-white hover:brightness-105 transition"
                >
                  Update routine
                </button>
                <button
                  type="button"
                  onClick={closeEditRoutine}
                  aria-label="Close"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <RoutineFormPage
                key={selectedRoutine.id}
                mode="edit"
                habits={allHabits}
                routineId={selectedRoutine.id}
                initialName={selectedRoutine.name}
                initialAnchor={selectedRoutine.anchor}
                initialNotes={selectedRoutine.notes}
                initialHabitIds={selectedRoutine.habits.map((h) => h.id)}
                formId="edit-routine-form"
                panelMode
                onSuccess={(result) => {
                  const habitMap = new Map(allHabits.map((h) => [h.id, h]));
                  const routineHabits = result.habitIds
                    .map((id) => habitMap.get(id))
                    .filter(Boolean) as Habit[];
                  const newRoutines = routines.map((r) =>
                    r.id !== result.id
                      ? r
                      : { ...r, name: result.name, anchor: result.anchor, notes: result.notes, habits: routineHabits },
                  );
                  const assignedIds = new Set(newRoutines.flatMap((r) => r.habits.map((h) => h.id)));
                  setRoutines(newRoutines);
                  setBacklog(allHabits.filter((h) => !assignedIds.has(h.id)));
                  closeEditRoutine();
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RoutinesPage;
