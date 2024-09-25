'use client'

import { PostKeys } from '@/lib/react-query/query-keys'
import { likeComment } from '@/server/functions/posts/like-comment'
import { ListPostCommentsResponse } from '@/server/functions/posts/list-post-comments'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useLikeComment() {
  const queryClient = useQueryClient()

  const updateCommentOnCache = (postId: string, commentId: string) => {
    queryClient.setQueryData<Array<ListPostCommentsResponse>>(
      PostKeys.comments(postId),
      (prev) => {
        if (!prev) return prev
        const newComments = prev.map((comment) => {
          if (comment.id === commentId) {
            return {
              ...comment,
              isLiked: true,
              likes: comment.likes + 1,
            }
          }
          return comment
        })
        return newComments
      }
    )
  }

  const mutation = useMutation({
    mutationFn: likeComment,
    onMutate: ({ postId, commentId }) => {
      const prevComments = queryClient.getQueryData<
        Array<ListPostCommentsResponse>
      >(PostKeys.comments(postId))

      if (prevComments) {
        updateCommentOnCache(postId, commentId)
      }

      return prevComments
    },
    onError: (_, { postId }, context) => {
      if (context) {
        queryClient.setQueryData(PostKeys.comments(postId), context)
      }
    },
    onSettled: (_, __, { postId }) => {
      queryClient.invalidateQueries({
        queryKey: PostKeys.comments(postId),
      })
    },
  })
  return mutation
}
