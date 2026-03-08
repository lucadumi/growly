export default function PopularLoading() {
  return (
    <main className="relative min-h-screen bg-card lg:pt-14 xl:pt-20">
      <div className="lg:px-6 xl:px-8 2xl:px-28 grid lg:gap-6 xl:gap-8 lg:pb-8 xl:pb-12 2xl:pb-16">
        {/* Page heading */}
        <div className="animate-pulse space-y-2">
          <div className="h-3 w-24 rounded bg-muted/50" />
          <div className="h-8 w-48 rounded bg-muted/70" />
          <div className="h-3 w-2/3 rounded bg-muted/40" />
        </div>

        {/* Category + sort filters */}
        <div className="flex flex-col lg:gap-3 xl:gap-4">
          <div className="flex items-center gap-2 animate-pulse">
            <div className="h-3 w-3 rounded bg-muted/40 shrink-0" />
            <div className="flex flex-wrap gap-1.5">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="h-6 w-16 rounded-full bg-muted/40" />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 animate-pulse">
            <div className="h-6 w-24 rounded-full bg-muted/40" />
            <div className="h-6 w-20 rounded-full bg-muted/30" />
          </div>
        </div>

        {/* Habits grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-3 xl:gap-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="flex gap-3 rounded-2xl border border-gray-100 bg-white lg:p-3 xl:p-4 animate-pulse"
            >
              {/* Vote column */}
              <div className="flex flex-col items-center shrink-0 lg:pt-0.5">
                <div className="rounded-xl border-2 border-gray-100 bg-gray-50 lg:px-2 xl:px-2.5 lg:py-1.5 xl:py-2 w-10 h-12" />
              </div>
              {/* Content */}
              <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                <div className="flex items-start justify-between gap-2">
                  <div className="h-4 w-3/4 rounded bg-muted/60" />
                  <div className="h-5 w-16 rounded-full bg-muted/40 shrink-0" />
                </div>
                <div className="h-3 w-full rounded bg-muted/40" />
                <div className="h-3 w-4/5 rounded bg-muted/30" />
                <div className="flex gap-1.5 flex-wrap">
                  <div className="h-4 w-14 rounded-full bg-muted/40" />
                  <div className="h-4 w-16 rounded-full bg-muted/30" />
                </div>
                <div className="flex items-center justify-between mt-auto pt-1.5 border-t border-gray-50">
                  <div className="h-3 w-20 rounded bg-muted/30" />
                  <div className="h-3 w-12 rounded bg-muted/30" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
