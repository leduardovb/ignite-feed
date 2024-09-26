'use server'

import db from '@/lib/prisma/db'
import { getUser } from '../user/get-user'
import { User } from '@prisma/client'

interface ListPostCommentsQuery {
  postId: string
}

export interface ListPostCommentsResponse {
  id: string
  likes: number
  content: string
  authorId: string
  postId: string
  createdAt: Date
  isLiked: boolean
  author: {
    id: string
    name: string
    position: string
    pictureUrl: string | null
  }
}

interface ListPostCommentsData {
  author: {
    id: string
    name: string
    position: string
    pictureUrl: string | null
  }
  _count: {
    likes: number
  }
  id: string
  content: string
  authorId: string
  postId: string
  createdAt: Date
}

export async function listPostComments({ postId }: ListPostCommentsQuery) {
  const { user, isAuthenticated } = await getUser()

  if (!isAuthenticated) {
    throw new Error('User is not authenticated')
  }

  const comments = await db.comment.findMany({
    where: {
      postId,
    },
    include: {
      author: {
        select: {
          id: true,
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

  return await mapCommentsLikedByUser(comments, user)
}

const mapCommentsLikedByUser = async (
  comments: Array<ListPostCommentsData>,
  user: User
): Promise<Array<ListPostCommentsResponse>> => {
  const like = await db.like.findFirst({
    where: {
      authorId: user.id,
      commentId: {
        in: comments.map((comment) => comment.id),
      },
    },
  })

  return comments.map((comment) => {
    const isLiked = !!like
    return {
      ...comment,
      likes: comment._count.likes,
      isLiked,
    }
  })
}
