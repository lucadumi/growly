export default function Loading() {
  return (
    <main
      className="relative lg:px-4 xl:px-8 2xl:px-28 lg:pt-18 xl:pt-24 2xl:pt-28 lg:pb-8 xl:pb-12 2xl:pb-16 min-h-screen w-full bg-card text-foreground overflow-hidden"
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
                <div className="h-3 w-20 rounded bg-muted/50" />
                <div className="h-5 w-40 rounded bg-muted/70" />
                <div className="h-3 w-56 rounded bg-muted/40" />
              </div>
              <div className="h-6 w-24 rounded-full bg-muted/40" />
            </div>
            <div className="relative flex-1 overflow-hidden lg:rounded-2xl xl:rounded-3xl border border-gray-100 bg-card lg:px-4 xl:px-6 lg:py-6 xl:py-8 lg:h-[500px] animate-pulse">
              <div className="h-full w-full rounded-xl bg-muted/30" />
            </div>
          </div>

          {/* Sidebar: weekday rhythm + todo pie — col-span-1 */}
          <div className="lg:space-y-3 xl:space-y-4">
            {/* Weekday rhythm: 7 bars */}
            <div className="lg:rounded-2xl xl:rounded-3xl border border-gray-100 bg-card lg:p-4 xl:p-6 flex flex-col lg:gap-3 xl:gap-4 animate-pulse">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="h-3 w-20 rounded bg-muted/50" />
                  <div className="h-5 w-28 rounded bg-muted/70" />
                  <div className="h-3 w-32 rounded bg-muted/40" />
                </div>
                <div className="lg:h-9 lg:w-9 xl:h-10 xl:w-10 rounded-full bg-muted/30" />
              </div>
              <div className="grid grid-cols-7 lg:gap-4 xl:gap-3 lg:mt-1.5 xl:mt-2">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="lg:h-24 xl:h-28 w-full rounded-full bg-muted/30" />
                    <div className="h-3 w-6 rounded bg-muted/40" />
                  </div>
                ))}
              </div>
              <div className="h-10 rounded-2xl bg-muted/20" />
            </div>

            {/* Todo status pie */}
            <div className="lg:rounded-2xl xl:rounded-3xl border border-gray-100 bg-card lg:p-4 xl:p-6 animate-pulse">
              <div className="flex items-center justify-between lg:mb-2 xl:mb-4">
                <div className="space-y-1">
                  <div className="h-3 w-24 rounded bg-muted/50" />
                  <div className="h-5 w-24 rounded bg-muted/70" />
                  <div className="h-3 w-32 rounded bg-muted/40" />
                </div>
                <div className="lg:w-8 lg:h-8 xl:h-9 xl:w-9 rounded-full bg-muted/30" />
              </div>
              <div className="flex items-center lg:gap-4 xl:gap-6">
                <div className="relative lg:h-36 lg:w-36 xl:h-52 xl:w-52 rounded-full bg-muted/30" />
                <div className="flex flex-col lg:gap-2 xl:gap-3 flex-1">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="h-7 rounded-xl bg-muted/30" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
