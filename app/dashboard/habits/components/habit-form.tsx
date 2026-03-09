"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";

import Button from "@/app/components/ui/button";
import CalendarDropdown from "@/app/components/ui/calendar-dropdown";
import TimeInput from "@/app/components/ui/time-input";
import { useUnsavedChangesGuard } from "@/app/hooks/use-unsaved-changes-guard";
import type { Cadence, HabitFormState, UnitCategory } from "../types";

interface HabitFormProps {
  mode?: "create" | "edit";
  habitId?: string;
  initialHabit?: Partial<HabitFormState>;
  onSuccess?: () => void;
  onCancel?: () => void;
  formId?: string;
  hideSubmitButton?: boolean;
}

const fieldButtonClassName =
  "w-full flex items-center justify-between rounded-2xl lg:px-3 xl:px-4 lg:py-2 xl:py-3 lg:text-[11px] xl:text-xs 2xl:text-sm font-medium text-foreground transition-all hover:border-primary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-0";

const inputClassName =
  "w-full border-none bg-transparent lg:px-3 xl:px-4 lg:py-2 xl:py-3 lg:text-[11px] xl:text-xs 2xl:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:outline-none";

const countClassName =
  "w-full border-none bg-transparent lg:px-4 lg:py-2 xl:px-6 2xl:px-8 xl:py-4 lg:text-2xl xl:text-3xl 2xl:text-4xl text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:outline-none";

const dropdownSelectWrapperClassName =
  "relative overflow-visible rounded-2xl bg-card/30 border border-gray-100 hover:border-primary/40 transition-colors hover:border-primary/50 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/30 focus-within:ring-offset-0";

const cadenceOptions: Cadence[] = ["Daily", "Weekly", "Monthly"];
const sanitizeDropdownValue = (value: string) =>
  value.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase();
const cadenceDropdownOptionsId = "habit-cadence-dropdown-options";

const unitCategories: UnitCategory[] = ["Quantity", "Time"];
const goalUnitsByCategory: Record<UnitCategory, string[]> = {
  Quantity: ["count", "steps", "ml", "ounce", "Cal", "g", "mg", "drink"],
  Time: ["seconds", "minutes", "hours"],
};

