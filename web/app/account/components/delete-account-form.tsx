"use client";

import { FormEvent, useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import Button from "@/app/components/ui/button";
import { deleteAccountAction } from "@/app/account/actions/delete-account";

const CONFIRMATION_TEXT = "I want to delete my account";

export default function DeleteAccountForm() {
  const [confirmation, setConfirmation] = useState("");
  const [status, setStatus] = useState<"idle" | "error">("idle");
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const canSubmit =
    confirmation.trim() === CONFIRMATION_TEXT && !isPending;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!canSubmit) {
      setStatus("error");
      setMessage(`Type "${CONFIRMATION_TEXT}" exactly to confirm.`);
      return;
    }

    setStatus("idle");
    setMessage("");

    startTransition(async () => {
      try {
        await deleteAccountAction();
        router.push("/");
        router.refresh();
      } catch (error) {
        setStatus("error");
        setMessage(
          error instanceof Error
            ? error.message
            : "Unable to delete your account right now.",
        );
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="lg:space-y-2 xl:space-y-3">
      <input
        type="text"
        value={confirmation}
        onChange={(event) => setConfirmation(event.target.value)}
        placeholder={CONFIRMATION_TEXT}
        className="w-full rounded-full bg-card border border-gray-100 lg:px-3 xl:px-4 lg:py-1 xl:py-2 lg:text-[11px] xl:text-xs 2xl:text-sm focus:outline-none focus:ring-2 focus:ring-rose-100"
      />

      {message && (
        <p
          className={`lg:text-[11px] xl:text-xs font-semibold ${
            status === "error"
              ? "text-destructive"
              : "text-green-soft-foreground"
          }`}
        >
          {message}
        </p>
      )}

      <Button
        type="submit"
        disabled={!canSubmit}
        className="lg:text-[11px] xl:text-xs 2xl:text-sm text-white font-semibold bg-red-400 transition lg:py-1 xl:py-2 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {isPending ? "Deleting…" : "Delete account"}
      </Button>
    </form>
  );
}
