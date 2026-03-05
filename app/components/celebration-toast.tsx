"use client";

import { useEffect, useState } from "react";
import { Check, Star, Trophy, Zap } from "lucide-react";

import { useXP } from "@/app/context/xp-context";

const CELEBRATION_DURATION = 4200;

const CONFIGS = {
  level: {
    bg: "bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500",
    border: "border-amber-300/60",
    shadow: "shadow-amber-400/50",
    progressColor: "bg-white/50",
    Icon: Trophy,
  },
  habit: {
    bg: "bg-gradient-to-r from-green-500 to-emerald-500",
    border: "border-green-400/60",
    shadow: "shadow-green-500/40",
    progressColor: "bg-white/50",
    Icon: Zap,
  },
  todo: {
    bg: "bg-gradient-to-r from-primary to-primary/80",
    border: "border-primary/40",
    shadow: "shadow-primary/40",
    progressColor: "bg-white/50",
    Icon: Check,
  },
} as const;

const CelebrationToast: React.FC = () => {
  const { celebration, clearCelebration } = useXP();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!celebration) {
      setVisible(false);
      setProgress(0);
      return;
    }

    setVisible(true);
    setProgress(0);
    const startTime = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      setProgress(Math.min((elapsed / CELEBRATION_DURATION) * 100, 100));
    };

    const interval = window.setInterval(updateProgress, 50);
    updateProgress();

    const handler = window.setTimeout(() => {
      setProgress(100);
      setVisible(false);
      clearCelebration();
    }, CELEBRATION_DURATION);

    return () => {
      window.clearTimeout(handler);
      window.clearInterval(interval);
    };
  }, [celebration, clearCelebration]);

  if (!celebration) {
    return null;
  }

  const isLevelUp = celebration.type === "level";
  const configKey = isLevelUp ? "level" : celebration.type === "habit" ? "habit" : "todo";
  const config = CONFIGS[configKey];

  const title = isLevelUp
    ? `Level ${"level" in celebration ? celebration.level : ""} Reached!`
    : celebration.type === "habit"
    ? "Habit Progress!"
    : "Todo Complete!";

  const subtitle = isLevelUp
    ? `+${celebration.xp} XP — You're on a roll!`
    : `+${celebration.xp} XP earned`;

  const animationClass = visible
    ? "translate-y-0 opacity-100 scale-100"
    : "-translate-y-3 opacity-0 scale-95";

  return (
    <div
      role="status"
      aria-live="assertive"
      className="pointer-events-none fixed inset-x-0 lg:top-6 xl:top-8 z-50 flex justify-center"
    >
      <div
        className={`${animationClass} ${config.bg} ${config.border} ${config.shadow} relative pointer-events-auto border lg:px-4 xl:px-5 lg:py-2.5 xl:py-3 rounded-xl overflow-hidden shadow-xl transition-all duration-300 origin-top`}
      >
        {isLevelUp && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className="absolute text-white/25 animate-ping"
                style={{
                  width: `${8 + (i % 3) * 4}px`,
                  height: `${8 + (i % 3) * 4}px`,
                  top: `${10 + (i * 15) % 80}%`,
                  left: `${5 + (i * 17) % 90}%`,
                  animationDelay: `${i * 0.18}s`,
                  animationDuration: "1.4s",
                }}
              />
            ))}
          </div>
        )}

        <div className="flex items-center gap-3 text-white">
          <div className="bg-white/20 rounded-full p-1.5 shrink-0">
            <config.Icon className="lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
          </div>
          <div>
            <p className="lg:text-xs xl:text-sm font-bold leading-tight">{title}</p>
            <p className="lg:text-[9px] xl:text-[11px] opacity-85">{subtitle}</p>
          </div>
        </div>

        <div
          className={`absolute left-0 bottom-0 h-1 ${config.progressColor} transition-all duration-100 ease-linear`}
          style={{ width: `${100 - progress}%` }}
        />
      </div>
    </div>
  );
};

export default CelebrationToast;
