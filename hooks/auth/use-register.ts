'use client'

import { register } from '@/server/functions/auth/register'
import { useMutation } from '@tanstack/react-query'

export function useRegister() {
  const mutation = useMutation({
    mutationFn: register,
  })
  return mutation
}
