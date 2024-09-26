'use client '

import { UserKeys } from '@/lib/react-query/query-keys'
import { getUser } from '@/server/functions/user/get-user'
import { useQuery } from '@tanstack/react-query'

export function useAuth() {
  const query = useQuery({
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    queryKey: UserKeys.me(),
    queryFn: () => getUser(),
  })
  return query
}
