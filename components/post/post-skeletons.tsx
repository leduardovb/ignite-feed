import { Post } from '.'
import { Skeleton } from '../ui/skeleton'
import { PostHeader } from './post-header'

export function PostSkeletons() {
  return (
    <ul className="flex flex-col gap-y-8">
      {Array.from({ length: 3 }).map((_, index) => (
        <Post key={index}>
          <PostHeader>
            <Skeleton className="size-[60px] rounded-lg" />
            <div className="my-auto">
              <Skeleton className="mb-1 h-5 w-20" />
              <Skeleton className="h-5 w-16" />
            </div>
          </PostHeader>
          <div>
            <Skeleton className="h-[200px] w-full" />
          </div>
        </Post>
      ))}
    </ul>
  )
}
