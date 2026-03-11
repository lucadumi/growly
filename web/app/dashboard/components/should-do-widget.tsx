"use client";

import { useState } from "react";
import {
  Heart,
  LucideIcon,
  Sparkles,
  Users,
  icons as lucideIcons,
} from "lucide-react";

import PillButton from "@/app/components/ui/pill-button";
import { shouldDoSeeds } from "./should-do-seeds";

type ShouldDoItem = {
  id: string;
  title: string;
  description?: string | null;
  likesCount: number;
  likedByCurrentUser: boolean;
  ownedByCurrentUser: boolean;
  icon?: LucideIcon;
  iconKey?: string | null;
  iconColor?: string;
  isSeed?: boolean;
};

type ShouldDoWidgetProps = Record<string, never>;

const formatLikes = (value: number) => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1).replace(/\\.0$/, "")}m love this`;
  }
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1).replace(/\\.0$/, "")}k love this`;
  }
  return `${value} love this`;
};

const resolveIcon = (key?: string | null): LucideIcon => {
  if (!key) return Heart;
  const IconComp = (lucideIcons as Record<string, LucideIcon>)[key];
  return IconComp ?? Heart;
};

const ShouldDoWidget: React.FC<ShouldDoWidgetProps> = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [likingId, setLikingId] = useState<string | null>(null);

  type ShouldDoApi = {
    id: string;
    title?: string | null;
    description?: string | null;
    likesCount?: number;
    likedByCurrentUser?: boolean;
    ownedByCurrentUser?: boolean;
    iconKey?: string | null;
    iconColor?: string | null;
  };

  return (
    <div className="flex flex-col h-full text-foreground">
      <div className="flex items-start justify-between lg:mb-4 xl:mb-6 2xl:mb-8">
        <div className="lg:space-y-0.5 xl:space-y-1">
          <h3 className="font-semibold lg:text-base xl:text-lg 2xl:text-xl">
            Should Do!
          </h3>
          <p className="text-muted-foreground lg:text-[9px] xl:text-[11px] 2xl:text-xs">
            Wild ideas from the crew.
          </p>
        </div>
        <PillButton href="#" variant="ghost">
          View Details
        </PillButton>
      </div>

      <div className="h-full flex flex-col gap-2 justify-between">
        {shouldDoSeeds.map((idea) => {
          const Icon = idea.icon ?? Sparkles;
          const usesClass = (idea.iconColor ?? "").includes("text-");
          return (
            <div
              key={idea.id}
              className="flex-1 cursor-pointer select-none border-2 border-gray-200 border-dashed bg-white flex items-center justify-between lg:py-1 xl:py-2 2xl:py-3 lg:px-3 xl:px-4 2xl:px-5 lg:rounded-xl 2xl:rounded-2xl"
            >
              <div className="flex items-center lg:gap-2 xl:gap-3 min-w-0">
                <span className="shrink-0">
                  <Icon
                    className={
                      usesClass
                        ? `${
                            idea.iconColor ?? "text-primary"
                          } lg:w-4 lg:h-4 xl:w-5 xl:h-5`
                        : "lg:w-4 lg:h-4 xl:w-5 xl:h-5"
                    }
                    style={
                      usesClass
                        ? undefined
                        : { color: idea.iconColor ?? "var(--primary)" }
                    }
                  />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-medium xl:mb-0.5 2xl:mb-1 lg:text-xs xl:text-sm 2xl:text-base truncate">
                    {idea.title}
                  </div>
                  <div className="lg:text-[9px] xl:text-[11px] 2xl:text-xs text-muted-foreground flex items-center gap-2 truncate">
                    <Users className="lg:w-2 lg:h-2 xl:w-3 xl:h-3 shrink-0" />
                    <span className="truncate">
                      {formatLikes(idea.likesCount)}
                    </span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                disabled={true}
                className="group inline-flex items-center justify-center rounded-full lg:px-1.5 xl:px-2.5 lg:py-1 xl:py-2 transition-transform duration-200 ease-out active:scale-95 text-coral hover:-translate-y-0.5"
              >
                <Heart className="lg:w-3.5 lg:h-3.5 xl:w-4.5 xl:h-4.5 transition-transform duration-200 ease-out group-hover:scale-110" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShouldDoWidget;
