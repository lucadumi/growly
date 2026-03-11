"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Asterisk, Check, Flame, Plus } from "lucide-react";

import QuantityMenu from "./quantity-menu";
import type { Habit, MenuPosition } from "../types";
import type { HabitRisk } from "../lib/habit-risk";

type Props = {
  habit: Habit;
  focusLabel: string;
  streakValue: number;
  displayCompletion: number;
  isSelected: boolean;
  loggedLabel: string;
  isComplete: boolean;
  customQuantity: string;
  quantityMenuOpenId: string | null;
  menuPosition: MenuPosition | null;
  menuWidth: number;
  registerAnchor: (node: HTMLDivElement | null) => void;
  registerMenu: (node: HTMLDivElement | null) => void;
  risk: HabitRisk;
  onHover: (id: string) => void;
  onNavigate: (id: string) => void;
  onToggleMenu: (habitId: string, anchor: HTMLDivElement | null) => void;
  onCustomQuantityChange: (habitId: string, value: string) => void;
  onAddQuantity: (habitId: string, amount: number) => void;
  onReset: (habitId: string) => void;
};

const HabitRow: React.FC<Props> = ({
  habit,
  focusLabel,
  streakValue,
  displayCompletion,
  isSelected,
  loggedLabel,
  isComplete,
  customQuantity,
  quantityMenuOpenId,
  menuPosition,
  menuWidth,
  registerAnchor,
  registerMenu,
  risk,
  onHover,
  onNavigate,
  onToggleMenu,
  onCustomQuantityChange,
  onAddQuantity,
  onReset,
}) => {
  const anchorRef = useRef<HTMLDivElement | null>(null);
  const isMenuOpen = quantityMenuOpenId === habit.id;
  const riskColor =
    risk.level === "high"
      ? "bg-coral/15 text-coral border-coral/40"
      : risk.level === "medium"
      ? "bg-amber-100 text-amber-700 border-amber-300"
      : "bg-emerald-50 text-emerald-600 border-emerald-200";

  useEffect(() => {
    if (isMenuOpen) {
      registerAnchor(anchorRef.current);
    }
  }, [isMenuOpen, registerAnchor]);

  return (
    <div
      onMouseEnter={() => onHover(habit.id)}
      className={`group relative overflow-hidden rounded-2xl border border-white/70 bg-white/80 lg:p-3 xl:p-4 shadow-sm transition ${
        isSelected
          ? "border-primary/30 ring-1 ring-primary/30"
          : "hover:border-primary/20 hover:shadow-md"
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-br from-primary/5 via-white/40 to-coral/10 opacity-0 transition group-hover:opacity-100"
      />
      <div className="relative space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="lg:text-sm xl:text-base font-semibold text-foreground">
                {habit.name}
              </div>
              <span
                className={`inline-flex items-center gap-1 rounded-full border lg:px-2 xl:px-2.5 lg:py-0.5 lg:text-[9px] xl:text-[11px] font-semibold transition ${riskColor}`}
                title={risk.reasons.join(" - ")}
              >
                <Asterisk className="lg:w-2 lg:h-2 xl:w-3 xl:h-3" />
                {risk.label}
              </span>
            </div>
            <div className="lg:text-[9px] xl:text-[11px] 2xl:text-xs text-muted-foreground">
              {focusLabel}
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground lg:text-[9px] xl:text-[11px] 2xl:text-xs font-semibold">
            <span className="rounded-full bg-muted/70 px-2 py-1">
              {habit.cadence}
            </span>
            <span className="inline-flex items-center gap-1">
              <Flame className="lg:w-3 lg:h-3 xl:w-4 xl:h-4 text-primary" />
              {streakValue}d
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between lg:text-[10px] xl:text-[11px] 2xl:text-xs font-semibold text-muted-foreground">
            <span>Completion</span>
            <span>{displayCompletion}%</span>
          </div>
          <div className="h-2 rounded-full bg-muted/70 overflow-hidden">
            <div
              className={`h-full ${isComplete ? "bg-emerald-400" : "bg-linear-to-r from-primary to-coral"}`}
              style={{
                width: `${displayCompletion}%`,
              }}
            />
          </div>
          {isComplete ? (
            <span className="flex items-center gap-1 lg:text-[10px] xl:text-[11px] 2xl:text-xs font-semibold text-emerald-500">
              <Check className="lg:w-3 lg:h-3 xl:w-4 xl:h-4" />
              Completed today
            </span>
          ) : (
            <p className="lg:text-[10px] xl:text-[11px] 2xl:text-xs font-semibold text-primary">
              {loggedLabel}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="lg:text-[9px] xl:text-[11px] 2xl:text-xs text-muted-foreground">
            Keep building your rhythm.
          </div>
          <div className="flex items-center gap-2 lg:gap-3">
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onNavigate(habit.id);
              }}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white lg:px-3 lg:py-1 xl:px-3.5 xl:py-1.5 lg:text-[10px] xl:text-[11px] font-semibold text-primary shadow-sm transition hover:border-primary/70"
            >
              View
              <ArrowRight className="lg:w-3 lg:h-3 xl:w-4 xl:h-4" />
            </button>
            <div className="relative" ref={anchorRef}>
              <button
                type="button"
                className="flex lg:h-7 xl:h-8 lg:w-7 xl:w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-primary shadow-sm transition hover:border-primary/70"
                aria-haspopup="true"
                aria-expanded={isMenuOpen}
                onClick={(event) => {
                  event.stopPropagation();
                  onToggleMenu(habit.id, anchorRef.current);
                }}
              >
                <Plus className="lg:w-3 lg:h-3 xl:w-4 xl:h-4" />
              </button>
              <QuantityMenu
                habitId={habit.id}
                isOpen={isMenuOpen}
                customValue={customQuantity}
                onCustomValueChange={onCustomQuantityChange}
                onAdd={onAddQuantity}
                onReset={onReset}
                menuPosition={menuPosition}
                menuWidth={menuWidth}
                registerMenu={registerMenu}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitRow;
