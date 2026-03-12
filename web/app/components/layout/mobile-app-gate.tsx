import { BellRing, Layers, Sprout, TrendingUp } from "lucide-react";

const appStoreLink = "https://www.apple.com/app-store/";

const featureTiles = [
  {
    icon: BellRing,
    title: "Intention-only reminders",
    copy: "Gentle nudges respect your focus windows.",
  },
  {
    icon: Layers,
    title: "Stacks with context",
    copy: "Log how you feel, not just if you checked a box.",
  },
  {
    icon: TrendingUp,
    title: "Momentum keeps living",
    copy: "Reflective prompts and insights help the tiny wins compound, even offline.",
  },
];

const AppLink = ({
  label,
  href,
  className = "",
}: {
  label: string;
  href: string;
  className?: string;
}) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center rounded-full bg-primary text-white px-6 py-3.5 text-center text-base font-semibold transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${className}`}
    target="_blank"
    rel="noreferrer"
  >
    {label}
  </a>
);

export default function MobileAppGate() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-card text-foreground">
      <div className="relative mx-auto flex min-h-screen w-full max-w-lg flex-col items-center justify-center gap-8 px-6 py-14">
        {/* logo badge */}
        <div className="flex items-center gap-3">
          <Sprout className="h-5 w-5 text-green-soft" />
          <span className="text-xs font-semibold uppercase tracking-[0.55em] text-muted-foreground">
            Growly
          </span>
        </div>

        {/* headline */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-[1.65rem] font-semibold leading-snug tracking-tight text-foreground">
            Build habits that survive
            <br />
            the real world.
          </h1>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            The calmest, most capable habit companion built for your phone.
          </p>
        </div>

        {/* feature tiles */}
        <div className="w-full rounded-3xl border border-gray-100 bg-white p-1">
          {featureTiles.map(({ icon: Icon, title, copy }, i) => (
            <div
              key={title}
              className={`flex items-start gap-4 px-5 py-4 ${
                i < featureTiles.length - 1 ? "border-b border-gray-50" : ""
              }`}
            >
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-foreground">{title}</p>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {copy}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex w-full flex-col items-center gap-3">
          <AppLink
            label="Download on the App Store"
            href={appStoreLink}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
