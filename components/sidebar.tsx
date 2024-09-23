import { Suspense } from 'react'
import { UserCard } from './user-card'
import { Skeleton } from './ui/skeleton'

export function Sidebar() {
  return (
    <aside>
      <Suspense
        fallback={<Skeleton className="h-[294px] w-[256px] rounded-lg" />}
      >
        <UserCard />
      </Suspense>
    </aside>
  )
}
