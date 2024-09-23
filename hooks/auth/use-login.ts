'use client'

import { login } from '@/server/functions/auth/login'
import { useMutation } from '@tanstack/react-query'

export function useLogin() {
  const mutation = useMutation({
    mutationFn: login,
  })
  return mutation
}
