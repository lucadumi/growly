"use client";

import {
  FormEvent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import { ChevronDown, Lock } from "lucide-react";

import { updateProfileAction } from "@/app/account/actions/update-profile";

const FOCUS_AREAS = [
  "Health & Fitness",
  "Mindfulness",
  "Productivity",
  "Learning",
  "Relationships",
  "Creativity",
  "Finance",
  "Sleep",
  "Nutrition",
  "Other",
];

interface EditProfileFormProps {
  initialName: string;
  initialEmail: string;
  initialUsername?: string | null;
  initialBio?: string | null;
  initialLocation?: string | null;
  initialFocusArea?: string | null;
  initialPrivateAccount?: boolean;
}

const inputClass =
  "w-full rounded-2xl lg:px-3 xl:px-4 lg:py-1.5 xl:py-2 lg:text-[11px] xl:text-xs 2xl:text-sm border border-gray-100 focus:border-primary/40 focus:outline-none bg-white";

const labelClass = "flex flex-col gap-1 lg:text-[11px] xl:text-xs 2xl:text-sm";

const dropdownWrapperClass =
  "relative overflow-visible rounded-2xl bg-white border border-gray-100 hover:border-primary/40 transition-colors focus-within:border-primary/40";

const sanitizeDropdownValue = (value: string) =>
  value.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase();

const focusAreaDropdownOptionsId = "focus-area-dropdown-options";

export default function EditProfileForm({
  initialName,
  initialEmail,
  initialUsername,
  initialBio,
  initialLocation,
  initialFocusArea,
  initialPrivateAccount = false,
}: EditProfileFormProps) {
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [username, setUsername] = useState(initialUsername ?? "");
  const [bio, setBio] = useState(initialBio ?? "");
  const [location, setLocation] = useState(initialLocation ?? "");
  const [focusArea, setFocusArea] = useState(initialFocusArea ?? "");
  const [privateAccount, setPrivateAccount] = useState(initialPrivateAccount);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();
  const [focusAreaMenuOpen, setFocusAreaMenuOpen] = useState(false);
  const [focusAreaDropDirection, setFocusAreaDropDirection] = useState<
    "down" | "up"
  >("down");
  const focusAreaToggleRef = useRef<HTMLButtonElement | null>(null);
  const focusAreaPanelRef = useRef<HTMLDivElement | null>(null);

  const closeFocusAreaMenu = useCallback(() => {
    setFocusAreaMenuOpen(false);
    focusAreaToggleRef.current?.blur();
  }, []);

  useEffect(() => {
    if (!focusAreaMenuOpen) return undefined;
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (
        focusAreaPanelRef.current?.contains(target) ||
        focusAreaToggleRef.current?.contains(target)
      ) {
        return;
      }
      setFocusAreaMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [focusAreaMenuOpen]);

  useLayoutEffect(() => {
    if (!focusAreaMenuOpen) return undefined;
    const update = () => {
      const toggleRect = focusAreaToggleRef.current?.getBoundingClientRect();
      if (!toggleRect) return;
      const panelHeight =
        focusAreaPanelRef.current?.getBoundingClientRect().height ?? 0;
      const spaceBelow = window.innerHeight - toggleRect.bottom;
      const spaceAbove = toggleRect.top;
      setFocusAreaDropDirection(
        spaceBelow >= panelHeight + 8 || spaceBelow >= spaceAbove
          ? "down"
          : "up",
      );
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [focusAreaMenuOpen]);

  useEffect(() => {
    setName(initialName);
  }, [initialName]);
  useEffect(() => {
    setEmail(initialEmail);
  }, [initialEmail]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("username", username);
    formData.set("bio", bio);
    formData.set("location", location);
    formData.set("focusArea", focusArea);
    formData.set("privateAccount", String(privateAccount));

    startTransition(async () => {
      try {
        await updateProfileAction(formData);
        setStatus("success");
        setMessage("Profile updated successfully.");
      } catch (error) {
        setStatus("error");
        setMessage(
          error instanceof Error
            ? error.message
            : "Unable to save right now. Please try again later.",
        );
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-full lg:space-y-3 xl:space-y-4 flex flex-col justify-between"
    >
      {message && (
        <div
          className={`rounded-2xl lg:px-3 xl:px-4 lg:py-2 xl:py-3 lg:text-[11px] xl:text-xs 2xl:text-sm ${
            status === "success"
              ? "bg-green-soft/15 text-foreground"
              : "bg-destructive/10 text-destructive"
          }`}
        >
          {message}
        </div>
      )}

      <div className="grid lg:gap-2 xl:gap-3">
        <label className={labelClass}>
          <span className="text-muted-foreground">Name</span>
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
        </label>
        <label className={labelClass}>
          <span className="text-muted-foreground">Email</span>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </label>
        <label className={labelClass}>
          <span className="text-muted-foreground">Username</span>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground lg:text-[11px] xl:text-xs">
              @
            </span>
            <input
              name="username"
              value={username}
              onChange={(e) =>
                setUsername(
                  e.target.value.replace(/[^a-z0-9_]/g, "").toLowerCase(),
                )
              }
              placeholder="yourhandle"
              className={`${inputClass} lg:pl-6 xl:pl-7`}
            />
          </div>
        </label>
      </div>

      <div className="grid lg:gap-2 xl:gap-3">
        <label className={labelClass}>
          <span className="text-muted-foreground">Bio</span>
          <textarea
            name="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell the community a little about yourself..."
            maxLength={300}
            rows={3}
            className={`${inputClass} resize-none`}
          />
          <span className="text-muted-foreground lg:text-[9px] xl:text-[10px] text-right">
            {bio.length}/300
          </span>
        </label>
        <div className={labelClass}>
          <span className="text-muted-foreground">Focus area</span>
          <div className={dropdownWrapperClass}>
            <button
              type="button"
              ref={focusAreaToggleRef}
              onClick={() => setFocusAreaMenuOpen((open) => !open)}
              aria-haspopup="listbox"
              aria-expanded={focusAreaMenuOpen}
              aria-controls={focusAreaDropdownOptionsId}
              className="w-full flex items-center justify-between rounded-2xl lg:px-3 xl:px-4 lg:py-1.5 xl:py-2 lg:text-[11px] xl:text-xs 2xl:text-sm font-medium text-foreground focus:outline-none"
            >
              <span className={focusArea ? "" : "text-muted-foreground"}>
                {focusArea || "— Select a focus area —"}
              </span>
              <ChevronDown
                className={`lg:w-2 lg:h-2 xl:h-3 xl:w-3 2xl:h-4 2xl:w-4 transition-transform ${
                  focusAreaMenuOpen
                    ? "rotate-180 text-primary"
                    : "text-muted-foreground"
                }`}
              />
            </button>
            {focusAreaMenuOpen && (
              <div
                ref={focusAreaPanelRef}
                id={focusAreaDropdownOptionsId}
                role="listbox"
                aria-activedescendant={
                  focusArea
                    ? `focus-area-option-${sanitizeDropdownValue(focusArea)}`
                    : undefined
                }
                className={`absolute left-0 right-0 z-20 lg:max-h-48 xl:max-h-60 overflow-y-auto rounded-2xl border border-gray-100 bg-white shadow-md ${
                  focusAreaDropDirection === "down"
                    ? "top-full mt-2"
                    : "bottom-full mb-2"
                }`}
              >
                {FOCUS_AREAS.map((area) => {
                  const optionId = `focus-area-option-${sanitizeDropdownValue(area)}`;
                  return (
                    <button
                      key={area}
                      id={optionId}
                      type="button"
                      role="option"
                      aria-selected={focusArea === area}
                      onClick={() => {
                        setFocusArea(area);
                        closeFocusAreaMenu();
                      }}
                      className={`w-full rounded-none border-b border-gray-100 lg:px-3 xl:px-4 lg:py-2 xl:py-3 text-left lg:text-[11px] xl:text-xs transition last:border-b-0 ${
                        focusArea === area ? "font-semibold" : ""
                      }`}
                    >
                      {area}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Location & web */}
      <div className="grid lg:gap-2 xl:gap-3">
        <label className={labelClass}>
          <span className="text-muted-foreground">Location</span>
          <input
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Amsterdam, NL"
            className={inputClass}
          />
        </label>
      </div>

      {/* Privacy */}
      <div className="rounded-2xl bg-gray-100 lg:p-3 xl:p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center lg:gap-3 xl:gap-4 min-w-0">
            <div className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-black/20">
              <Lock className="w-3 h-3 text-white" />
            </div>
            <div className="min-w-0">
              <p className="lg:text-[11px] xl:text-xs font-semibold text-foreground">
                Private profile
              </p>
              <p className="lg:text-[9px] xl:text-[10px] text-muted-foreground">
                {privateAccount
                  ? "Only you can see your shared habits and profile."
                  : "Your profile and shared habits are visible to the community."}
              </p>
            </div>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={privateAccount}
            onClick={() => setPrivateAccount((prev) => !prev)}
            className={`relative shrink-0 inline-flex h-5 w-9 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
              privateAccount ? "bg-primary" : "bg-muted-foreground/30"
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition duration-200 ${
                privateAccount ? "translate-x-4" : "translate-x-0"
              }`}
            />
          </button>
        </div>
        <input
          type="hidden"
          name="privateAccount"
          value={String(privateAccount)}
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-full bg-primary lg:px-3 xl:px-4 lg:py-1.5 xl:py-2 lg:text-[11px] xl:text-xs 2xl:text-sm font-semibold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? "Saving..." : "Save changes"}
      </button>
    </form>
  );
}
