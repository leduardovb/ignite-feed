'use server'

import prisma from '@/lib/prisma/db'
import { getUser } from '../user/get-user'

interface RemoveLikeDTO {
  postId: string
  commentId: string
}

export async function removeLike({ commentId }: RemoveLikeDTO) {
  const { user, isAuthenticated } = await getUser()

  if (!isAuthenticated) {
    throw new Error('User is not authenticated')
  }

  const like = await prisma.like.findFirstOrThrow({
    where: {
      commentId,
      authorId: user.id,
    },
  })

  await prisma.like.delete({
    where: {
      id: like.id,
    },
  })
}
