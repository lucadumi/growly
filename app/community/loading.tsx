export default function CommunityLoading() {
  return (
    <main className="relative min-h-screen bg-card lg:px-6 xl:px-8 lg:pt-14 xl:pt-20">
      <div className="grid lg:gap-8 xl:gap-10 lg:pb-8 xl:pb-12 2xl:pb-16">
        {/* Search + Explore */}
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 lg:gap-5 xl:gap-6">
          <div className="lg:col-span-2 xl:col-span-3 animate-pulse">
            <div className="h-5 w-36 rounded bg-muted/60 mb-2" />
            <div className="h-3 w-64 rounded bg-muted/40 mb-4" />
            <div className="h-10 w-full rounded-2xl bg-muted/40" />
          </div>
          <div className="flex flex-col lg:gap-2 xl:gap-3 animate-pulse">
            <div className="h-5 w-20 rounded bg-muted/60 mb-1" />
            <div className="h-16 w-full rounded-2xl bg-muted/40" />
            <div className="h-16 w-full rounded-2xl bg-muted/40" />
          </div>
        </div>

        {/* Stats */}
        <div>
          <div className="mb-3 animate-pulse">
            <div className="h-5 w-40 rounded bg-muted/60 mb-1.5" />
            <div className="h-3 w-52 rounded bg-muted/40" />
          </div>
          <div className="grid lg:grid-cols-4 xl:grid-cols-4 lg:gap-3 xl:gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 bg-white lg:p-4 xl:p-5 animate-pulse space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="h-3 w-20 rounded bg-muted/40" />
                  <div className="h-7 w-7 rounded-full bg-muted/40" />
                </div>
                <div className="h-7 w-16 rounded bg-muted/60" />
                <div className="h-3 w-28 rounded bg-muted/30" />
              </div>
            ))}
          </div>
        </div>

        {/* Trending habits */}
        <div>
          <div className="flex items-center justify-between mb-3 animate-pulse">
            <div className="space-y-1.5">
              <div className="h-5 w-36 rounded bg-muted/60" />
              <div className="h-3 w-52 rounded bg-muted/40" />
            </div>
            <div className="h-7 w-16 rounded-full bg-muted/40" />
          </div>
          <div className="grid lg:grid-cols-5 gap-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 bg-white lg:p-3 xl:p-4 flex flex-col gap-2 animate-pulse"
              >
                <div className="flex items-center justify-between gap-1">
                  <div className="flex items-center gap-1.5">
                    <div className="h-4 w-14 rounded-full bg-muted/40" />
                    <div className="h-4 w-12 rounded-full bg-muted/30" />
                  </div>
                  <div className="h-4 w-8 rounded-full bg-muted/30" />
                </div>
                <div className="h-4 w-full rounded bg-muted/60" />
                <div className="h-3 w-3/4 rounded bg-muted/50" />
                <div className="h-3 w-16 rounded bg-muted/30" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
