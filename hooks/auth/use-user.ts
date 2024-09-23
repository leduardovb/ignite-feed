'use server'

import { getUser } from '@/server/functions/user/get-user'

export async function useUser() {
  return await getUser()
}
