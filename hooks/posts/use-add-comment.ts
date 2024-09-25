'use client'

import { PostKeys } from '@/lib/react-query/query-keys'
import { addComment } from '@/server/functions/posts/add-comment'
import { ListPostCommentsResponse } from '@/server/functions/posts/list-post-comments'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useAddComment() {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: addComment,
    onSuccess: (data) => {
      queryClient.setQueryData<Array<ListPostCommentsResponse>>(
        PostKeys.comments(data.postId),
        (oldData) => {
          const newData = oldData || []
          return [
            ...newData,
            {
              ...data,
              isLiked: false,
              likes: 0,
            },
          ]
        }
      )
    },
  })
  return mutation
}
