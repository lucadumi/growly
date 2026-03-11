export default function Loading() {
  return (
    <main
      className="relative overflow-hidden w-full min-h-screen lg:pt-18 xl:pt-24 2xl:pt-28 text-foreground lg:pb-8 xl:pb-12 2xl:pb-16 bg-card"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="lg:px-4 xl:px-8 2xl:px-28 space-y-8">
        {/* PageHeading + tabs */}
        <div className="space-y-2 animate-pulse">
          <div className="h-3 w-24 rounded bg-muted/60" />
          <div className="h-8 w-64 rounded bg-muted/70" />
          <div className="h-3 w-2/3 rounded bg-muted/50" />
        </div>

        <div className="flex flex-wrap items-center lg:gap-2 xl:gap-3 animate-pulse">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-8 w-20 rounded-full bg-card border border-gray-100"
            />
          ))}
        </div>

        {/* 2-col grid: backlog | 2x2 routine cards */}
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] lg:gap-3 xl:gap-5">
          {/* Backlog */}
          <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-card lg:p-4 xl:p-5 animate-pulse">
            <div className="space-y-2 lg:mb-3 xl:mb-4">
              <div className="h-3 w-24 rounded bg-muted/50" />
              <div className="h-5 w-36 rounded bg-muted/60" />
              <div className="h-3 w-48 rounded bg-muted/40" />
            </div>
            <div className="lg:space-y-2 xl:space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-100 bg-card lg:px-3 xl:px-4 lg:py-2 xl:py-3"
                >
                  <div className="h-4 w-2/3 rounded bg-muted/50" />
                  <div className="h-3 w-1/2 rounded bg-muted/40 mt-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Routine cards grid */}
          <div className="grid grid-cols-2 lg:gap-3 xl:gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 bg-card lg:p-3 xl:p-4 2xl:p-5 flex flex-col gap-4 animate-pulse"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <div className="h-5 w-20 rounded bg-muted/40" />
                    <div className="h-4 w-28 rounded bg-muted/60" />
                    <div className="h-3 w-24 rounded bg-muted/40" />
                  </div>
                  <div className="h-8 w-20 rounded-full bg-muted/30" />
                </div>
                <div className="lg:space-y-2 xl:space-y-3">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <div
                      key={j}
                      className="rounded-xl border border-gray-100 bg-card lg:px-3 xl:px-4 lg:py-2 xl:py-3"
                    >
                      <div className="h-4 w-2/3 rounded bg-muted/50" />
                      <div className="h-3 w-1/2 rounded bg-muted/40 mt-2" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
