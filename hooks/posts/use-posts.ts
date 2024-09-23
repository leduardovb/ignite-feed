'use client'

import { PostKeys } from '@/lib/react-query/query-keys'
import { listPosts } from '@/server/functions/posts/list-posts'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

export function usePosts() {
  const query = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: PostKeys.list(),
    queryFn: ({ pageParam = 1 }) => listPosts({ page: pageParam }),
    getNextPageParam: (lastPage) => {
      const { page, totalPages } = lastPage
      return page < totalPages ? page + 1 : undefined
    },
  })
  const newData = useMemo(() => {
    return query.data?.pages.flatMap((page) => page.data) ?? []
  }, [query.data])

  return { ...query, data: newData }
}
