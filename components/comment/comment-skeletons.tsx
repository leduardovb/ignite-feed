import { Comment } from '.'
import { PostComment } from '../post/post-comment'
import { PostComments } from '../post/post-comments'
import { Skeleton } from '../ui/skeleton'
import { CommentContent } from './comment-content'
import { CommentHeader } from './comment-header'

export function CommentSkeletons() {
  return (
    <PostComments>
      {Array.from({ length: 3 }).map((_, index) => (
        <PostComment key={index}>
          <Comment>
            <Skeleton className="size-[50px] flex-shrink-0 rounded-lg" />
            <CommentContent>
              <CommentHeader>
                <Skeleton className="mb-1 size-[100px] h-5" />
                <Skeleton className="size-[100px] h-4" />
              </CommentHeader>
              <Skeleton className="h-5 w-full" />
            </CommentContent>
          </Comment>
        </PostComment>
      ))}
    </PostComments>
  )
}
