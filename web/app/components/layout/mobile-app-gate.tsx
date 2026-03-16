import Image from "next/image";

const appStoreLink = "https://www.apple.com/app-store/";

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
          <Image src="/leaf.png" alt="Growly leaf" width={20} height={20} />
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

        {/* phone mockup */}
        <div className="w-full flex justify-center">
          <Image
            src="/mock/iphone-mockup.png"
            alt="Growly app preview"
            width={320}
            height={534}
            className="w-72 drop-shadow-xl"
            priority
          />
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
