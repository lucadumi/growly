const buildSkeletonItems = (count: number) =>
  Array.from({ length: count }, (_, index) => index);

export default function Loading() {
  const tagPills = buildSkeletonItems(3);
  const statRows = buildSkeletonItems(3);
  const quickLinks = buildSkeletonItems(3);
  const focusCards = buildSkeletonItems(3);

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-linear-to-b from-white/90 via-light-yellow/55 to-green-soft/15 lg:pb-8 xl:pb-12 2xl:pb-16 lg:pt-18 xl:pt-24 2xl:pt-28"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-24 -top-20 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,214,102,0.55),transparent_65%)] blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(79,153,120,0.4),transparent_60%)] blur-3xl" />
        <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,145,255,0.4),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative z-10 lg:px-24 xl:px-48 2xl:px-80">
        <div className="mx-auto flex flex-col gap-10">
          <section className="space-y-8">
            <div className="space-y-2 animate-pulse">
              <div className="h-3 w-20 rounded bg-muted/60" />
              <div className="h-8 w-3/4 rounded bg-muted/70" />
              <div className="h-3 w-2/3 rounded bg-muted/50" />
            </div>

            <div className="grid lg:gap-4 xl:gap-6 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
              <div className="flex min-h-0 flex-col lg:h-full lg:space-y-4 xl:space-y-6">
                <div className="lg:space-y-3 xl:space-y-5 lg:rounded-2xl xl:rounded-3xl border border-gray-100 bg-card lg:p-4 xl:p-6 shadow-inner animate-pulse">
                  <div className="flex items-center gap-4">
                    <div className="lg:h-12 lg:w-12 xl:h-16 2xl:h-20 xl:w-16 2xl:w-20 rounded-2xl bg-muted/60" />
                    <div className="space-y-2">
                      <div className="h-3 w-24 rounded bg-muted/50" />
                      <div className="h-4 w-32 rounded bg-muted/60" />
                      <div className="h-3 w-20 rounded bg-muted/40" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-2/3 rounded bg-muted/40" />
                    <div className="h-3 w-1/2 rounded bg-muted/40" />
                  </div>
                  <div className="flex flex-wrap lg:gap-1.5 xl:gap-2">
                    {tagPills.map((pill) => (
                      <div
                        key={pill}
                        className="h-6 w-20 rounded-full bg-muted/30"
                      />
                    ))}
                  </div>
                </div>

                <div className="lg:rounded-2xl xl:rounded-3xl border border-gray-100 bg-card lg:p-4 xl:p-6 shadow-inner animate-pulse">
                  <div className="space-y-2">
                    <div className="h-4 w-28 rounded bg-muted/60" />
                    <div className="h-9 w-full rounded-2xl bg-muted/30" />
                    <div className="h-9 w-full rounded-2xl bg-muted/30" />
                    <div className="h-9 w-32 rounded-full bg-muted/40" />
                  </div>
                </div>

                <div className="lg:rounded-2xl xl:rounded-3xl border border-gray-100 bg-card lg:p-4 xl:p-6 shadow-inner animate-pulse">
                  <div className="space-y-2">
                    <div className="h-4 w-32 rounded bg-muted/60" />
                    <div className="h-3 w-2/3 rounded bg-muted/40" />
                    <div className="h-8 w-24 rounded-full bg-muted/40" />
                  </div>
                </div>
              </div>

              <div className="flex min-h-0 flex-col lg:h-full gap-4 xl:gap-6">
                <div className="lg:rounded-2xl xl:rounded-3xl border border-primary/40 bg-white/70 lg:p-4 xl:p-6 shadow-inner shadow-primary/20 h-fit animate-pulse">
                  <div className="space-y-2">
                    <div className="h-3 w-24 rounded bg-muted/50" />
                    <div className="h-6 w-40 rounded bg-muted/60" />
                    <div className="h-3 w-2/3 rounded bg-muted/40" />
                  </div>
                  <div className="lg:mt-4 xl:mt-5 2xl:mt-6 grid lg:gap-2 xl:gap-3">
                    {statRows.map((row) => (
                      <div
                        key={row}
                        className="h-10 rounded-2xl bg-muted/30"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:space-y-3 xl:space-y-4">
              <div className="flex lg:gap-2 xl:gap-3 flex-row items-center justify-between animate-pulse">
                <div className="space-y-1">
                  <div className="h-3 w-24 rounded bg-muted/50" />
                  <div className="h-5 w-32 rounded bg-muted/60" />
                </div>
                <div className="h-3 w-36 rounded bg-muted/40" />
              </div>

              <div className="flex flex-wrap lg:gap-2 xl:gap-3 animate-pulse">
                {quickLinks.map((link) => (
                  <div
                    key={link}
                    className="h-8 w-32 rounded-full bg-muted/30"
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="grid lg:gap-4 xl:gap-6 backdrop-blur">
            <div className="space-y-2 animate-pulse">
              <div className="h-3 w-24 rounded bg-muted/40" />
              <div className="h-6 w-2/3 rounded bg-muted/60" />
            </div>

            <div className="grid lg:gap-3 xl:gap-4 grid-cols-3 animate-pulse">
              {focusCards.map((card) => (
                <div
                  key={card}
                  className="rounded-2xl border border-muted bg-white lg:p-4 xl:p-5 shadow-sm space-y-2"
                >
                  <div className="h-8 w-8 rounded-2xl bg-muted/40" />
                  <div className="h-4 w-2/3 rounded bg-muted/60" />
                  <div className="h-3 w-full rounded bg-muted/40" />
                </div>
              ))}
            </div>

            <div className="lg:rounded-2xl xl:rounded-3xl border border-destructive/40 bg-destructive/5 lg:p-4 xl:p-6 animate-pulse">
              <div className="h-10 w-40 rounded-2xl bg-muted/30" />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
