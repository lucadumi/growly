"use client";

import {
  FormEvent,
  useEffect,
  useState,
  useTransition,
} from "react";
import { Lock } from "lucide-react";

import { updateProfileAction } from "@/app/account/actions/update-profile";
import Dropdown from "@/app/components/ui/dropdown";

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
].map((o) => ({ label: o, value: o }));

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
          <Dropdown
            id="focus-area"
            options={FOCUS_AREAS}
            value={focusArea}
            onChange={setFocusArea}
            placeholder="— Select a focus area —"
            wrapperClassName={dropdownWrapperClass}
            buttonClassName="w-full flex items-center justify-between rounded-2xl lg:px-3 xl:px-4 lg:py-1.5 xl:py-2 lg:text-[11px] xl:text-xs 2xl:text-sm font-medium text-foreground focus:outline-none"
          />
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
