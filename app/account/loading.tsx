export default function Loading() {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-card lg:pt-14 xl:pt-20"
      role="status"
      aria-busy="true"
    >
      <div className="relative z-10 grid lg:grid-cols-5 xl:grid-cols-10 lg:gap-5 xl:gap-6 lg:px-6 xl:px-8 2xl:px-28 lg:pb-8 xl:pb-12 2xl:pb-16">
        {/* Left column */}
        <div className="lg:col-span-2 xl:col-span-3 grid lg:gap-6 xl:gap-8">
          {/* Profile */}
          <div>
            <div className="h-4 w-14 rounded bg-muted/60 animate-pulse lg:mb-1 xl:mb-1.5" />
            <div className="h-2.5 w-32 rounded bg-muted/40 animate-pulse lg:mb-2 xl:mb-3" />
            <div className="flex items-center gap-4">
              <div className="lg:h-12 lg:w-12 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20 shrink-0 rounded-2xl bg-muted/50 animate-pulse" />
              <div className="flex flex-col gap-2">
                <div className="h-4 w-28 rounded bg-muted/60 animate-pulse" />
                <div className="h-3 w-36 rounded bg-muted/40 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Edit profile */}
          <div>
            <div className="h-4 w-20 rounded bg-muted/60 animate-pulse lg:mb-1 xl:mb-1.5" />
            <div className="h-2.5 w-44 rounded bg-muted/40 animate-pulse lg:mb-2 xl:mb-3" />
            <div className="lg:space-y-3 xl:space-y-4 animate-pulse">
              <div className="h-8 w-full rounded-2xl bg-muted/30" />
              <div className="h-8 w-full rounded-2xl bg-muted/30" />
              <div className="h-8 w-full rounded-full bg-muted/40" />
            </div>
          </div>

          {/* Sign out */}
          <div>
            <div className="h-4 w-24 rounded bg-muted/60 animate-pulse lg:mb-1 xl:mb-1.5" />
            <div className="h-2.5 w-52 rounded bg-muted/40 animate-pulse lg:mb-2 xl:mb-3" />
            <div className="h-8 w-28 rounded-full bg-muted/30 animate-pulse" />
          </div>

          {/* Danger zone */}
          <div>
            <div className="h-4 w-24 rounded bg-muted/60 animate-pulse lg:mb-1 xl:mb-1.5" />
            <div className="h-2.5 w-52 rounded bg-muted/40 animate-pulse lg:mb-2 xl:mb-3" />
            <div className="h-9 w-36 rounded-2xl bg-destructive/20 animate-pulse" />
          </div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-3 xl:col-span-7 grid grid-rows-3 lg:gap-5 xl:gap-6">
          {/* Top rows: This week + Habit health | Momentum + Quick links */}
          <div className="grid row-span-2 grid-cols-2 lg:gap-3 xl:gap-4">
            {/* This week + Habit health stack */}
            <div className="col-span-1 h-full flex flex-col lg:gap-4 xl:gap-5">
              {/* This week */}
              <div>
                <div className="h-4 w-20 rounded bg-muted/60 animate-pulse lg:mb-1 xl:mb-1.5" />
                <div className="h-2.5 w-28 rounded bg-muted/40 animate-pulse lg:mb-2 xl:mb-3" />
                <div className="lg:rounded-2xl xl:rounded-3xl border border-muted/60 bg-muted/20 lg:p-4 xl:p-6 flex flex-col lg:gap-3 xl:gap-4 animate-pulse">
                  <div className="grid grid-cols-7 lg:gap-1.5 xl:gap-2">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center lg:gap-1 xl:gap-1.5"
                      >
                        <div className="lg:w-6 lg:h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 rounded-full bg-muted/50" />
                        <div className="h-2 w-3 rounded bg-muted/40" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="h-4 w-28 rounded bg-muted/60 lg:mb-1 xl:mb-1.5" />
                    <div className="h-2.5 w-44 rounded bg-muted/40" />
                  </div>
                </div>
              </div>

              {/* Habit health */}
              <div className="flex-1 flex flex-col">
                <div className="h-4 w-24 rounded bg-muted/60 animate-pulse lg:mb-1 xl:mb-1.5" />
                <div className="h-2.5 w-36 rounded bg-muted/40 animate-pulse lg:mb-2 xl:mb-3" />
                <div className="flex-1 lg:rounded-2xl xl:rounded-3xl border border-muted/60 bg-muted/20 lg:p-4 xl:p-6 flex items-center lg:gap-3 xl:gap-4 animate-pulse">
                  <div className="shrink-0 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 rounded-full bg-muted/40" />
                  <div className="flex flex-col lg:gap-2 xl:gap-2.5 flex-1">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="h-2.5 w-20 rounded bg-muted/40" />
                        <div className="h-2.5 w-8 rounded bg-muted/50" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Momentum + Quick links */}
            <div className="col-span-1 flex flex-col justify-between">
              <div>
                <div className="h-4 w-24 rounded bg-muted/60 animate-pulse lg:mb-1 xl:mb-1.5" />
                <div className="h-2.5 w-36 rounded bg-muted/40 animate-pulse lg:mb-2 xl:mb-3" />
                <div className="lg:rounded-2xl xl:rounded-3xl bg-muted/30 lg:p-4 xl:p-6 animate-pulse">
                  <div className="h-6 w-28 rounded bg-muted/50 lg:mb-1.5 xl:mb-2" />
                  <div className="h-3 w-full rounded bg-muted/30" />
                  <div className="lg:mt-4 xl:mt-5 grid lg:gap-2 xl:gap-3">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="h-10 w-full rounded-2xl bg-muted/30" />
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="h-4 w-24 rounded bg-muted/60 animate-pulse lg:mb-1 xl:mb-1.5" />
                <div className="h-2.5 w-32 rounded bg-muted/40 animate-pulse lg:mb-2 xl:mb-3" />
                <div className="flex lg:gap-1.5 xl:gap-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-7 w-24 rounded-full bg-muted/30 animate-pulse"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Weekly focus */}
          <div>
            <div className="h-4 w-28 rounded bg-muted/60 animate-pulse lg:mb-1 xl:mb-1.5" />
            <div className="h-2.5 w-48 rounded bg-muted/40 animate-pulse lg:mb-2 xl:mb-3" />
            <div className="grid grid-cols-3 lg:gap-3 xl:gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-muted/30 lg:p-4 xl:p-5 animate-pulse lg:space-y-2 xl:space-y-3"
                >
                  <div className="lg:h-7 lg:w-7 xl:h-9 xl:w-9 rounded-full bg-muted/40" />
                  <div className="h-4 w-2/3 rounded bg-muted/50" />
                  <div className="h-3 w-full rounded bg-muted/30" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
