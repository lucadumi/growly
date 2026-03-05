import type { ReactNode } from "react";

const shimmer =
  "animate-pulse bg-gradient-to-r from-muted/60 via-muted/30 to-muted/60";

const SkeletonLine = ({ className }: { className: string }) => (
  <div className={`${shimmer} ${className}`} />
);

const CardShell = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={`rounded-2xl border border-gray-100 bg-white/80 shadow-inner ${className}`}
  >
    {children}
  </div>
);

export default function Loading() {
  return (
    <main
      className="relative w-full min-h-screen lg:pt-18 xl:pt-24 2xl:pt-28 text-foreground lg:pb-8 xl:pb-12 2xl:pb-16 overflow-x-hidden overflow-y-visible bg-card"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="relative z-10">
        <div className="lg:px-4 xl:px-8 2xl:px-28 pb-8 space-y-8">
          <div className="relative overflow-visible lg:space-y-4 xl:space-y-6">
            <div className="relative z-10 space-y-6">
              <div className="rounded-3xl border border-gray-100 bg-white/80 lg:p-4 xl:p-6 space-y-3 shadow-inner">
                <SkeletonLine className="h-3 w-32 rounded-full" />
                <SkeletonLine className="h-8 w-1/2 rounded-2xl" />
                <div className="space-y-2">
                  <SkeletonLine className="h-3 w-2/3 rounded-full" />
                  <SkeletonLine className="h-3 w-1/2 rounded-full" />
                </div>
                <div className="flex items-center gap-2">
                  <SkeletonLine className="h-8 w-24 rounded-full" />
                  <SkeletonLine className="h-8 w-28 rounded-full" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 lg:gap-3 xl:gap-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <CardShell key={index} className="lg:p-3 xl:p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <SkeletonLine className="h-9 w-9 rounded-full" />
                    <div className="flex-1 space-y-2">
                      <SkeletonLine className="h-3 w-1/2 rounded-full" />
                      <SkeletonLine className="h-6 w-2/3 rounded-xl" />
                    </div>
                  </div>
                  <SkeletonLine className="h-2 w-full rounded-full" />
                </CardShell>
              ))}
            </div>

            <div className="flex flex-col items-end gap-2">
              <SkeletonLine className="h-8 w-36 rounded-full" />
            </div>
          </div>
        </div>

        <div className="w-full h-auto lg:px-4 xl:px-8 2xl:px-28">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex flex-col gap-1">
                <SkeletonLine className="h-5 w-32 rounded-full" />
                <SkeletonLine className="h-3 w-40 rounded-full" />
              </div>
            </div>

            <div className="grid lg:gap-3 xl:gap-4 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <CardShell
                  key={index}
                  className="lg:min-h-40 xl:min-h-60 lg:p-3 xl:p-4 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <SkeletonLine className="h-4 w-24 rounded-full" />
                    <SkeletonLine className="h-3 w-10 rounded-full" />
                  </div>
                  <div className="space-y-2">
                    {Array.from({ length: 3 }).map((__, itemIndex) => (
                      <SkeletonLine
                        key={itemIndex}
                        className="h-16 w-full rounded-2xl"
                      />
                    ))}
                  </div>
                </CardShell>
              ))}
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white/80 shadow-inner lg:p-5 xl:p-6 lg:space-y-5 xl:space-y-6 lg:mt-5 xl:mt-6 relative overflow-hidden">
              <SkeletonLine className="h-3 w-32 rounded-full" />
              <SkeletonLine className="h-6 w-40 rounded-xl" />
              <SkeletonLine className="h-3 w-2/3 rounded-full" />
              <div className="grid lg:grid-cols-3 lg:gap-3 xl:gap-4">
                <CardShell className="lg:p-3 xl:p-4 space-y-3">
                  <SkeletonLine className="h-4 w-28 rounded-full" />
                  <SkeletonLine className="h-10 w-full rounded-xl" />
                  <SkeletonLine className="h-16 w-full rounded-xl" />
                  <SkeletonLine className="h-8 w-full rounded-full" />
                </CardShell>
                <div className="xl:col-span-2">
                  <div className="grid grid-cols-2 lg:gap-2 xl:gap-3">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <CardShell key={index} className="lg:p-3 xl:p-4 space-y-3">
                        <SkeletonLine className="h-4 w-24 rounded-full" />
                        <SkeletonLine className="h-3 w-16 rounded-full" />
                        <SkeletonLine className="h-10 w-full rounded-xl" />
                      </CardShell>
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
