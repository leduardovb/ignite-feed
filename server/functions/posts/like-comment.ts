'use server'

import prisma from '@/lib/prisma/db'
import { getUser } from '../user/get-user'

interface LikeCommentDTO {
  postId: string
  commentId: string
}

export async function likeComment({ postId, commentId }: LikeCommentDTO) {
  const { user, isAuthenticated } = await getUser()

  if (!isAuthenticated) {
    throw new Error('User is not authenticated')
  }

  await prisma.comment.findFirstOrThrow({
    where: {
      postId,
      id: commentId,
    },
  })

  const liked = await prisma.like.findFirst({
    where: {
      commentId,
      authorId: user.id,
    },
  })

  if (liked) {
    throw new Error('Comment already liked')
  }

  await prisma.like.create({
    data: {
      commentId,
      authorId: user.id,
    },
  })
}
