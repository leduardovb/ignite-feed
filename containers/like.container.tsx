'use client'

import { Like } from '@/components/like'
import { useLikeComment } from '@/hooks/posts/use-like-comment'
import { useRemoveLike } from '@/hooks/posts/use-remove-like'

interface Props {
  count: number
  postId: string
  isLiked: boolean
  commentId: string
}

export function LikeContainer({ count, postId, isLiked, commentId }: Props) {
  const { mutate: like } = useLikeComment()
  const { mutate: removeLike } = useRemoveLike()

  const handleLike = () => {
    if (isLiked) {
      removeLike({ postId, commentId })
    } else {
      like({ postId, commentId })
    }
  }

  return <Like count={count} isLiked={isLiked} onClick={handleLike} />
}
