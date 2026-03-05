const buildSkeletonItems = (count: number) =>
  Array.from({ length: count }, (_, index) => index);

export default function Loading() {
  const tabs = buildSkeletonItems(4);
  const backlogRows = buildSkeletonItems(5);
  const routineCards = buildSkeletonItems(4);
  const routineRows = buildSkeletonItems(3);

  return (
    <main
      className="relative overflow-hidden w-full min-h-screen lg:pt-18 xl:pt-24 2xl:pt-28 text-foreground lg:pb-8 xl:pb-12 2xl:pb-16 bg-linear-to-b from-white/90 via-light-yellow/55 to-green-soft/15"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="pointer-events-none absolute -left-24 -top-12 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-48 h-64 w-64 rounded-full bg-green-soft/20 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 bottom-10 h-48 w-48 -translate-x-1/2 rounded-full bg-yellow-soft/25 blur-3xl" />

      <div className="lg:px-4 xl:px-8 2xl:px-28 space-y-8">
        <div className="space-y-2 animate-pulse">
          <div className="h-3 w-24 rounded bg-muted/60" />
          <div className="h-8 w-64 rounded bg-muted/70" />
          <div className="h-3 w-2/3 rounded bg-muted/50" />
          <div className="h-8 w-28 rounded-full bg-muted/40" />
        </div>

        <div className="flex flex-wrap items-center lg:gap-2 xl:gap-3 animate-pulse">
          {tabs.map((key) => (
            <div
              key={key}
              className="h-8 w-20 rounded-full bg-white/70 border border-gray-100 shadow-sm"
            />
          ))}
          <div className="h-3 w-48 rounded bg-muted/40" />
        </div>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] lg:gap-3 xl:gap-5">
          <div className="rounded-2xl border border-gray-100 bg-white/80 lg:p-4 xl:p-5 shadow-sm animate-pulse">
            <div className="space-y-2 lg:mb-3 xl:mb-4">
              <div className="h-3 w-24 rounded bg-muted/50" />
              <div className="h-5 w-36 rounded bg-muted/60" />
              <div className="h-3 w-48 rounded bg-muted/40" />
            </div>
            <div className="lg:space-y-2 xl:space-y-3">
              {backlogRows.map((row) => (
                <div
                  key={row}
                  className="rounded-xl border border-gray-100 bg-white lg:px-3 xl:px-4 lg:py-2 xl:py-3 shadow-sm"
                >
                  <div className="h-4 w-2/3 rounded bg-muted/50" />
                  <div className="h-3 w-1/2 rounded bg-muted/40 mt-2" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 lg:gap-3 xl:gap-4">
            {routineCards.map((card) => (
              <div
                key={card}
                className="rounded-2xl border border-gray-100 bg-white/80 lg:p-3 xl:p-4 2xl:p-5 shadow-sm flex flex-col gap-4 animate-pulse"
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
                  {routineRows.map((row) => (
                    <div
                      key={row}
                      className="rounded-xl border border-gray-100 bg-white lg:px-3 xl:px-4 lg:py-2 xl:py-3 shadow-sm"
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
