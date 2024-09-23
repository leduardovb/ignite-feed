'use client'

import { AddFeedback } from '@/components/add-feedback'
import { Post } from '@/components/post'
import { PostContent } from '@/components/post/post-content'
import { PostCreatedAt } from '@/components/post/post-created-at'
import { PostHeader } from '@/components/post/post-header'
import { PostOwner } from '@/components/post/post-owner'
import { PostSkeletons } from '@/components/post/post-skeletons'
import { UserAvatar } from '@/components/user-avatar'
import { usePosts } from '@/hooks/posts/use-posts'
import { DefaultAvatar } from '@/lib/default-avatar'
import { userFallback } from '@/lib/utils'
import { Separator } from '@radix-ui/react-separator'
import { CommentsContainer } from './comments.container'

export function PostsContainer() {
  const { data, isLoading } = usePosts()

  if (isLoading) {
    return <PostSkeletons />
  }

  return (
    <div className="flex flex-col gap-y-8">
      {data.map((post) => (
        <Post key={post.id}>
          <PostHeader>
            <UserAvatar
              alt={post.author.name}
              fallback={userFallback(post.author.name)}
              src={post.author.pictureUrl ?? DefaultAvatar}
            />
            <PostOwner
              name={post.author.name}
              position={post.author.position}
            />
            <PostCreatedAt date={post.createdAt} />
          </PostHeader>
          <PostContent content={post.content} />
          <Separator />
          <AddFeedback />
          <CommentsContainer postId={post.id} />
        </Post>
      ))}
    </div>
  )
}
