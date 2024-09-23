'use server'

import db from '@/lib/prisma/db'

interface ListPostCommentsQuery {
  postId: string
}

export async function listPostComments({ postId }: ListPostCommentsQuery) {
  const comments = await db.comment.findMany({
    where: {
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
      _count: {
        select: {
          likes: true,
        },
      },
    },
  })
  return comments
}