const HabitForm: React.FC<HabitFormProps> = ({
  mode = "create",
  habitId,
  initialHabit,
  onSuccess,
  formId,
  hideSubmitButton = false,
}) => {
  const router = useRouter();
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const buildDefaultForm = useMemo(
    () => ({
      name: "",
      description: "",
      cadence: "Daily" as Cadence,
      startDate: today,
      timeWindow: "07:00",
      goalAmount: "1",
      goalUnit: "count",
      goalUnitCategory: "Quantity" as UnitCategory,
    }),
    [today],
  );

  const [form, setForm] = useState<HabitFormState>({
    ...buildDefaultForm,
    ...initialHabit,
  });
  const [saved, setSaved] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cadenceMenuOpen, setCadenceMenuOpen] = useState(false);

  const [cadenceDropDirection, setCadenceDropDirection] = useState<
    "down" | "up"
  >("down");
  const cadenceToggleRef = useRef<HTMLButtonElement | null>(null);
  const cadencePanelRef = useRef<HTMLDivElement | null>(null);
  const [showStartDateDropdown, setShowStartDateDropdown] = useState(false);
  const startDateToggleRef = useRef<HTMLButtonElement | null>(null);
  const closeCadenceMenu = useCallback(() => {
    setCadenceMenuOpen(false);
    cadenceToggleRef.current?.blur();
  }, []);

  const markDirty = useCallback(() => {
    setIsDirty(true);
    setSaved(false);
  }, []);

  useEffect(() => {
    setForm({ ...buildDefaultForm, ...initialHabit });
    setIsDirty(false);
    setSaved(false);
  }, [buildDefaultForm, initialHabit]);

  const updateDropdownDirection = (
    toggleRef: React.RefObject<HTMLButtonElement | null>,
    panelRef: React.RefObject<HTMLDivElement | null>,
    setDirection: React.Dispatch<React.SetStateAction<"down" | "up">>,
  ) => {
    if (typeof window === "undefined") {
      return;
    }
    const toggleRect = toggleRef.current?.getBoundingClientRect();
    if (!toggleRect) {
      return;
    }
    const panelHeight = panelRef.current?.getBoundingClientRect().height ?? 0;
    const spacing = 8;
    const spaceBelow = window.innerHeight - toggleRect.bottom;
    const spaceAbove = toggleRect.top;
    if (spaceBelow >= panelHeight + spacing) {
      setDirection("down");
    } else if (spaceAbove >= panelHeight + spacing) {
      setDirection("up");
    } else {
      setDirection("down");
    }
  };

  useEffect(() => {
    if (!cadenceMenuOpen) return undefined;
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (
        cadencePanelRef.current?.contains(target) ||
        cadenceToggleRef.current?.contains(target)
      ) {
        return;
      }
      setCadenceMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [cadenceMenuOpen]);

  useLayoutEffect(() => {
    if (!cadenceMenuOpen) {
      return undefined;
    }
    const update = () =>
      updateDropdownDirection(
        cadenceToggleRef,
        cadencePanelRef,
        setCadenceDropDirection,
      );
    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [cadenceMenuOpen]);

  const handleChange =
    (field: keyof HabitFormState) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
      markDirty();
    };

  const handleStartDateSelect = (value: string) => {
    setForm((prev) => ({ ...prev, startDate: value }));
    markDirty();
    setShowStartDateDropdown(false);
  };

  const handleTimeInputChange = (value: string) => {
    setForm((prev) => ({ ...prev, timeWindow: value }));
    markDirty();
  };

  const submitHabit = useCallback(
    async ({ skipRedirect = false } = {}) => {
      if (isSubmitting) {
        return false;
      }
      setIsSubmitting(true);
      const payload = {
        name: form.name,
        description: form.description,
        cadence: form.cadence,
        startDate: form.startDate,
        timeWindow: form.timeWindow,
        goalAmount: form.goalAmount,
        goalUnit: form.goalUnit,
        goalUnitCategory: form.goalUnitCategory,
      };
      const url =
        mode === "edit" && habitId ? `/api/habits/${habitId}` : "/api/habits";
      const method = mode === "edit" ? "PATCH" : "POST";
      try {
        const response = await fetch(url, {
          method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!response.ok) {
          console.error("Failed to save habit", await response.text());
          return false;
        }
        setSaved(true);
        setIsDirty(false);
        if (!skipRedirect) {
          if (onSuccess) {
            onSuccess();
          } else {
            router.push("/dashboard/habits");
          }
        }
        return true;
      } catch (error) {
        console.error("Failed to save habit", error);
        return false;
      } finally {
        setIsSubmitting(false);
      }
    },
    [form, habitId, isSubmitting, mode, onSuccess, router],
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    void submitHabit();
  };

  const handleGuardSave = useCallback(
    () => submitHabit({ skipRedirect: true }),
    [submitHabit],
  );
  const handleGuardDiscard = useCallback(() => {
    setIsDirty(false);
  }, []);

  // Only enable the unsaved-changes guard when not in inline/modal mode
  const { guardDialog } = useUnsavedChangesGuard({
    isDirty: onSuccess ? false : isDirty,
    onSave: handleGuardSave,
    onDiscard: handleGuardDiscard,
  });

  const formattedStartDate = form.startDate
    ? new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
      }).format(new Date(form.startDate))
    : "Tap to pick a date";
  const startDateHelperText = form.startDate
    ? "Tap to change"
    : "Tap to pick a date";

  return (
    <>
      {guardDialog}

      {saved ? (
        <div className="rounded-2xl bg-green-soft/15 lg:px-3 xl:px-4 lg:py-2 xl:py-3 lg:text-[11px] xl:text-xs 2xl:text-sm text-foreground mb-4">
          Habit saved. It is now synced to your dashboard.
        </div>
      ) : null}

      <div className="flex-1 flex flex-col">
        <form
          id={formId}
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col lg:gap-3 xl:gap-5"
        >
          <div className="flex-1 lg:space-y-3 xl:space-y-4">
            <label className="lg:space-y-1 xl:space-y-2 block">
              <div className="flex items-center lg:text-xs xl:text-sm font-semibold">
                <span>Habit name</span>
              </div>
              <div className={dropdownSelectWrapperClassName}>
                <input
                  value={form.name}
                  onChange={handleChange("name")}
                  placeholder="e.g. Morning stretch"
                  maxLength={80}
                  className={inputClassName}
                  required
                />
              </div>
            </label>

            <label className="lg:space-y-1 xl:space-y-2 block">
              <div className="flex items-center lg:text-xs xl:text-sm font-semibold">
                <span>Description</span>
              </div>
              <div className={dropdownSelectWrapperClassName}>
                <textarea
                  value={form.description}
                  onChange={handleChange("description")}
                  placeholder="Add a quick why, or the first steps you'll take."
                  rows={3}
                  className={`${inputClassName} resize-none leading-relaxed`}
                />
              </div>
            </label>

            <label className="lg:space-y-2 xl:space-y-3 block">
              <div className="flex items-center gap-2 lg:text-xs xl:text-sm font-semibold">
                <span>Goal value</span>
              </div>
              <p className="lg:text-[10px] xl:text-xs text-muted-foreground">
                Set the amount and the unit that counts as a win.
              </p>
              <div className="flex flex-wrap gap-2 p-1 w-fit rounded-full bg-gray-200">
                {unitCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      setForm((prev) => ({
                        ...prev,
                        goalUnitCategory: category,
                      }));
                      markDirty();
                    }}
                    className={`rounded-full lg:px-2 xl:px-3 lg:py-0.5 xl:py-1 lg:text-[11px] xl:text-xs font-semibold transition ${
                      form.goalUnitCategory === category
                        ? "bg-primary text-white"
                        : "bg-white text-foreground"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="grid lg:gap-2 xl:gap-3 lg:grid-cols-[1fr_auto]">
                <div className={`${dropdownSelectWrapperClassName} pr-0`}>
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    value={form.goalAmount}
                    onChange={handleChange("goalAmount")}
                    placeholder="1"
                    className={`${countClassName} text-left`}
                  />
                </div>
                <div className="lg:space-y-1 xl:space-y-2">
                  <div className="flex flex-wrap lg:gap-1.5 xl:gap-2">
                    {goalUnitsByCategory[form.goalUnitCategory].map((unit) => (
                      <button
                        key={unit}
                        type="button"
                        onClick={() => {
                          setForm((prev) => ({
                            ...prev,
                            goalUnit: unit,
                          }));
                          markDirty();
                        }}
                        className={`rounded-full border lg:px-2 xl:px-3 lg:py-0.5 xl:py-1 lg:text-[11px] xl:text-xs font-semibold transition ${
                          form.goalUnit === unit
                            ? "border-white bg-primary/10 text-primary"
                            : "border-gray-200 bg-white text-foreground hover:border-primary/40"
                        }`}
                      >
                        {unit}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => {
                        setForm((prev) => ({ ...prev, goalUnit: "" }));
                        markDirty();
                      }}
                      className="rounded-full border border-gray-200 bg-white lg:px-2 xl:px-3 lg:py-0.5 xl:py-1 lg:text-[11px] xl:text-xs font-semibold text-foreground transition hover:border-primary/40"
                    >
                      Custom
                    </button>
                  </div>
                  <div className={dropdownSelectWrapperClassName}>
                    <input
                      value={form.goalUnit}
                      onChange={handleChange("goalUnit")}
                      placeholder="Describe unit"
                      className={`${inputClassName} text-left`}
                    />
                  </div>
                </div>
              </div>
            </label>

            <div className="grid lg:grid-cols-2 lg:gap-2 xl:gap-4">
              <label className="lg:space-y-1 xl:space-y-2 block">
                <div className="flex items-center lg:text-xs xl:text-sm font-semibold">
                  <span>Cadence</span>
                </div>
                <div className={dropdownSelectWrapperClassName}>
                  <button
                    type="button"
                    ref={cadenceToggleRef}
                    onClick={() => {
                      setCadenceMenuOpen((open) => !open);
                    }}
                    aria-haspopup="listbox"
                    aria-expanded={cadenceMenuOpen}
                    aria-controls={cadenceDropdownOptionsId}
                    className={fieldButtonClassName}
                  >
                    <span className="truncate">{form.cadence}</span>
                    <ChevronDown
                      className={`lg:w-2 lg:h-2 xl:h-3 xl:w-3 2xl:h-4 2xl:w-4 transition-transform ${
                        cadenceMenuOpen
                          ? "rotate-180 text-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                  </button>
                  {cadenceMenuOpen && (
                    <div
                      ref={cadencePanelRef}
                      id={cadenceDropdownOptionsId}
                      role="listbox"
                      aria-activedescendant={
                        form.cadence
                          ? `cadence-option-${sanitizeDropdownValue(
                              form.cadence,
                            )}`
                          : undefined
                      }
                      className={`absolute left-0 right-0 z-20 lg:max-h-48 xl:max-h-60 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md ${
                        cadenceDropDirection === "down"
                          ? "top-full mt-2"
                          : "bottom-full mb-2"
                      }`}
                    >
                      {cadenceOptions.map((cadence) => {
                        const optionId = `cadence-option-${sanitizeDropdownValue(
                          cadence,
                        )}`;
                        return (
                          <button
                            key={cadence}
                            id={optionId}
                            type="button"
                            role="option"
                            aria-selected={form.cadence === cadence}
                            onClick={() => {
                              setForm((prev) => ({
                                ...prev,
                                cadence,
                              }));
                              markDirty();
                              closeCadenceMenu();
                            }}
                            className={`w-full rounded-none border-b border-gray-100 lg:px-3 xl:px-4 lg:py-2 xl:py-3 text-left lg:text-[11px] xl:text-xs transition last:border-b-0 ${
                              form.cadence === cadence && "font-semibold"
                            }`}
                          >
                            {cadence}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </label>

              <label className="lg:space-y-1 xl:space-y-2 block">
                <div className="flex items-center lg:text-xs xl:text-sm font-semibold">
                  <span>Start date</span>
                </div>
                <div className={dropdownSelectWrapperClassName}>
                  <button
                    type="button"
                    ref={startDateToggleRef}
                    onClick={() => {
                      setShowStartDateDropdown((open) => !open);
                    }}
                    aria-haspopup="dialog"
                    aria-expanded={showStartDateDropdown}
                    className={fieldButtonClassName}
                  >
                    <span className="flex flex-col items-start gap-1 text-left">
                      <span className="lg:text-[11px] xl:text-xs 2xl:text-sm font-semibold">
                        {formattedStartDate}
                      </span>
                      <span className="lg:text-[9px] xl:text-[10px] 2xl:text-[11px] text-muted-foreground">
                        {startDateHelperText}
                      </span>
                    </span>
                    <ChevronDown
                      className={`lg:w-2 lg:h-2 xl:h-3 xl:w-3 2xl:h-4 2xl:w-4 transition-transform ${
                        showStartDateDropdown
                          ? "rotate-180 text-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                  </button>
                  {showStartDateDropdown && (
                    <CalendarDropdown
                      selectedDate={form.startDate}
                      onSelect={handleStartDateSelect}
                      onClose={() => setShowStartDateDropdown(false)}
                      anchorRef={startDateToggleRef}
                    />
                  )}
                </div>
              </label>

              <label className="lg:space-y-1 xl:space-y-2 block">
                <div className="flex items-center lg:text-xs xl:text-sm font-semibold">
                  <span>Preferred time</span>
                </div>
                <TimeInput
                  time={form.timeWindow}
                  onChange={handleTimeInputChange}
                />
              </label>

            </div>
          </div>

          {/* Form actions */}
          {!hideSubmitButton && (
            <div className="flex items-center gap-2 pt-1">
              <Button
                type="submit"
                className="font-medium lg:px-3 xl:px-5 2xl:px-7 lg:py-1 xl:py-2 lg:text-[11px] xl:text-xs 2xl:text-sm bg-primary text-white hover:brightness-105 transition disabled:cursor-not-allowed disabled:brightness-90"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Saving..."
                  : mode === "edit"
                    ? "Update habit"
                    : "Create habit"}
              </Button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default HabitForm;
