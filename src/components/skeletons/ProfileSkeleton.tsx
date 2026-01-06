import { Skeleton } from "@/components/ui/skeleton";

export function ProfileSkeleton() {
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
        <div className="container mx-auto max-w-2xl">
          {/* Title Skeleton */}
          <Skeleton className="h-9 w-48 mb-2" />
          <Skeleton className="h-5 w-64 mb-8" />

          {/* Balance Card Skeleton */}
          <div className="glass rounded-2xl p-6 border border-border/50 mb-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-9 w-32" />
              </div>
              <Skeleton className="h-10 w-40" />
            </div>
          </div>

          {/* Profile Form Skeleton */}
          <div className="glass rounded-2xl p-6 border border-border/50 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <Skeleton className="w-5 h-5 rounded-md" />
              <Skeleton className="h-6 w-40" />
            </div>
            
            <div className="space-y-4">
              {/* Email field */}
              <div>
                <Skeleton className="h-4 w-16 mb-2" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-3 w-48 mt-1" />
              </div>

              {/* Full name field */}
              <div>
                <Skeleton className="h-4 w-20 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>

              {/* Username field */}
              <div>
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>

              {/* Phone field */}
              <div>
                <Skeleton className="h-4 w-28 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>

              {/* Zalo field */}
              <div>
                <Skeleton className="h-4 w-12 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>

              {/* Discord field */}
              <div>
                <Skeleton className="h-4 w-16 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>

              {/* Save button */}
              <Skeleton className="h-12 w-full" />
            </div>
          </div>

          {/* Danger Zone Skeleton */}
          <div className="glass rounded-2xl p-6 border border-red-500/30">
            <Skeleton className="h-6 w-32 mb-4" />
            <Skeleton className="h-4 w-full mb-4" />
            <Skeleton className="h-10 w-28" />
          </div>
        </div>
      </main>
    </div>
  );
}
