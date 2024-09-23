'use server'

import prisma from '@/lib/prisma/db'
import { getUser } from '../user/get-user'

interface ListPostsQuery {
  page?: number
  pageSize?: number
}

const DefaultPage = 1
const DefaultPageSize = 10

export async function listPosts(query: ListPostsQuery = {}) {
  const { isAuthenticated } = await getUser()

  if (!isAuthenticated) {
    throw new Error('User is not authenticated')
  }

  const { page = DefaultPage, pageSize = DefaultPageSize } = query
  const posts = await prisma.post.findMany({
    take: pageSize,
    skip: (page - 1) * pageSize,
    orderBy: { createdAt: 'desc' },
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
  const count = await prisma.post.count()

  return {
    page,
    pageSize,
    data: posts,
    totalElements: count,
    totalPages: Math.ceil(count / pageSize),
  }
}
