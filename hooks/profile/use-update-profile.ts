'use client'

import { UserKeys } from '@/lib/react-query/query-keys'
import { updateProfile } from '@/server/functions/user/update-profile'
import { User } from '@prisma/client'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useUpdateProfile() {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: updateProfile,
    onMutate: (data) => {
      const previousData = queryClient.getQueryData<{ user: User | null }>(
        UserKeys.me()
      )

      if (previousData) {
        queryClient.setQueryData<{ user: User | null }>(
          UserKeys.me(),
          (old) => {
            return {
              ...old,
              user: old?.user
                ? {
                    ...old.user,
                    ...data,
                  }
                : null,
            }
          }
        )
      }

      return previousData
    },
    onError: (_, __, context) => {
      if (context) {
        queryClient.setQueryData<{ user: User | null }>(UserKeys.me(), context)
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: UserKeys.me(),
      })
    },
  })
  return mutation
}
