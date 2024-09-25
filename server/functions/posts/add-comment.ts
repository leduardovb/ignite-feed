'use server'

import prisma from '@/lib/prisma/db'
import { getUser } from '../user/get-user'

interface AddCommentDTO {
  postId: string
  comment: string
}

export async function addComment({ postId, comment }: AddCommentDTO) {
  const { user, isAuthenticated } = await getUser()

  if (!isAuthenticated) {
    throw new Error('User is not authenticated')
  }

  await prisma.post.findFirstOrThrow({
    where: {
      id: postId,
    },
  })

  return await prisma.comment.create({
    data: {
      content: comment,
      authorId: user.id,
      postId,
    },
    include: {
      author: {
        select: {
          name: true,
          pictureUrl: true,
          position: true,
        },
      },
    },
  })
}
