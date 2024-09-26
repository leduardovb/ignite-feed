'use client '

import { UserKeys } from '@/lib/react-query/query-keys'
import { getUser, UserWithoutPassword } from '@/server/functions/user/get-user'
import { useQuery } from '@tanstack/react-query'

interface Props {
  initialData?: {
    isAuthenticated: true
    user: UserWithoutPassword
  }
}

export function useAuth({ initialData }: Props = {}) {
  const query = useQuery({
    initialData,
    refetchOnMount: false,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    queryKey: UserKeys.me(),
    queryFn: () => getUser(),
  })
  return query
}
