'use client'

import { Comment } from '@/components/comment'
import { CommentAvatar } from '@/components/comment/comment-avatar'
import { CommentContent } from '@/components/comment/comment-content'
import { CommentCreatedAt } from '@/components/comment/comment-created-at'
import { CommentHeader } from '@/components/comment/comment-header'
import { CommentText } from '@/components/comment/comment-text'
import { CommentUser } from '@/components/comment/comment-user'
import { PostComment } from '@/components/post/post-comment'
import { PostComments } from '@/components/post/post-comments'
import { usePostComments } from '@/hooks/posts/use-post-comments'
import { DefaultAvatar } from '@/lib/default-avatar'
import { userFallback } from '@/lib/utils'

interface Props {
  postId: string
}

export function CommentsContainer({ postId }: Props) {
  const { data, isPending } = usePostComments({ postId })

  if (isPending) {
    return <>Carregando...</>
  }

  return (
    <PostComments>
      {data?.map((comment) => (
        <PostComment key={comment.id}>
          <Comment>
            <CommentAvatar
              alt={comment.author.name}
              fallback={userFallback(comment.author.name)}
              src={comment.author.pictureUrl ?? DefaultAvatar}
            />
            <CommentContent>
              <CommentHeader>
                <CommentUser>{comment.author.name}</CommentUser>
                <CommentCreatedAt date={comment.createdAt} />
              </CommentHeader>
              <CommentText content={comment.content} />
            </CommentContent>
          </Comment>
        </PostComment>
      ))}
    </PostComments>
  )
}
