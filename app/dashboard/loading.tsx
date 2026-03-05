const buildSkeletonItems = (count: number) =>
  Array.from({ length: count }, (_, index) => index);

export default function Loading() {
  const dayHeaders = buildSkeletonItems(7);
  const calendarDays = buildSkeletonItems(35);
  const todoRows = buildSkeletonItems(3);
  const ideaRows = buildSkeletonItems(3);
  const chartTicks = buildSkeletonItems(5);
  const chartBars = buildSkeletonItems(5);

  return (
    <main
      className="relative w-full lg:pt-14 xl:pt-20 bg-linear-to-b from-white/90 via-light-yellow/55 to-green-soft/15 overflow-hidden"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div
        className="pointer-events-none absolute rounded-full scale-[1.2]"
        style={{
          width: "210px",
          height: "210px",
          top: "-50px",
          right: "-50px",
          background:
            "radial-gradient(circle, rgba(135, 197, 161, 0.35) 0%, rgba(135, 197, 161, 0) 70%)",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -left-24 -top-12 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-48 h-64 w-64 rounded-full bg-green-soft/20 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 bottom-10 h-48 w-48 -translate-x-1/2 rounded-full bg-yellow-soft/25 blur-3xl" />

      <div className="grid lg:grid-cols-5 xl:grid-cols-10 lg:gap-5 xl:gap-6 lg:px-6 xl:px-8 2xl:px-28 lg:pb-8 xl:pb-12 2xl:pb-16">
        <div className="h-full lg:col-span-1 xl:col-span-2 grid lg:gap-3 xl:gap-4 2xl:gap-6">
          <div className="lg:pt-2 2xl:pt-6 space-y-3 animate-pulse">
            <div className="h-7 w-3/4 rounded bg-muted" />
            <div className="h-4 w-2/3 rounded bg-muted/60" />
            <div className="space-y-2 pt-2">
              <div className="h-8 w-full rounded bg-muted/40" />
              <div className="h-8 w-full rounded bg-muted/40" />
            </div>
          </div>

          <div className="rounded-2xl border border-muted/50 bg-white/60 lg:p-3 xl:p-4 animate-pulse">
            <div className="flex items-center justify-between lg:mb-1 xl:mb-2">
              <div className="h-4 w-2/3 rounded bg-muted/60" />
              <div className="flex gap-1">
                <div className="h-5 w-5 rounded bg-muted/50" />
                <div className="h-5 w-5 rounded bg-muted/50" />
              </div>
            </div>
            <div className="grid grid-cols-7 lg:gap-1 xl:gap-1.5 lg:mb-1 xl:mb-2">
              {dayHeaders.map((key) => (
                <div key={key} className="h-3 rounded bg-muted/40" />
              ))}
            </div>
            <div className="grid grid-cols-7 lg:gap-1 xl:gap-1.5 2xl:gap-2">
              {calendarDays.map((key) => (
                <div key={key} className="h-6 w-6 rounded-full bg-muted/30" />
              ))}
            </div>
            <div className="lg:mt-1 xl:mt-2 2xl:mt-3 h-3 w-2/3 rounded bg-muted/40" />
          </div>

          <div className="relative text-center lg:pt-16 xl:pt-20">
            <div className="absolute w-full z-0 lg:-top-8 xl:-top-10 2xl:top-[-60px] left-1/2 transform -translate-x-1/2">
              <div className="mx-auto lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 rounded-full bg-muted/50 animate-pulse" />
            </div>
            <div className="flex flex-col justify-between shadow-sm shadow-primary/10 relative bg-white/70 lg:p-6 2xl:p-4 rounded-2xl z-10 h-full animate-pulse">
              <div className="space-y-2">
                <div className="h-4 w-3/4 rounded bg-muted" />
                <div className="h-4 w-1/2 rounded bg-muted" />
              </div>
              <div className="h-3 w-2/3 rounded bg-muted/60" />
              <div className="h-8 w-full rounded bg-muted/60" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 xl:col-span-2 flex flex-col lg:gap-2 2xl:gap-4">
          <div className="lg:pt-2 2xl:pt-6">
            <div className="flex items-center justify-between lg:pb-2 xl:pb-3 2xl:pb-4">
              <div className="h-4 w-24 rounded bg-muted/60 animate-pulse" />
            </div>
            <div className="relative text-foreground flex flex-col justify-top shadow-md lg:h-48 xl:h-64 2xl:h-80 bg-muted/30 lg:p-3 xl:p-4 2xl:p-6 lg:rounded-xl 2xl:rounded-2xl animate-pulse">
              <div className="absolute lg:top-2 lg:left-2 xl:top-3 xl:left-3 2xl:top-4 2xl:left-4 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 rounded-full bg-muted/50" />
              <div className="ml-auto h-10 w-20 rounded bg-muted/50" />
              <div className="mt-3 h-3 w-2/3 rounded bg-muted/40 ml-auto" />
              <div className="mt-auto grid grid-cols-3 gap-2">
                <div className="h-6 rounded bg-muted/40" />
                <div className="h-6 rounded bg-muted/40" />
                <div className="h-6 rounded bg-muted/40" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-muted/50 bg-white/70 shadow-inner lg:p-3 xl:p-4 animate-pulse">
            <div className="space-y-3">
              <div className="h-4 w-1/3 rounded bg-muted" />
              <div className="flex items-center justify-between gap-3">
                <div className="h-12 w-12 rounded bg-muted" />
                <div className="flex-1 space-y-2">
                  <div className="h-5 rounded bg-muted" />
                  <div className="h-3 w-3/4 rounded bg-muted" />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-16 w-16 rounded-full border border-muted" />
                <div className="h-16 w-16 rounded-full border border-muted" />
              </div>
              <div className="h-4 rounded bg-muted" />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col h-full text-foreground">
              <div className="flex items-start justify-between lg:mb-6 xl:mb-8 2xl:mb-10">
                <div className="lg:space-y-1">
                  <div className="h-4 w-24 rounded bg-muted/60 animate-pulse" />
                  <div className="h-3 w-28 rounded bg-muted/40 animate-pulse" />
                </div>
                <div className="h-6 w-20 rounded-full bg-muted/40 animate-pulse" />
              </div>
              <div className="flex flex-col flex-1 lg:gap-1 xl:gap-2 2xl:gap-3">
                {ideaRows.map((key) => (
                  <div
                    key={key}
                    className="flex-1 rounded-xl border border-dashed border-muted bg-muted/20 animate-pulse"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 xl:col-span-6 flex flex-col lg:gap-3 xl:gap-4 2xl:gap-6">
          <div className="grid grid-cols-5 lg:gap-3 xl:gap-4 h-fit">
            <div className="col-span-3">
              <div className="lg:p-2 2xl:p-6 text-foreground">
                <div className="flex items-center justify-between lg:mb-2 xl:mb-4">
                  <div className="h-4 w-36 rounded bg-muted/60 animate-pulse" />
                  <div className="flex items-center lg:gap-2 xl:gap-3">
                    <div className="h-6 w-20 rounded-full bg-muted/50 animate-pulse" />
                    <div className="h-6 w-20 rounded-full bg-muted/40 animate-pulse" />
                  </div>
                </div>
                <div className="lg:space-y-2 xl:space-y-3 2xl:space-y-4 min-h-24">
                  {todoRows.map((key) => (
                    <div
                      key={key}
                      className="h-12 rounded-xl border border-dashed border-gray-200 bg-white/70 animate-pulse"
                    />
                  ))}
                </div>
                <div className="lg:mt-2 xl:mt-3 h-3 w-2/3 rounded bg-muted/40 animate-pulse" />
                <div className="mt-1 h-3 w-3/4 rounded bg-muted/40 animate-pulse" />
              </div>
            </div>

            <div className="col-span-2 flex flex-col">
              <div>
                <div className="flex flex-col items-center lg:px-8 lg:py-4 xl:px-6 xl:py-6 lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl text-foreground animate-pulse">
                  <div className="lg:w-8 lg:h-8 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16 rounded-full bg-muted/50 mb-2" />
                  <div className="h-4 w-3/4 rounded bg-muted/60 mb-2" />
                  <div className="h-3 w-full rounded bg-muted/40 mb-3" />
                  <div className="h-8 w-full rounded bg-muted/50" />
                </div>
              </div>
              <div className="h-fit">
                <div className="relative h-fit overflow-hidden rounded-2xl border border-muted/50 shadow-inner bg-secondary">
                  <div className="absolute inset-0 opacity-30 bg-white" />
                  <div className="relative flex h-full flex-col lg:gap-2 xl:gap-3 lg:p-1.5 xl:p-2 animate-pulse">
                    <div className="flex items-center gap-4">
                      <div className="lg:h-6 lg:w-6 xl:h-8 xl:w-8 rounded-full bg-muted/50" />
                      <div className="h-3 w-24 rounded bg-muted/50" />
                    </div>
                    <div className="flex-1 lg:rounded-xl xl:rounded-2xl bg-white/5">
                      <div className="space-y-3 lg:px-4 xl:px-5 lg:py-2 xl:py-3">
                        <div className="h-3 w-1/3 rounded bg-muted/40" />
                        <div className="h-4 rounded bg-muted/40" />
                        <div className="h-4 w-5/6 rounded bg-muted/30" />
                        <div className="h-3 w-1/2 rounded bg-muted/30" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex lg:gap-2 xl:gap-4 2xl:gap-6 h-fit text-foreground animate-pulse">
            <div className="flex flex-col lg:gap-2 xl:gap-3">
              <div className="flex items-center justify-between lg:gap-3 xl:gap-4">
                <div className="h-4 w-24 rounded bg-muted/60" />
                <div className="h-7 w-16 rounded-full bg-muted/40" />
              </div>
              <div className="h-24 lg:rounded-2xl 2xl:rounded-3xl bg-muted/40" />
              <div className="h-24 lg:rounded-2xl 2xl:rounded-3xl bg-muted/40" />
              <div className="h-32 lg:rounded-2xl 2xl:rounded-3xl bg-muted/40" />
            </div>

            <div className="space-y-4 grow w-full h-full">
              <div className="lg:px-3 lg:pt-2 xl:px-4 2xl:px-6 xl:pt-4 2xl:pt-6 lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl bg-white/60 border border-gray-50 shadow-inner shadow-black/10 h-full">
                <div className="flex items-center justify-between lg:mb-2 xl:mb-4 2xl:mb-6 lg:gap-1 xl:gap-2">
                  <div className="lg:space-y-0.5 xl:space-y-1">
                    <div className="h-4 w-36 rounded bg-muted/60" />
                    <div className="h-3 w-44 rounded bg-muted/40" />
                  </div>
                  <div className="h-8 w-24 rounded-full bg-muted/40" />
                </div>
                <div className="grid grid-cols-5 xl:gap-1 2xl:gap-2 lg:text-[8px] xl:text-[10px] 2xl:text-xs mb-2 min-w-max sm:min-w-0 flex-none">
                  {chartTicks.map((key) => (
                    <div key={key} className="h-3 rounded bg-muted/30" />
                  ))}
                </div>
                <div className="flex items-end gap-2 h-32">
                  {chartBars.map((key) => (
                    <div
                      key={key}
                      className="w-full rounded bg-muted/40"
                      style={{ height: `${40 + key * 10}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
