export default function Loading() {
  return (
    <main
      className="relative lg:px-6 xl:px-8 2xl:px-28 lg:pt-14 xl:pt-20 2xl:pt-28 lg:pb-8 xl:pb-12 2xl:pb-16 min-h-screen w-full bg-card text-foreground overflow-hidden"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="lg:space-y-5 xl:space-y-7">
        {/* PageHeading */}
        <div className="space-y-2 animate-pulse">
          <div className="h-3 w-24 rounded bg-muted/60" />
          <div className="h-8 w-64 rounded bg-muted/70" />
          <div className="h-3 w-2/3 rounded bg-muted/50" />
        </div>

        {/* 4 stat cards */}
        <section className="grid lg:grid-cols-4 lg:gap-3 xl:gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 bg-card lg:p-3 xl:p-4 flex items-start justify-between animate-pulse"
            >
              <div className="space-y-2">
                <div className="h-3 w-20 rounded bg-muted/50" />
                <div className="h-7 w-16 rounded bg-muted/70" />
                <div className="h-3 w-28 rounded bg-muted/40" />
              </div>
              <div className="lg:w-9 lg:h-9 xl:h-10 xl:w-10 2xl:h-11 2xl:w-11 rounded-full bg-muted/30" />
            </div>
          ))}
        </section>

        {/* Momentum chart + sidebar */}
        <section className="grid grid-cols-3 lg:gap-4 xl:gap-6 items-stretch">
          {/* Momentum curve — col-span-2 */}
          <div className="col-span-2 flex flex-col h-full">
            <div className="flex items-start justify-between lg:mb-3 xl:mb-4 animate-pulse">
              <div className="space-y-1">
                <div className="h-5 w-40 rounded bg-muted/70" />
                <div className="h-3 w-56 rounded bg-muted/40" />
              </div>
              <div className="h-5 w-20 rounded bg-muted/40" />
            </div>
            <div className="relative flex-1 overflow-hidden lg:h-[500px] animate-pulse">
              <div className="h-full w-full rounded-xl bg-muted/20" />
            </div>
          </div>

          {/* Sidebar: weekday rhythm + todo pie — col-span-1 */}
          <div className="lg:space-y-3 xl:space-y-4">
            {/* Weekday rhythm: 7 bars */}
            <div className="flex flex-col lg:gap-3 xl:gap-4 animate-pulse">
              <div className="space-y-1">
                <div className="h-5 w-32 rounded bg-muted/70" />
                <div className="h-3 w-40 rounded bg-muted/40" />
              </div>
              <div className="grid grid-cols-7 lg:gap-4 xl:gap-3 lg:mt-1.5 xl:mt-2">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="lg:h-24 xl:h-28 w-full rounded-full bg-muted/30" />
                    <div className="h-2.5 w-5 rounded bg-muted/40" />
                    <div className="h-2.5 w-5 rounded bg-muted/30" />
                    <div className="h-2.5 w-5 rounded bg-muted/40" />
                  </div>
                ))}
              </div>
            </div>

            {/* Todo status pie */}
            <div className="animate-pulse">
              <div className="flex items-center justify-between lg:mb-2 xl:mb-4">
                <div className="space-y-1">
                  <div className="h-5 w-24 rounded bg-muted/70" />
                  <div className="h-3 w-36 rounded bg-muted/40" />
                </div>
                <div className="lg:w-8 lg:h-8 xl:h-9 xl:w-9 rounded-full bg-muted/30" />
              </div>
              <div className="flex items-center lg:gap-4 xl:gap-6 lg:pt-4 xl:pt-6">
                <div className="relative lg:h-36 lg:w-36 xl:h-52 xl:w-52 shrink-0 rounded-full bg-muted/30" />
                <div className="flex flex-col lg:gap-2 xl:gap-3 flex-1">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="h-8 rounded-2xl bg-muted/30" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Routines + Habit leaderboard */}
        <section className="grid grid-cols-3 lg:gap-4 xl:gap-6">
          {/* Routines */}
          <div className="animate-pulse">
            <div className="lg:mb-3 xl:mb-4 space-y-1">
              <div className="h-5 w-24 rounded bg-muted/70" />
              <div className="h-3 w-40 rounded bg-muted/40" />
            </div>
            <div className="lg:space-y-3 xl:space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="lg:space-y-1 xl:space-y-1.5">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="h-3 w-28 rounded bg-muted/60" />
                      <div className="h-2.5 w-20 rounded bg-muted/40" />
                    </div>
                    <div className="h-3 w-8 rounded bg-muted/60" />
                  </div>
                  <div className="w-full lg:h-1.5 xl:h-2 rounded-full bg-muted/30" />
                </div>
              ))}
            </div>
          </div>

          {/* Habit leaderboard */}
          <div className="col-span-2 animate-pulse">
            <div className="flex items-start justify-between lg:mb-3 xl:mb-4">
              <div className="space-y-1">
                <div className="h-5 w-36 rounded bg-muted/70" />
                <div className="h-3 w-52 rounded bg-muted/40" />
              </div>
              <div className="h-6 w-20 rounded-full bg-muted/30" />
            </div>
            <div className="lg:space-y-2 xl:space-y-2.5">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center lg:gap-2 xl:gap-3 rounded-2xl border border-gray-100 lg:px-3 xl:px-4 lg:py-2 xl:py-2.5"
                >
                  <div className="shrink-0 lg:w-5 lg:h-5 xl:w-6 xl:h-6 rounded-full bg-muted/40" />
                  <div className="flex-1 h-3 rounded bg-muted/50" />
                  <div className="shrink-0 h-5 w-14 rounded-full bg-muted/30" />
                  <div className="shrink-0 h-3 w-10 rounded bg-muted/40" />
                  <div className="shrink-0 lg:w-16 xl:w-20 h-1.5 rounded-full bg-muted/30" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
