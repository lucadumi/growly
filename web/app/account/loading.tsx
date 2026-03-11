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
          {/* Profile widget */}
          <div className="animate-pulse">
            <div className="h-5 w-24 rounded bg-muted/60 lg:mb-1 xl:mb-1.5" />
            <div className="h-2.5 w-32 rounded bg-muted/40 lg:mb-2 xl:mb-3" />
            <div className="flex items-center gap-4">
              <div className="lg:h-12 lg:w-12 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20 shrink-0 rounded-2xl bg-muted/50" />
              <div className="flex flex-col gap-1 min-w-0">
                <div className="h-4 w-28 rounded bg-muted/60" />
                <div className="h-3 w-36 rounded bg-muted/40" />
              </div>
            </div>
          </div>

          {/* Edit profile widget */}
          <div className="animate-pulse">
            <div className="h-5 w-24 rounded bg-muted/60 lg:mb-1 xl:mb-1.5" />
            <div className="h-2.5 w-44 rounded bg-muted/40 lg:mb-2 xl:mb-3" />
            <div className="space-y-3">
              <div className="h-8 w-full rounded-2xl bg-muted/30" />
              <div className="h-8 w-full rounded-2xl bg-muted/30" />
              <div className="h-8 w-28 rounded-full bg-muted/40" />
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-3 xl:col-span-7 grid lg:gap-5 xl:gap-6">
          {/* Top row: This week + Quick links */}
          <div className="grid row-span-2 grid-cols-2 lg:gap-3 xl:gap-4">
            {/* Left: This week + Habit health */}
            <div className="col-span-1 h-full grid lg:gap-4 xl:gap-5">
              {/* This week */}
              <div className="animate-pulse">
                <div className="h-5 w-20 rounded bg-muted/60 lg:mb-1 xl:mb-1.5" />
                <div className="h-2.5 w-28 rounded bg-muted/40 lg:mb-2 xl:mb-3" />
                <div className="grid grid-cols-7 gap-1.5">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <div className="w-6 h-6 xl:w-8 xl:h-8 rounded-full bg-muted/40" />
                      <div className="h-2 w-4 rounded bg-muted/30" />
                    </div>
                  ))}
                </div>
                <div className="h-4 w-32 rounded bg-muted/60 mt-2" />
                <div className="h-2.5 w-44 rounded bg-muted/40 mt-1" />
              </div>

              {/* Habit health */}
              <div className="flex-1 flex flex-col animate-pulse">
                <div className="h-5 w-24 rounded bg-muted/60 lg:mb-1 xl:mb-1.5" />
                <div className="h-2.5 w-36 rounded bg-muted/40 lg:mb-2 xl:mb-3" />
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 xl:w-28 xl:h-28 rounded-full bg-muted/40" />
                  <div className="flex flex-col gap-1 flex-1">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between"
                      >
                        <div className="h-2.5 w-20 rounded bg-muted/40" />
                        <div className="h-2.5 w-8 rounded bg-muted/50" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Quick links + Sign out + Danger zone */}
            <div className="col-span-1 flex flex-col justify-between animate-pulse gap-5">
              {/* Quick links */}
              <div>
                <div className="h-5 w-24 rounded bg-muted/60 lg:mb-1 xl:mb-1.5" />
                <div className="h-2.5 w-36 rounded bg-muted/40 lg:mb-2 xl:mb-3" />
                <div className="flex gap-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-8 w-24 rounded-full bg-muted/30"
                    />
                  ))}
                </div>
              </div>

              {/* Sign out */}
              <div>
                <div className="h-5 w-28 rounded bg-muted/60 lg:mb-1 xl:mb-1.5" />
                <div className="h-2.5 w-52 rounded bg-muted/40 lg:mb-2 xl:mb-3" />
                <div className="h-8 w-28 rounded-full bg-muted/30" />
              </div>

              {/* Danger zone */}
              <div>
                <div className="h-5 w-28 rounded bg-muted/60 lg:mb-1 xl:mb-1.5" />
                <div className="h-2.5 w-52 rounded bg-muted/40 lg:mb-2 xl:mb-3" />
                <div className="h-9 w-36 rounded-2xl bg-destructive/20" />
              </div>
            </div>
          </div>

          {/* Weekly focus */}
          <div className="animate-pulse mt-6">
            <div className="h-5 w-28 rounded bg-muted/60 lg:mb-1 xl:mb-1.5" />
            <div className="h-2.5 w-52 rounded bg-muted/40 lg:mb-2 xl:mb-3" />
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-muted/30 p-5 space-y-3 flex flex-col items-center"
                >
                  <div className="h-9 w-9 rounded-full bg-muted/40" />
                  <div className="h-4 w-20 rounded bg-muted/50" />
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
