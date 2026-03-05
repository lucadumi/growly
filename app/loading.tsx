const buildSkeletonItems = (count: number) =>
  Array.from({ length: count }, (_, index) => index);

export default function Loading() {
  const proofCards = buildSkeletonItems(3);
  const habitPills = buildSkeletonItems(3);
  const highlightCards = buildSkeletonItems(3);

  return (
    <main
      className="relative min-h-screen lg:pt-16 xl:pt-24 2xl:pt-28 lg:pb-8 xl:pb-12 2xl:pb-16 bg-linear-to-b from-white/90 via-light-yellow/55 to-green-soft/15 overflow-hidden"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="absolute -left-24 -top-12 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -right-16 top-48 h-64 w-64 rounded-full bg-green-soft/20 blur-3xl" />
      <div className="absolute left-1/2 bottom-10 h-48 w-48 -translate-x-1/2 rounded-full bg-yellow-soft/25 blur-3xl" />

      <section className="relative z-10 lg:px-4 2xl:px-28 xl:px-8">
        <div className="grid lg:grid-cols-2 lg:gap-8 xl:gap-12 items-center">
          <div className="lg:space-y-6 xl:space-y-8 animate-pulse">
            <div className="lg:space-y-3 xl:space-y-5">
              <div className="h-10 w-3/4 rounded bg-muted/60" />
              <div className="h-4 w-2/3 rounded bg-muted/40" />
              <div className="h-4 w-1/2 rounded bg-muted/40" />
            </div>

            <div className="h-10 w-40 rounded-full bg-muted/50" />

            <div className="flex flex-wrap items-center lg:gap-3 xl:gap-4">
              {buildSkeletonItems(3).map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-muted/50" />
                  <div className="h-3 w-28 rounded bg-muted/40" />
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 lg:rounded-2xl xl:rounded-3xl bg-linear-to-br from-primary/15 via-white to-green-soft/20 blur-3xl" />
            <div className="relative rounded-3xl bg-muted/30 backdrop-blur shadow-inner shadow-black/10 lg:p-4 xl:p-6 lg:space-y-3 xl:space-y-4 animate-pulse">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="h-3 w-20 rounded bg-muted/40" />
                  <div className="h-6 w-40 rounded bg-muted/60" />
                </div>
                <div className="h-6 w-20 rounded-full bg-muted/50" />
              </div>

              <div className="grid grid-cols-3 lg:gap-2 xl:gap-3">
                {proofCards.map((card) => (
                  <div
                    key={card}
                    className="rounded-2xl bg-card border border-gray-200 lg:p-3 xl:p-4 space-y-2"
                  >
                    <div className="h-3 w-20 rounded bg-muted/40" />
                    <div className="h-6 w-16 rounded bg-muted/60" />
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-card shadow-sm lg:p-4 xl:p-5 lg:space-y-3 xl:space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center lg:gap-1.5 xl:gap-2">
                    <div className="h-4 w-4 rounded-full bg-muted/50" />
                    <div className="h-4 w-32 rounded bg-muted/40" />
                  </div>
                  <div className="h-3 w-16 rounded bg-muted/40" />
                </div>
                <div className="flex lg:gap-1.5 xl:gap-2">
                  {habitPills.map((pill) => (
                    <div
                      key={pill}
                      className="flex-1 h-8 rounded-xl bg-muted/40 border-2 border-dotted border-gray-200"
                    />
                  ))}
                </div>
                <div className="flex items-center lg:gap-1.5 xl:gap-2">
                  <div className="h-4 w-4 rounded-full bg-muted/50" />
                  <div className="h-3 w-56 rounded bg-muted/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 lg:px-4 2xl:px-28 xl:px-8 lg:mt-10 xl:mt-14 2xl:mt-16">
        <div className="flex flex-col lg:gap-8 xl:gap-10 bg-muted/30 backdrop-blur shadow-inner shadow-black/10 lg:rounded-2xl xl:rounded-3xl lg:p-12 xl:p-10 2xl:p-8 animate-pulse">
          <div className="lg:space-y-3 xl:space-y-4">
            <div className="h-4 w-28 rounded bg-muted/40" />
            <div className="h-7 w-2/3 rounded bg-muted/60" />
            <div className="h-4 w-1/2 rounded bg-muted/40" />
          </div>

          <div className="grid lg:grid-cols-3 lg:gap-4 xl:gap-6">
            {highlightCards.map((card) => (
              <div
                key={card}
                className="rounded-2xl bg-card shadow-sm lg:p-4 xl:p-5 2xl:p-6 lg:space-y-3 xl:space-y-4"
              >
                <div className="h-10 w-10 rounded-2xl bg-muted/40" />
                <div className="h-4 w-32 rounded bg-muted/60" />
                <div className="h-3 w-full rounded bg-muted/40" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 lg:px-4 2xl:px-28 xl:px-8 lg:mt-10 xl:mt-14 2xl:mt-16">
        <div className="rounded-3xl backdrop-blur lg:p-4 xl:p-6 2xl:p-8 flex items-center justify-between lg:gap-4 xl:gap-6">
          <div className="lg:space-y-2 xl:space-y-3 animate-pulse">
            <div className="h-4 w-32 rounded bg-muted/40" />
            <div className="h-7 w-2/3 rounded bg-muted/60" />
            <div className="h-4 w-1/2 rounded bg-muted/40" />
          </div>
          <div className="h-10 w-40 rounded-full bg-muted/50 animate-pulse" />
        </div>
      </section>
    </main>
  );
}
