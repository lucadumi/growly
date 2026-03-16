export default function Loading() {
  return (
    <main
      className="relative lg:px-6 xl:px-8 2xl:px-28 lg:pt-14 xl:pt-20 2xl:pt-28 lg:pb-8 xl:pb-12 2xl:pb-16 min-h-screen w-full bg-card text-foreground overflow-hidden"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      {/* Heading + tabs */}
      <div className="lg:space-y-6 xl:space-y-8 lg:mb-6 xl:mb-8">
        <div className="space-y-2 animate-pulse">
          <div className="h-3 w-28 rounded bg-muted/60" />
          <div className="h-8 w-44 rounded bg-muted/70" />
          <div className="h-3 w-2/3 rounded bg-muted/50" />
        </div>
        <div className="flex gap-2 animate-pulse">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-8 w-20 rounded-full bg-card border border-gray-100"
            />
          ))}
        </div>
      </div>

      {/* Main 2-col grid */}
      <div className="grid lg:gap-4 xl:gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        {/* Left: main board */}
        <section className="space-y-5">
          {/* Today progress bar */}
          <div className="rounded-2xl border border-gray-100 bg-card px-5 py-4 space-y-3 animate-pulse">
            <div className="flex items-center justify-between">
              <div className="h-4 w-40 rounded bg-muted/60" />
              <div className="h-4 w-20 rounded bg-muted/50" />
            </div>
            <div className="h-2 w-full rounded-full bg-muted/50" />
            <div className="flex items-center justify-between">
              <div className="h-3 w-32 rounded bg-muted/40" />
              <div className="h-3 w-28 rounded bg-muted/40" />
            </div>
          </div>

          {/* Toolbar */}
          <div className="flex items-center justify-between gap-4 animate-pulse">
            <div className="flex items-center gap-1 rounded-full bg-muted/30 p-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-8 w-16 rounded-full bg-muted/40" />
              ))}
            </div>
            <div className="h-8 w-24 rounded-full bg-muted/40" />
          </div>

          {/* Board card */}
          <div className="rounded-2xl border border-gray-100 bg-card overflow-hidden animate-pulse">
            <div className="flex items-center justify-between gap-4 px-5 pt-5 pb-4 border-b border-gray-100">
              <div className="space-y-1">
                <div className="h-4 w-32 rounded bg-muted/60" />
                <div className="h-3 w-20 rounded bg-muted/40" />
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-16 rounded-full bg-muted/40" />
                <div className="h-8 w-8 rounded-full bg-muted/40" />
                <div className="h-8 w-8 rounded-full bg-muted/40" />
              </div>
            </div>
            <div className="px-5 py-2.5 border-b border-gray-100">
              <div className="h-1.5 w-full rounded-full bg-muted/50" />
            </div>
            <div className="px-5 py-5 space-y-3">
              <div className="grid grid-cols-[148px_repeat(7,1fr)_52px] gap-2 mb-2">
                <div />
                {Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className="h-3 rounded bg-muted/40" />
                ))}
                <div />
              </div>
              {Array.from({ length: 4 }).map((_, row) => (
                <div
                  key={row}
                  className="grid grid-cols-[148px_repeat(7,1fr)_52px] items-center gap-2"
                >
                  <div className="h-3 w-28 rounded bg-muted/50" />
                  {Array.from({ length: 7 }).map((_, cell) => (
                    <div key={cell} className="flex justify-center">
                      <div className="h-6 w-6 rounded-md bg-muted/40" />
                    </div>
                  ))}
                  <div className="h-3 w-8 rounded bg-muted/30 ml-auto" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Right: sidebar */}
        <aside className="space-y-3">
          <div className="flex items-center justify-between px-1 mb-1 animate-pulse">
            <div className="h-4 w-28 rounded bg-muted/60" />
            <div className="h-3 w-16 rounded bg-muted/40" />
          </div>
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 bg-card px-4 py-4 space-y-3 animate-pulse"
            >
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-muted/50" />
                <div className="h-4 w-32 rounded bg-muted/60" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="h-3 w-24 rounded bg-muted/40" />
                  <div className="h-3 w-12 rounded bg-muted/40" />
                </div>
                <div className="h-2 w-full rounded-full bg-muted/50" />
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-16 rounded-lg bg-muted/40" />
                <div className="h-8 flex-1 rounded-lg bg-muted/40" />
              </div>
            </div>
          ))}
        </aside>
      </div>
    </main>
  );
}
