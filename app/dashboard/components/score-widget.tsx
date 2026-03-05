"use client";

import { useEffect, useRef, useState } from "react";
import CircularProgress from "./circular-progress";
import { useXP } from "@/app/context/xp-context";
import { MAX_STREAK_BONUS } from "@/lib/xp";

const getCircularProgressSize = (): number => {
  if (typeof window === "undefined") {
    return 32;
  }

  if (window.matchMedia("(min-width: 1280px)").matches) {
    return 56;
  }

  if (window.matchMedia("(min-width: 1024px)").matches) {
    return 40;
  }

  return 32;
};

const getCircularProgressStrokeWidth = (size: number): number => {
  if (size >= 56) {
    return 3.5;
  }

  if (size >= 40) {
    return 2.5;
  }

  return 3;
};

const ScoreWidget: React.FC = () => {
  const {
    totalXP,
    level,
    progress,
    xpGainedInLevel,
    xpNeededForLevelUp,
    todayXP,
    streakBonus,
    loading,
  } = useXP();
  const [pulse, setPulse] = useState(false);
  const prevTotalXPRef = useRef<number | null>(null);

  const [circularProgressSize, setCircularProgressSize] = useState(() =>
    getCircularProgressSize(),
  );
  const circularProgressStrokeWidth =
    getCircularProgressStrokeWidth(circularProgressSize);

  useEffect(() => {
    const handleResize = () =>
      setCircularProgressSize(getCircularProgressSize());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (loading) {
      prevTotalXPRef.current = null;
      return;
    }

    if (prevTotalXPRef.current === null) {
      prevTotalXPRef.current = totalXP;
      return;
    }

    if (prevTotalXPRef.current !== totalXP) {
      setPulse(true);
      const handler = window.setTimeout(() => setPulse(false), 900);
      prevTotalXPRef.current = totalXP;
      return () => window.clearTimeout(handler);
    }

    prevTotalXPRef.current = totalXP;
  }, [loading, totalXP]);
  if (loading) {
    return (
      <div className="text-foreground xl:p-3 2xl:p-4 rounded-2xl border border-muted/50 bg-white/70 shadow-inner">
        <div className="space-y-3 animate-pulse">
          <div className="h-4 w-1/3 rounded bg-muted" />
          <div className="flex items-center justify-between gap-3">
            <div className="h-12 w-12 rounded bg-muted" />
            <div className="flex-1 space-y-2">
              <div className="h-5 rounded bg-muted" />
              <div className="h-3 w-3/4 rounded bg-muted" />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="h-16 w-16 rounded-full border border-muted" />
            <div className="h-16 w-16 rounded-full border border-muted" />
          </div>
          <div className="h-4 rounded bg-muted" />
        </div>
      </div>
    );
  }
  const safeProgress = Math.min(100, Math.max(0, progress));
  const nextLevel = level + 1;
  const isNearLevelUp = safeProgress >= 80;

  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat("en-US").format(num);
  };

  const maxDailyXP = 1000;
  const maxStreakBonus = MAX_STREAK_BONUS;

  const todayXPProgress = Math.min(
    100,
    Math.floor((todayXP / maxDailyXP) * 100),
  );
  const streakBonusProgress = Math.min(
    100,
    Math.floor((streakBonus / maxStreakBonus) * 100),
  );

  const progressFillClassName = [
    isNearLevelUp ? "bg-amber-400" : "bg-green-soft",
    "lg:h-1.5 xl:h-2.5",
    "rounded-full",
    "transition-all duration-500 ease-out",
    "transform",
    "origin-left",
    pulse ? "score-widget-pulse" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="text-foreground lg:py-2 xl:py-3 2xl:py-4">
      <div className="flex items-center justify-between lg:mb-1 xl:mb-2">
        <h3 className="lg:text-xs xl:text-lg font-semibold">Habit Score</h3>
      </div>
      <div className="flex flex-col lg:gap-2 xl:gap-3 2xl:gap-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center lg:rounded-sm xl:rounded-lg text-primary select-none">
            <span className="lg:text-base xl:text-lg 2xl:text-xl font-extrabold leading-none">
              {level}
            </span>
            <span className="lg:text-[8px] xl:text-[10px] 2xl:text-xs font-medium">
              LEVEL
            </span>
          </div>
          <div className="text-right">
            <p className="lg:text-xl xl:text-2xl 2xl:text-3xl font-bold leading-tight">
              {formatNumber(totalXP)}
            </p>
            <p className="lg:text-[10px] xl:text-xs 2xl:text-sm font-medium">
              Total XP
            </p>
          </div>
        </div>

        <div className="w-full flex lg:px-6 xl:px-8 2xl:px-10 justify-between rounded-lg">
          <div className="flex flex-col items-center gap-1 select-none">
            <CircularProgress
              progress={todayXPProgress}
              size={circularProgressSize}
              strokeWidth={circularProgressStrokeWidth}
              progressColor="rgb(34 197 94)"
              textColor="rgb(34 197 94)"
            >
              <span className="lg:text-[10px] xl:text-xs font-bold">
                +{formatNumber(todayXP)}
              </span>
            </CircularProgress>

            <span className="lg:text-[8px] xl:text-[10px] 2xl:text-xs font-medium text-muted-foreground lg:mt-0.5 xl:mt-1">
              Today&apos;s XP
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 select-none">
            <CircularProgress
              progress={streakBonusProgress}
              size={circularProgressSize}
              strokeWidth={circularProgressStrokeWidth}
              progressColor="rgb(234 179 8)"
              textColor="rgb(234 179 8)"
            >
              <span className="lg:text-[10px] xl:text-xs font-bold">
                +{formatNumber(streakBonus)}
              </span>
            </CircularProgress>
            <span className="lg:text-[8px] xl:text-[10px] 2xl:text-xs font-medium text-muted-foreground lg:mt-0.5 xl:mt-1">
              Streak Bonus
            </span>
          </div>
        </div>

        <div className="lg:pt-2 xl:pt-4 border-t border-muted">
          <p className="lg:text-[10px] xl:text-xs font-semibold lg:mb-0.5 xl:mb-1 flex justify-between">
            <span className={isNearLevelUp ? "text-amber-500 font-bold" : ""}>
              {isNearLevelUp ? "Almost there!" : `XP to Level ${nextLevel}:`}
            </span>
            <span
              className={`font-extrabold ${isNearLevelUp ? "text-amber-500" : "text-green-soft"}`}
            >
              {formatNumber(xpGainedInLevel)} /{" "}
              {formatNumber(xpNeededForLevelUp)}
            </span>
          </p>
          <div
            className={`w-full rounded-full lg:h-1.5 xl:h-2.5 bg-muted relative overflow-hidden ${isNearLevelUp ? "ring-1 ring-amber-400/50" : ""}`}
          >
            <div
              className={progressFillClassName}
              style={{ width: `${safeProgress}%` }}
            />
            {isNearLevelUp && (
              <div
                className="absolute top-0 left-0 h-full bg-amber-300/40 animate-pulse rounded-full"
                style={{ width: `${safeProgress}%` }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreWidget;
