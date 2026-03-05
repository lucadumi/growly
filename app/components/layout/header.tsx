"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useSession } from "@/app/context/session-context";
import { useXP } from "@/app/context/xp-context";
import { signOut } from "@/lib/actions/auth-actions";
import { Bell, ChevronDown, Sprout, User } from "lucide-react";

function timeAgo(timestamp: string): string {
  const diff = Date.now() - new Date(timestamp).getTime();
  const seconds = Math.floor(diff / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

const formatSegment = (segment: string) =>
  segment
    .replace(/[\[\]]/g, "")
    .split(/[-_]/)
    .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
    .join(" ")
    .trim();

const isLikelyId = (segment: string) => /^[0-9a-fA-F-]{6,}$/.test(segment);

type AccountDropdownProps = {
  session: NonNullable<ReturnType<typeof useSession>["session"]>;
};

function NotificationsDropdown() {
  const { activityLog, markNotificationsRead } = useXP();
  const [isOpen, setIsOpen] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [bellRing, setBellRing] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const prevCountRef = useRef(activityLog.length);
  const newTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (activityLog.length > prevCountRef.current) {
      setShowNew(true);
      setBellRing(true);
      setTimeout(() => setBellRing(false), 600);
      if (newTimerRef.current) clearTimeout(newTimerRef.current);
      newTimerRef.current = setTimeout(() => setShowNew(false), 4000);
    }
    prevCountRef.current = activityLog.length;
  }, [activityLog.length]);

  useEffect(() => {
    return () => {
      if (newTimerRef.current) clearTimeout(newTimerRef.current);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMarkXpRead = (id: string) => {
    void markNotificationsRead([id]);
  };

  const totalXpNotifications = activityLog.length;
  const visibleXpNotifications = activityLog.slice(0, 5);
  const xpOverflow = Math.max(
    0,
    totalXpNotifications - visibleXpNotifications.length,
  );
  const totalCount = totalXpNotifications;
  const badgeLabel =
    totalCount > 9 ? "9+" : totalCount > 0 ? totalCount.toString() : null;
  const hasBadge = Boolean(badgeLabel);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="Open notifications"
        className="inline-flex items-center gap-1.5 rounded-full lg:p-1 xl:p-1.5 2xl:p-2 bg-card border border-gray-100 text-xs font-semibold text-muted-foreground transition hover:border-card hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <Bell
          className={`lg:h-3.5 lg:w-3.5 xl:h-4 xl:w-4 ${
            hasBadge ? "lg:ml-0.5 xl:ml-1" : ""
          } ${bellRing ? "animate-[ring_0.6s_ease-in-out]" : ""}`}
        />
        {badgeLabel ? (
          <span className="inline-flex items-center justify-center rounded-full bg-primary text-white lg:w-4 lg:h-4 xl:w-5 xl:h-5 lg:text-[9px] xl:text-[10px] font-bold">
            {badgeLabel}
          </span>
        ) : null}
        {showNew ? (
          <span className="inline-flex items-center justify-center rounded-full bg-green-500 text-white lg:px-1 xl:px-1.5 lg:h-4 xl:h-5 lg:text-[8px] xl:text-[9px] font-bold uppercase tracking-wide animate-[fadeInOut_4s_ease-in-out_forwards]">
            new
          </span>
        ) : null}
      </button>

      <div
        className={`absolute right-0 top-full lg:mt-2 xl:mt-3 w-72 lg:rounded-xl xl:rounded-2xl border border-gray-100 bg-card shadow-md transition-all duration-200 ease-out z-50 ${
          isOpen
            ? "opacity-100 visible translate-y-0 pointer-events-auto"
            : "opacity-0 invisible translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between lg:px-3 xl:px-4 lg:py-2 xl:py-3">
          <p className="lg:text-[9px] xl:text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Notifications
          </p>
          <span className="lg:text-[9px] xl:text-[10px] text-muted-foreground">
            {badgeLabel ? `${totalCount} unread` : "Up to date"}
          </span>
        </div>
        <div className="border-t border-gray-100 lg:px-3 xl:px-4 lg:py-2 xl:py-3 space-y-3">
          <div>
            {activityLog.length === 0 ? (
              <p className="lg:text-[9px] xl:text-[10px] text-muted-foreground mt-1">
                No XP activity yet. Complete a todo or habit to log XP.
              </p>
            ) : (
              <div className="grid gap-2">
                {visibleXpNotifications.map((entry) => (
                  <div
                    key={entry.id}
                    className="flex items-center justify-between gap-2"
                  >
                    <div className="flex flex-col min-w-0">
                      <span className="lg:text-[9px] xl:text-[11px] font-semibold text-foreground">
                        {entry.label}
                      </span>
                      {entry.detail ? (
                        <span className="lg:text-[9px] xl:text-[10px] text-muted-foreground">
                          {entry.detail}
                        </span>
                      ) : null}
                      <span className="lg:text-[8px] xl:text-[9px] text-muted-foreground/60">
                        {timeAgo(entry.timestamp)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="lg:text-[10px] xl:text-xs font-bold text-muted-foreground">
                        {entry.xp} XP
                      </span>
                      <button
                        type="button"
                        onClick={() => handleMarkXpRead(entry.id)}
                        className="lg:text-[9px] xl:text-[10px] text-muted-foreground hover:text-primary underline-offset-2 hover:underline"
                      >
                        Mark as read
                      </button>
                    </div>
                  </div>
                ))}
                {xpOverflow > 0 ? (
                  <p className="mt-1 text-[10px] text-muted-foreground">
                    + {xpOverflow} more XP update
                    {xpOverflow === 1 ? "" : "s"} not shown
                  </p>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function AccountDropdown({ session }: AccountDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const {
    level,
    xpNeededForLevelUp,
    xpGainedInLevel,
    progress,
    todayXP,
    streakBonus,
    loading: xpLoading,
  } = useXP();
  const xpToNextLevel = xpNeededForLevelUp - xpGainedInLevel;
  const isNearLevelUp = !xpLoading && progress >= 80;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = () => {
    setIsOpen(false);
    startTransition(async () => {
      await signOut();
      router.push("/");
      router.refresh();
    });
  };

  const name = session.user?.name ?? "Account";
  const email = session.user?.email;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="Open account menu"
        className="inline-flex items-center border border-gray-100 justify-center lg:gap-2 xl:gap-3 rounded-full lg:px-3 xl:px-4 lg:py-1 xl:py-2 bg-card text-xs font-semibold text-primary transition hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <User className="lg:h-3 lg:w-3 xl:h-4 xl:w-4" />
        <p className="lg:text-[10px] xl:text-xs 2xl:text-sm truncate">{name}</p>
        <ChevronDown
          className={`lg:h-2 lg:w-2 xl:w-3 xl:h-3 2xl:w-4 2xl:h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute right-0 top-full lg:mt-2 xl:mt-3 lg:w-40 xl:w-56 lg:rounded-xl xl:rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-200 ease-out z-50 ${
          isOpen
            ? "opacity-100 visible translate-y-0 pointer-events-auto"
            : "opacity-0 invisible translate-y-2 pointer-events-none"
        }`}
      >
        <div className="lg:px-3 xl:px-4 lg:py-2 xl:py-3 text-muted-foreground">
          <p className="lg:text-[10px] xl:text-xs 2xl:text-sm font-semibold text-foreground truncate">
            {name}
          </p>
          {email && (
            <p className="mt-1 lg:text-[8px] xl:text-[10px] 2xl:text-[11px] tracking-wide text-muted-foreground truncate">
              {email}
            </p>
          )}
          {!xpLoading && (
            <div className="mt-2 flex flex-wrap gap-1">
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary lg:px-2 lg:py-0.5 lg:text-[8px] xl:text-[9px] font-bold uppercase tracking-wide">
                Lv.{level}
              </span>
              {isNearLevelUp ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 text-amber-600 lg:px-2 lg:py-0.5 lg:text-[8px] xl:text-[9px] font-semibold">
                  {xpToNextLevel} XP to level up!
                </span>
              ) : todayXP > 0 ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 text-green-600 lg:px-2 lg:py-0.5 lg:text-[8px] xl:text-[9px] font-semibold">
                  {todayXP} XP today
                </span>
              ) : null}
              {streakBonus > 0 && (
                <span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 text-yellow-600 lg:px-2 lg:py-0.5 lg:text-[8px] xl:text-[9px] font-semibold">
                  {streakBonus} streak
                </span>
              )}
            </div>
          )}
        </div>
        <div className="border-t border-gray-50 lg:p-1 xl:p-2 space-y-1 lg:text-[8px] xl:text-[11px]">
          <Link
            href="/account"
            className="block rounded-xl lg:px-2 xl:px-3 lg:py-0.5 xl:py-1 2xl:py-2 font-semibold uppercase tracking-[0.4em] text-primary transition-colors hover:bg-primary/5"
            onClick={() => setIsOpen(false)}
          >
            Account
          </Link>
          <button
            type="button"
            onClick={handleSignOut}
            disabled={isPending}
            className="w-full cursor-pointer rounded-xl lg:px-2 xl:px-3 lg:py-0.5 xl:py-1 2xl:py-2 text-left font-semibold text-foreground bg-card/70 hover:bg-card/50 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isPending ? "Signing out..." : "Log out"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const { session } = useSession();

  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter(Boolean)
    .filter((segment) => !isLikelyId(segment));

  const breadcrumb = segments.length > 0 ? segments : ["home"];
  const formatted = breadcrumb.map((segment) => formatSegment(segment));

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Todos", href: "/dashboard/todos" },
    { label: "Habits", href: "/dashboard/habits" },
    { label: "Analytics", href: "/dashboard/analytics" },
  ];

  const normalizedPathname = pathname ?? "";
  const isLinkActive = (href: string) =>
    normalizedPathname === href || normalizedPathname.startsWith(`${href}/`);
  return (
    <header className="fixed top-0 left-0 w-full border-b border-gray-100 backdrop-blur-sm z-40">
      <div className="lg:px-6 xl:px-8 2xl:px-28 mx-auto lg:h-12 xl:h-16 2xl:h-20 grid grid-cols-[minmax(0,1fr)_minmax(0,auto)_minmax(0,1fr)] items-center gap-4">
        <div className="flex items-center min-w-0 gap-4">
          <Sprout className="lg:w-4 lg:h-4 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8 text-green-soft" />

          <div className="flex w-full flex-1 flex-col min-w-0 xl:flex-row xl:items-center lg:gap-16 xl:gap-20 2xl:gap-24">
            <div className="flex items-center lg:gap-1 xl:gap-1.5 2xl:gap-2 lg:text-xs xl:text-sm 2xl:text-base truncate">
              {formatted.map((label, index) => (
                <span
                  key={`${label}-${index}`}
                  className="flex items-center lg:gap-0.5 xl:gap-1 2xl:gap-1.5"
                >
                  <span
                    className={`lg:text-[11px] xl:text-xs 2xl:text-sm font-semibold uppercase tracking-[0.3em] transition ${
                      index === 0 ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {label}
                  </span>
                  {index < formatted.length - 1 && (
                    <span className="hidden sm:inline">/</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {session ? (
          <nav
            aria-label="Dashboard shortcuts"
            className="flex flex-wrap items-center lg:gap-2 xl:gap-3 uppercase tracking-[0.3em] justify-self-center"
          >
            {quickLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full lg:px-2 xl:px-3 2xl:px-4 lg:py-0.5 xl:py-1 lg:text-[8px] xl:text-[10px] 2xl:text-[11px] font-semibold transition ${
                    active
                      ? "bg-primary text-white"
                      : "border border-gray-100 text-muted-foreground hover:border-primary/60 hover:text-primary"
                  } focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        ) : (
          <div />
        )}

        <div className="flex items-center lg:gap-2 xl:gap-3 justify-self-end">
          {session ? <NotificationsDropdown /> : null}
          {session && <AccountDropdown session={session} />}
        </div>
      </div>
    </header>
  );
}
