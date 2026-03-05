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
      className="relative w-full lg:pt-14 xl:pt-20 bg-card overflow-hidden"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="grid lg:grid-cols-5 xl:grid-cols-10 lg:gap-5 xl:gap-6 lg:px-6 xl:px-8 2xl:px-28 lg:pb-8 xl:pb-12 2xl:pb-16">
        <div className="h-full lg:col-span-1 xl:col-span-2 grid lg:gap-3 xl:gap-4 2xl:gap-6">
          <CardShell className="lg:p-4 xl:p-5 space-y-3">
            <SkeletonLine className="h-4 w-2/3 rounded-full" />
            <SkeletonLine className="h-8 w-full rounded-xl" />
            <SkeletonLine className="h-3 w-1/2 rounded-full" />
          </CardShell>
          <CardShell className="lg:p-4 xl:p-5 space-y-3">
            <SkeletonLine className="h-4 w-1/2 rounded-full" />
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 14 }).map((_, index) => (
                <SkeletonLine
                  key={index}
                  className="h-6 rounded-lg"
                />
              ))}
            </div>
          </CardShell>
          <CardShell className="lg:p-4 xl:p-5 space-y-3">
            <SkeletonLine className="h-4 w-1/2 rounded-full" />
            <SkeletonLine className="h-10 w-full rounded-xl" />
          </CardShell>
        </div>

        <div className="lg:col-span-1 xl:col-span-2 flex flex-col lg:gap-2 2xl:gap-4">
          <CardShell className="lg:p-4 xl:p-5 space-y-4">
            <div className="flex items-center justify-between">
              <SkeletonLine className="h-4 w-24 rounded-full" />
              <SkeletonLine className="h-6 w-6 rounded-full" />
            </div>
            <SkeletonLine className="h-16 w-24 rounded-2xl" />
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="space-y-2">
                  <SkeletonLine className="h-2.5 w-16 rounded-full" />
                  <SkeletonLine className="h-4 w-full rounded-full" />
                </div>
              ))}
            </div>
          </CardShell>

          <CardShell className="lg:p-4 xl:p-5 space-y-4">
            <SkeletonLine className="h-4 w-2/3 rounded-full" />
            <div className="flex items-center justify-between">
              <SkeletonLine className="h-10 w-10 rounded-full" />
              <SkeletonLine className="h-8 w-24 rounded-xl" />
            </div>
            <div className="flex gap-3">
              <SkeletonLine className="h-12 w-12 rounded-full" />
              <SkeletonLine className="h-12 w-12 rounded-full" />
            </div>
            <SkeletonLine className="h-3 w-1/2 rounded-full" />
          </CardShell>

          <CardShell className="lg:p-4 xl:p-5 space-y-3">
            <SkeletonLine className="h-4 w-1/2 rounded-full" />
            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <SkeletonLine
                  key={index}
                  className="h-8 w-full rounded-xl"
                />
              ))}
            </div>
          </CardShell>
        </div>

        <div className="lg:col-span-3 xl:col-span-6 flex flex-col lg:gap-3 xl:gap-4 2xl:gap-6">
          <div className="grid grid-cols-5 lg:gap-3 xl:gap-4 h-fit">
            <div className="col-span-3">
              <CardShell className="lg:p-4 xl:p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <SkeletonLine className="h-4 w-28 rounded-full" />
                  <div className="flex gap-2">
                    <SkeletonLine className="h-7 w-20 rounded-full" />
                    <SkeletonLine className="h-7 w-20 rounded-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <SkeletonLine
                      key={index}
                      className="h-12 w-full rounded-2xl"
                    />
                  ))}
                </div>
              </CardShell>
            </div>
            <div className="col-span-2 flex flex-col lg:gap-3 xl:gap-4">
              <CardShell className="lg:p-4 xl:p-5 space-y-3">
                <SkeletonLine className="h-4 w-1/2 rounded-full" />
                <SkeletonLine className="h-8 w-full rounded-xl" />
                <SkeletonLine className="h-8 w-full rounded-xl" />
              </CardShell>
              <CardShell className="lg:p-4 xl:p-5 space-y-3">
                <SkeletonLine className="h-4 w-2/3 rounded-full" />
                <SkeletonLine className="h-3 w-full rounded-full" />
                <SkeletonLine className="h-3 w-4/5 rounded-full" />
                <SkeletonLine className="h-3 w-2/5 rounded-full" />
              </CardShell>
            </div>
          </div>

          <CardShell className="lg:p-4 xl:p-6 2xl:p-8 space-y-4">
            <SkeletonLine className="h-4 w-1/4 rounded-full" />
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <SkeletonLine
                  key={index}
                  className="h-20 rounded-2xl"
                />
              ))}
            </div>
            <div className="grid grid-cols-5 gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <SkeletonLine
                  key={index}
                  className="h-10 rounded-xl"
                />
              ))}
            </div>
          </CardShell>
        </div>
      </div>
    </main>
  );
}
