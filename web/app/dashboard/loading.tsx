export default function Loading() {
  return (
    <main
      className="relative w-full lg:pt-14 xl:pt-20 bg-card overflow-hidden"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="grid lg:grid-cols-5 xl:grid-cols-10 lg:gap-5 xl:gap-6 lg:px-6 xl:px-8 2xl:px-28 lg:pb-8 xl:pb-12 2xl:pb-16">
        {/* Col 1: Greeting + Calendar + Sync */}
        <div className="h-full lg:col-span-1 xl:col-span-2 grid lg:gap-3 xl:gap-4 2xl:gap-6">
          <div className="rounded-2xl xl:rounded-3xl border border-gray-100 bg-card lg:p-4 xl:p-5 space-y-3 animate-pulse">
            <div className="h-4 w-2/3 rounded-lg bg-muted/60" />
            <div className="h-8 w-full rounded-lg bg-muted/40" />
            <div className="h-3 w-1/2 rounded-lg bg-muted/40" />
          </div>
          <div className="rounded-2xl xl:rounded-3xl border border-gray-100 bg-card lg:p-4 xl:p-5 space-y-3 animate-pulse">
            <div className="h-4 w-1/2 rounded-lg bg-muted/60" />
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 14 }).map((_, i) => (
                <div key={i} className="h-6 rounded-lg bg-muted/40" />
              ))}
            </div>
          </div>
          <div className="rounded-2xl xl:rounded-3xl border border-gray-100 bg-card lg:p-4 xl:p-5 space-y-3 animate-pulse">
            <div className="h-4 w-1/2 rounded-lg bg-muted/60" />
            <div className="h-10 w-full rounded-lg bg-muted/30" />
          </div>
        </div>

        {/* Col 2: Weather + Score + ShouldDo */}
        <div className="lg:col-span-1 xl:col-span-2 flex flex-col lg:gap-2 2xl:gap-4">
          <div className="rounded-2xl xl:rounded-3xl border border-gray-100 bg-card lg:p-4 xl:p-5 space-y-4 animate-pulse">
            <div className="flex items-center justify-between">
              <div className="h-4 w-24 rounded-lg bg-muted/60" />
              <div className="h-6 w-6 rounded-lg bg-muted/40" />
            </div>
            <div className="h-16 w-24 rounded-lg bg-muted/40" />
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-2.5 w-full rounded-lg bg-muted/40" />
                  <div className="h-4 w-full rounded-lg bg-muted/50" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl xl:rounded-3xl border border-gray-100 bg-card lg:p-4 xl:p-5 space-y-4 animate-pulse">
            <div className="h-4 w-2/3 rounded-lg bg-muted/60" />
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-lg bg-muted/40" />
              <div className="h-8 w-24 rounded-lg bg-muted/40" />
            </div>
          </div>

          <div className="rounded-2xl xl:rounded-3xl border border-gray-100 bg-card lg:p-4 xl:p-5 space-y-3 animate-pulse">
            <div className="h-4 w-1/2 rounded-lg bg-muted/60" />
            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-8 w-full rounded-lg bg-muted/30" />
              ))}
            </div>
          </div>
        </div>

        {/* Col 3: Todos + Integration/Quote + Analytics */}
        <div className="lg:col-span-3 xl:col-span-6 flex flex-col lg:gap-3 xl:gap-4 2xl:gap-6">
          <div className="grid grid-cols-5 lg:gap-3 xl:gap-4 h-fit">
            <div className="col-span-3 rounded-2xl xl:rounded-3xl border border-gray-100 bg-card lg:p-4 xl:p-5 space-y-4 animate-pulse">
              <div className="flex items-center justify-between">
                <div className="h-4 w-28 rounded-lg bg-muted/60" />
                <div className="flex gap-2">
                  <div className="h-7 w-20 rounded-lg bg-muted/40" />
                  <div className="h-7 w-20 rounded-lg bg-muted/40" />
                </div>
              </div>
              <div className="space-y-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-12 w-full rounded-lg bg-muted/30" />
                ))}
              </div>
            </div>
            <div className="col-span-2 flex flex-col lg:gap-3 xl:gap-4">
              <div className="rounded-2xl xl:rounded-3xl border border-gray-100 bg-card lg:p-4 xl:p-5 space-y-3 animate-pulse">
                <div className="h-4 w-1/2 rounded-lg bg-muted/60" />
                <div className="h-8 w-full rounded-lg bg-muted/30" />
                <div className="h-8 w-full rounded-lg bg-muted/30" />
              </div>
              <div className="rounded-2xl xl:rounded-3xl border border-gray-100 bg-card lg:p-4 xl:p-5 space-y-3 animate-pulse">
                <div className="h-4 w-2/3 rounded-lg bg-muted/60" />
                <div className="h-3 w-full rounded-lg bg-muted/40" />
                <div className="h-3 w-4/5 rounded-lg bg-muted/40" />
                <div className="h-3 w-2/5 rounded-lg bg-muted/30" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl xl:rounded-3xl border border-gray-100 bg-card lg:p-4 xl:p-6 2xl:p-8 space-y-4 animate-pulse">
            <div className="h-4 w-1/4 rounded-lg bg-muted/60" />
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-20 rounded-lg bg-muted/30" />
              ))}
            </div>
            <div className="grid grid-cols-5 gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-10 rounded-lg bg-muted/30" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

