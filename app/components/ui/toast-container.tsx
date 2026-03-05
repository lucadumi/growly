"use client";

import { useEffect, useState } from "react";

import { useToast, type Toast, type ToastTone } from "@/app/context/toast-context";

const TOAST_DURATION = 3500;

const toneBar: Record<ToastTone, string> = {
  success: "bg-primary",
  error: "bg-destructive",
  info: "bg-muted-foreground",
};

function ToastItem({ toast, onDismiss }: { toast: Toast; onDismiss: (id: string) => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Animate in
    const show = requestAnimationFrame(() => setVisible(true));

    const startTime = Date.now();
    const interval = window.setInterval(() => {
      const elapsed = Date.now() - startTime;
      setProgress(Math.min((elapsed / TOAST_DURATION) * 100, 100));
    }, 50);

    const timeout = window.setTimeout(() => {
      setVisible(false);
      window.setTimeout(() => onDismiss(toast.id), 300);
    }, TOAST_DURATION);

    return () => {
      cancelAnimationFrame(show);
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, [toast.id, onDismiss]);

  return (
    <div
      role="status"
      aria-live="assertive"
      className={`relative pointer-events-auto border border-muted/40 bg-card/90 backdrop-blur-sm lg:px-3 xl:px-4 2xl:px-5 lg:py-2 xl:py-3 2xl:py-4 rounded-sm overflow-hidden shadow-lg shadow-black/30 transition-all duration-300 origin-top ${
        visible ? "translate-y-0 opacity-100 scale-100" : "-translate-y-2 opacity-0 scale-95"
      }`}
    >
      <p className="lg:text-[11px] xl:text-xs 2xl:text-sm font-semibold text-foreground pr-6">
        {toast.message}
      </p>
      <button
        onClick={() => onDismiss(toast.id)}
        className="absolute top-1 right-2 text-muted-foreground hover:text-foreground lg:text-[10px] xl:text-xs transition-colors"
        aria-label="Dismiss"
      >
        ×
      </button>
      <div
        className={`absolute left-0 bottom-0 h-1 ${toneBar[toast.tone]} transition-all duration-100 ease-linear`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default function ToastContainer() {
  const { toasts, dismiss } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 lg:top-6 xl:top-8 z-[60] flex flex-col items-center gap-2">
      {toasts.map((t) => (
        <ToastItem key={t.id} toast={t} onDismiss={dismiss} />
      ))}
    </div>
  );
}
