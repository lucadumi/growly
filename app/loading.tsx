export default function Loading() {
  return (
    <main
      className="relative min-h-screen lg:pt-16 xl:pt-24 2xl:pt-28 lg:pb-8 xl:pb-12 2xl:pb-16 bg-card overflow-hidden"
      role="status"
      aria-busy="true"
    >
      {/* Hero */}
      <section className="relative z-10 lg:px-4 2xl:px-28 xl:px-8">
        <div className="grid lg:grid-cols-2 lg:gap-8 xl:gap-12 items-center">
          {/* Left: heading + CTA + icons */}
          <div className="lg:space-y-6 xl:space-y-8 animate-pulse">
            <div className="lg:space-y-3 xl:space-y-5">
              <div className="h-10 w-3/4 rounded bg-muted/60" />
              <div className="h-4 w-2/3 rounded bg-muted/40" />
              <div className="h-4 w-1/2 rounded bg-muted/40" />
            </div>
            <div className="h-10 w-40 rounded-full bg-muted/50" />
            <div className="flex flex-wrap items-center lg:gap-3 xl:gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-muted/50" />
                  <div className="h-3 w-28 rounded bg-muted/40" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: preview card */}
          <div className="relative rounded-3xl bg-card lg:space-y-3 xl:space-y-4 animate-pulse">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="h-3 w-20 rounded bg-muted/40" />
                <div className="h-6 w-40 rounded bg-muted/60" />
              </div>
            </div>
            <div className="grid grid-cols-3 lg:gap-2 xl:gap-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-card border border-gray-100 lg:p-3 xl:p-4 space-y-2"
                >
                  <div className="h-3 w-20 rounded bg-muted/40" />
                  <div className="h-6 w-16 rounded bg-muted/60" />
                </div>
              ))}
            </div>
            <div className="rounded-b-2xl rounded-tr-2xl bg-muted/30 lg:p-4 xl:p-5 lg:space-y-2 xl:space-y-3">
              <div className="flex items-center justify-between">
                <div className="h-4 w-36 rounded bg-muted/40" />
                <div className="h-3 w-16 rounded bg-muted/40" />
              </div>
              <div className="flex lg:gap-1.5 xl:gap-2">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 h-8 rounded-xl bg-muted/40 border-2 border-dotted border-gray-200"
                  />
                ))}
              </div>
              <div className="h-3 w-2/3 rounded bg-muted/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative z-10 lg:px-4 2xl:px-28 xl:px-8 lg:mt-10 xl:mt-14 2xl:mt-16">
        <div className="flex flex-col lg:gap-8 xl:gap-10 bg-card border-8 border-gray-100 lg:rounded-2xl xl:rounded-3xl lg:p-12 xl:p-10 2xl:p-8 animate-pulse">
          <div className="lg:space-y-2 xl:space-y-3">
            <div className="h-3 w-20 rounded bg-muted/40" />
            <div className="h-7 w-2/3 rounded bg-muted/60" />
            <div className="h-4 w-1/2 rounded bg-muted/40" />
          </div>
          <div className="grid lg:grid-cols-3 lg:gap-4 xl:gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl bg-card border-2 border-dashed border-gray-200 lg:p-4 xl:p-5 2xl:p-6 lg:space-y-2 xl:space-y-3"
              >
                <div className="lg:h-10 lg:w-10 xl:h-11 xl:w-11 rounded-2xl bg-muted/40" />
                <div className="h-4 w-32 rounded bg-muted/60" />
                <div className="h-3 w-full rounded bg-muted/40" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 lg:px-4 2xl:px-28 xl:px-8 lg:mt-10 xl:mt-14 2xl:mt-16">
        <div className="rounded-3xl lg:p-4 xl:p-6 2xl:p-8 flex items-center justify-between lg:gap-4 xl:gap-6 animate-pulse">
          <div className="lg:space-y-2 xl:space-y-3">
            <div className="h-3 w-32 rounded bg-muted/40" />
            <div className="h-7 w-2/3 rounded bg-muted/60" />
            <div className="h-4 w-1/2 rounded bg-muted/40" />
          </div>
          <div className="h-10 w-40 rounded-full bg-muted/50 shrink-0" />
        </div>
      </section>
    </main>
  );
}
