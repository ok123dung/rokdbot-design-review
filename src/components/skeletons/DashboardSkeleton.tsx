import { Skeleton } from "@/components/ui/skeleton";

export function DashboardSkeleton() {
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
            <div className="flex items-center gap-4">
              <Skeleton className="w-32 h-5 hidden md:block" />
              <Skeleton className="w-9 h-9 rounded-md" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Welcome Skeleton */}
          <div className="mb-8">
            <Skeleton className="h-10 w-80 mb-2" />
            <Skeleton className="h-5 w-64" />
          </div>

          {/* Quick Stats Skeleton */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="glass rounded-xl p-4 border border-border/50">
                <Skeleton className="w-8 h-8 mb-2 rounded-md" />
                <Skeleton className="h-8 w-16 mb-2" />
                <Skeleton className="h-4 w-24" />
              </div>
            ))}
          </div>

          {/* Quick Actions Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-16 rounded-md" />
            ))}
          </div>

          {/* Recent Orders Skeleton */}
          <div className="glass rounded-2xl p-6 border border-border/50">
            <div className="flex items-center gap-2 mb-4">
              <Skeleton className="w-5 h-5 rounded-md" />
              <Skeleton className="h-6 w-40" />
            </div>
            
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/30"
                >
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <div className="text-right space-y-2">
                    <Skeleton className="h-5 w-24 ml-auto" />
                    <Skeleton className="h-4 w-20 ml-auto" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
