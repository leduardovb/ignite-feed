'use client'

import { PostKeys } from '@/lib/react-query/query-keys'
import { listPostComments } from '@/server/functions/posts/list-post-comments'
import { useQuery } from '@tanstack/react-query'

interface Props {
  postId: string
}

export function usePostComments({ postId }: Props) {
  const query = useQuery({
    queryKey: PostKeys.comments(postId),
    queryFn: () => listPostComments({ postId }),
  })
  return query
}
