import { Skeleton } from "@/components/ui/skeleton";

export function OrdersSkeleton() {
  return (
    <div className="min-h-screen">
      {/* Header Skeleton */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Skeleton className="w-8 h-8 rounded-full" />
              <Skeleton className="w-24 h-6" />
            </div>
            <Skeleton className="w-28 h-9 rounded-md" />
          </div>
        </div>
      </header>

      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Title Skeleton */}
          <Skeleton className="h-9 w-48 mb-2" />
          <Skeleton className="h-5 w-64 mb-8" />

          {/* Filters Skeleton */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <Skeleton className="h-10 flex-1" />
            <Skeleton className="h-10 w-full md:w-48" />
          </div>

          {/* Orders List Skeleton */}
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="glass rounded-xl p-4 md:p-6 border border-border/50"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Skeleton className="w-5 h-5 rounded-md" />
                      <Skeleton className="h-5 w-32" />
                      <Skeleton className="h-5 w-20 rounded-full" />
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  </div>
                  <div className="text-right space-y-2">
                    <Skeleton className="h-7 w-28 ml-auto" />
                    <Skeleton className="h-4 w-24 ml-auto" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
