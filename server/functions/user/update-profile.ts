'use server'

import prisma from '@/lib/prisma/db'
import { getUser } from './get-user'

interface UpdateProfileDTO {
  name: string
  position: string
}

export async function updateProfile({ name, position }: UpdateProfileDTO) {
  const { user, isAuthenticated } = await getUser()

  if (!isAuthenticated) {
    throw new Error('User not authenticated')
  }

  await prisma.user.update({
    where: { id: user.id },
    data: { name, position },
  })
}
