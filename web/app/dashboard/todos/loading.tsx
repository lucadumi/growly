export default function Loading() {
  return (
    <main
      className="relative w-full min-h-screen lg:pt-14 xl:pt-20 2xl:pt-28 text-foreground lg:pb-8 xl:pb-12 2xl:pb-16 overflow-x-hidden overflow-y-visible bg-card"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="relative z-10">
        <div className="lg:px-6 xl:px-8 2xl:px-28 lg:pb-8 xl:pb-12 2xl:pb-16 space-y-8">
          <div className="relative overflow-visible lg:space-y-4 xl:space-y-6">
            {/* PageHeading */}
            <div className="lg:space-y-2 xl:space-y-3 animate-pulse">
              <div className="h-5 w-28 rounded-full bg-muted/40" />
              <div className="h-8 w-44 rounded-xl bg-muted/60" />
              <div className="flex items-start justify-between gap-3">
                <div className="h-3 w-64 rounded-full bg-muted/40" />
                <div className="h-8 w-24 rounded-full bg-muted/40 shrink-0" />
              </div>
            </div>

            {/* 3 stat cards */}
            <div className="grid md:grid-cols-3 lg:gap-3 xl:gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="lg:rounded-xl xl:rounded-2xl bg-card border border-gray-100 lg:p-3 xl:p-4 2xl:p-5 flex items-center gap-3 animate-pulse"
                >
                  <div className="lg:w-9 lg:h-9 xl:w-11 xl:h-11 2xl:w-13 2xl:h-13 shrink-0 rounded-full bg-muted/40" />
                  <div className="flex-1 space-y-2">
                    <div className="h-2.5 w-16 rounded-full bg-muted/40" />
                    <div className="h-7 w-10 rounded bg-muted/60" />
                    <div className="h-1.5 w-full rounded-full bg-muted/30" />
                  </div>
                </div>
              ))}
            </div>

            {/* Delete completed button */}
            <div className="flex flex-col items-end">
              <div className="h-7 w-32 rounded-full bg-muted/30 animate-pulse" />
            </div>
          </div>
        </div>

        <div className="w-full h-auto lg:px-6 xl:px-8 2xl:px-28">
          <div className="space-y-4">
            {/* Board heading */}
            <div className="space-y-1 animate-pulse">
              <div className="h-5 w-24 rounded bg-muted/60" />
              <div className="h-3 w-40 rounded bg-muted/40" />
            </div>

            {/* 4 kanban columns */}
            <div className="grid lg:gap-3 xl:gap-4 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="lg:rounded-xl xl:rounded-2xl border border-gray-100 bg-gray-100 lg:min-h-40 xl:min-h-60 overflow-hidden animate-pulse"
                >
                  <div className="h-1" />
                  <div className="lg:p-3 xl:p-4 2xl:p-5">
                    <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                      <div className="h-6 w-20 rounded-full bg-muted/50" />
                      <div className="h-3 w-10 rounded bg-muted/30" />
                    </div>
                    <div className="lg:pt-2 xl:pt-3 lg:space-y-2 xl:space-y-3">
                      {Array.from({ length: 2 }).map((__, j) => (
                        <div
                          key={j}
                          className="rounded-xl border border-gray-200 bg-white lg:p-2 xl:p-3 space-y-2"
                        >
                          <div className="h-4 w-3/4 rounded bg-muted/50" />
                          <div className="flex items-center justify-between">
                            <div className="h-3 w-12 rounded-full bg-muted/30" />
                            <div className="h-5 w-16 rounded-full bg-muted/30" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Collections section */}
            <div className="rounded-3xl border-8 border-gray-100 lg:p-5 xl:p-6 lg:space-y-5 xl:space-y-6 lg:mt-5 xl:mt-6">
              <div className="space-y-1 animate-pulse">
                <div className="h-5 w-28 rounded bg-muted/60" />
                <div className="h-3 w-56 rounded bg-muted/40" />
              </div>

              <div className="grid lg:grid-cols-3 lg:gap-3 xl:gap-4">
                {/* New collection form */}
                <div className="lg:col-span-1 lg:rounded-xl xl:rounded-2xl border border-gray-100 bg-card lg:p-3 xl:p-4 lg:space-y-2 xl:space-y-3 animate-pulse">
                  <div className="h-4 w-28 rounded bg-muted/60" />
                  <div className="h-8 w-full rounded-xl bg-muted/30" />
                  <div className="h-16 w-full rounded-xl bg-muted/30" />
                  <div className="h-8 w-full rounded-xl bg-muted/30" />
                  <div className="h-8 w-full rounded-full bg-muted/40" />
                </div>

                {/* Collection cards */}
                <div className="xl:col-span-2">
                  <div className="grid grid-cols-2 lg:gap-2 xl:gap-3">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className="lg:rounded-xl xl:rounded-2xl border border-gray-100 bg-card lg:p-3 xl:p-4 lg:space-y-2 xl:space-y-3 animate-pulse"
                      >
                        <div className="h-4 w-24 rounded bg-muted/60" />
                        <div className="h-3 w-16 rounded bg-muted/40" />
                        <div className="h-8 w-full rounded-xl bg-muted/30" />
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
