"use client";

import { X } from "lucide-react";
import type { ReactNode } from "react";

interface SlideOverProps {
  show: boolean;
  visible: boolean;
  onClose: () => void;
  badge?: string;
  title: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
}

const SlideOver = ({
  show,
  visible,
  onClose,
  badge,
  title,
  actions,
  children,
}: SlideOverProps) => {
  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end transition-colors duration-300 ${visible ? "bg-black/20" : "bg-black/0"}`}
    >
      <div
        className="absolute inset-0 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div
        className={`relative h-full w-full max-w-5xl bg-card shadow-2xl border-l-8 border-gray-100 flex flex-col transition-transform duration-300 ease-out ${visible ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
          <div>
            {badge && (
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                {badge}
              </p>
            )}
            <h2 className="text-lg font-semibold text-foreground">{title}</h2>
          </div>
          <div className="flex items-center gap-4">
            {actions}
            <button type="button" onClick={onClose} aria-label="Close">
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="min-h-full flex flex-col px-6 py-5">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SlideOver;
