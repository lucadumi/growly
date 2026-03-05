const buildSkeletonItems = (count: number) =>
  Array.from({ length: count }, (_, index) => index);

export default function Loading() {
  const statCards = buildSkeletonItems(3);
  const boardColumns = buildSkeletonItems(4);
  const boardCards = buildSkeletonItems(3);
  const tabButtons = buildSkeletonItems(4);
  const collectionCards = buildSkeletonItems(4);

  return (
    <main
      className="relative w-full min-h-screen lg:pt-18 xl:pt-24 2xl:pt-28 text-foreground lg:pb-8 xl:pb-12 2xl:pb-16 overflow-hidden bg-linear-to-b from-green-soft/20 via-card/70 to-primary/20"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 right-10 h-64 w-64 rounded-[2.5rem] bg-primary/20 blur-3xl" />
        <div className="absolute bottom-6 left-12 h-56 w-56 rounded-full bg-green-soft/20 blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="lg:px-4 xl:px-8 2xl:px-28 pb-8 space-y-8">
          {/* Heading section */}
          <div className="relative overflow-visible lg:space-y-4 xl:space-y-6">
            <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-12 left-6 h-48 w-48 rounded-full bg-green-soft/30 blur-3xl" />
            <div className="relative z-10 space-y-6">
              <div className="space-y-2 animate-pulse">
                <div className="h-3 w-28 rounded bg-muted/60" />
                <div className="h-8 w-56 rounded bg-muted/70" />
                <div className="space-y-1">
                  <div className="h-3 w-2/3 rounded bg-muted/50" />
                  <div className="h-3 w-1/2 rounded bg-muted/40" />
                </div>
                <div className="h-8 w-28 rounded-full bg-muted/40" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 lg:gap-3 xl:gap-4">
              {statCards.map((key) => (
                <div
                  key={key}
                  className="lg:rounded-lg xl:rounded-2xl border border-gray-50 bg-card shadow-sm lg:p-2 xl:p-3 2xl:p-5 flex items-center gap-3 animate-pulse"
                >
                  <div className="lg:w-8 lg:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 rounded-full bg-muted/40" />
                  <div className="space-y-1">
                    <div className="h-3 w-16 rounded bg-muted/50" />
                    <div className="h-5 w-12 rounded bg-muted/70" />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-end gap-2 animate-pulse">
              <div className="h-7 w-36 rounded-full bg-muted/40" />
            </div>
          </div>

          {/* Board section */}
          <div className="w-full h-auto lg:px-4 xl:px-8 2xl:px-28">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-2 animate-pulse">
                  <div className="h-5 w-5 rounded-full bg-muted/50" />
                  <div className="h-5 w-32 rounded bg-muted/60" />
                </div>
                <div className="flex flex-wrap items-center lg:gap-3 xl:gap-4">
                  <div className="h-8 w-24 rounded-xl bg-muted/40 animate-pulse" />
                  <div className="flex items-center rounded-full bg-muted/70 lg:p-0.5 xl:p-1 shadow-inner">
                    {tabButtons.map((key) => (
                      <div
                        key={key}
                        className="h-8 w-20 rounded-full bg-white/70 border border-gray-100 shadow-sm mx-1 animate-pulse"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid lg:gap-3 xl:gap-4 lg:grid-cols-4">
                {boardColumns.map((columnKey) => (
                  <div
                    key={columnKey}
                    className="lg:rounded-xl xl:rounded-2xl border border-gray-100 bg-card/30 shadow-inner shadow-black/10 lg:p-3 xl:p-4 2xl:p-5 lg:min-h-40 xl:min-h-60"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-gray-100 animate-pulse">
                      <div className="h-6 w-24 rounded-full bg-muted/40" />
                      <div className="h-4 w-10 rounded bg-muted/30" />
                    </div>
                    <div className="lg:pt-2 xl:pt-3 lg:space-y-2 xl:space-y-3">
                      {boardCards.map((cardKey) => (
                        <div
                          key={cardKey}
                          className="rounded-xl border border-gray-100 bg-white lg:p-2 xl:p-3 shadow-sm space-y-2 animate-pulse"
                        >
                          <div className="h-4 w-4/5 rounded bg-muted/50" />
                          <div className="h-3 w-3/5 rounded bg-muted/40" />
                          <div className="flex items-center justify-between">
                            <div className="h-3 w-16 rounded bg-muted/40" />
                            <div className="h-4 w-12 rounded-full bg-muted/30" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl border border-gray-50 bg-card/30 shadow-inner lg:p-5 xl:p-6 lg:space-y-4 xl:space-y-5 animate-pulse">
                <div className="space-y-2">
                  <div className="h-4 w-32 rounded bg-muted/60" />
                  <div className="h-5 w-48 rounded bg-muted/70" />
                  <div className="h-3 w-3/4 rounded bg-muted/40" />
                </div>
                <div className="grid lg:grid-cols-3 lg:gap-3 xl:gap-4">
                  <div className="lg:rounded-xl xl:rounded-2xl border border-gray-100 bg-white/80 lg:p-3 xl:p-4 space-y-2">
                    <div className="h-3 w-24 rounded bg-muted/50" />
                    <div className="h-6 w-full rounded bg-muted/40" />
                    <div className="h-6 w-full rounded bg-muted/40" />
                  </div>
                  <div className="xl:col-span-2 grid grid-cols-2 lg:gap-2 xl:gap-3">
                    {collectionCards.map((key) => (
                      <div
                        key={key}
                        className="lg:rounded-xl xl:rounded-2xl border border-gray-100 bg-white/80 lg:p-3 xl:p-4 space-y-2"
                      >
                        <div className="h-4 w-24 rounded bg-muted/60" />
                        <div className="h-3 w-3/5 rounded bg-muted/40" />
                        <div className="h-3 w-2/5 rounded bg-muted/30" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
