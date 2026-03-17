"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export type DropdownOption = { label: string; value: string };

interface DropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  id?: string;
  wrapperClassName?: string;
  buttonClassName?: string;
}

export default function Dropdown({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  id,
  wrapperClassName = "relative overflow-visible rounded-2xl border border-gray-100 transition-colors hover:border-primary/50 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/30 focus-within:ring-offset-0",
  buttonClassName = "w-full flex items-center justify-between rounded-2xl bg-transparent lg:px-3 xl:px-4 lg:py-1.5 xl:py-3 text-left lg:text-[11px] xl:text-xs 2xl:text-sm text-foreground focus:outline-none focus-visible:outline-none",
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [direction, setDirection] = useState<"down" | "up">("down");
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const panelId = id ? `${id}-panel` : "dropdown-panel";

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.blur();
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const handleOutside = (event: Event) => {
      const target = event.target as Node | null;
      if (
        toggleRef.current?.contains(target) ||
        panelRef.current?.contains(target)
      )
        return;
      setOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, close]);

  useEffect(() => {
    if (!open) return undefined;

    const update = () => {
      if (typeof window === "undefined") return;
      const toggleRect = toggleRef.current?.getBoundingClientRect();
      if (!toggleRect) return;
      const panelHeight =
        panelRef.current?.getBoundingClientRect().height ?? 0;
      const spaceBelow = window.innerHeight - toggleRect.bottom;
      setDirection(spaceBelow >= panelHeight + 8 ? "down" : "up");
    };

    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [open]);

  const selected = options.find((o) => o.value === value);

  return (
    <div className={wrapperClassName}>
      <button
        type="button"
        ref={toggleRef}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((prev) => !prev)}
        className={buttonClassName}
      >
        <span className={`truncate ${selected ? "" : "text-muted-foreground"}`}>
          {selected?.label ?? placeholder}
        </span>
        <ChevronDown
          className={`lg:w-2 lg:h-2 xl:h-3 xl:w-3 2xl:h-4 2xl:w-4 transition-transform ${
            open ? "rotate-180 text-primary" : "text-muted-foreground"
          }`}
        />
      </button>
      {open && (
        <div
          ref={panelRef}
          id={panelId}
          role="listbox"
          aria-activedescendant={
            selected ? `${panelId}-${selected.value}` : undefined
          }
          className={`absolute left-0 right-0 z-20 lg:max-h-48 xl:max-h-60 overflow-y-auto rounded-2xl border border-gray-100 bg-white shadow-md ${
            direction === "down" ? "top-full mt-2" : "bottom-full mb-2"
          }`}
        >
          {options.map((option) => (
            <button
              key={option.value}
              id={`${panelId}-${option.value}`}
              type="button"
              role="option"
              aria-selected={value === option.value}
              onMouseDown={(e) => {
                e.preventDefault();
                setOpen(false);
                onChange(option.value);
              }}
              className={`w-full rounded-none border-b border-gray-100 lg:px-3 xl:px-4 lg:py-2 xl:py-3 text-left lg:text-[11px] xl:text-xs transition last:border-b-0 ${
                value === option.value
                  ? "bg-white font-bold"
                  : "text-foreground hover:bg-primary/5"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
