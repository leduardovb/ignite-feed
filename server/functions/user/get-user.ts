'use server'

import prisma from '@/lib/prisma/db'
import { env } from '@/server/env'
import { User } from '@prisma/client'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

type AuthenticatedUser = {
  user: User
  isAuthenticated: true
}

type UnauthenticatedUser = {
  user: null
  isAuthenticated: false
}

type UserResponse = AuthenticatedUser | UnauthenticatedUser

export async function getUser(): Promise<UserResponse> {
  const cookiesStore = cookies()
  const token = cookiesStore.get(env.TOKEN_KEY)?.value

  if (!token) {
    return { user: null, isAuthenticated: false }
  }

  try {
    jwt.verify(token, env.JWT_SECRET)

    const user = await prisma.userToken.findFirst({
      where: { token },
      include: { user: true },
    })

    if (!user) {
      return { user: null, isAuthenticated: false }
    }

    return { user: user.user, isAuthenticated: true }
  } catch {
    cookiesStore.delete(env.TOKEN_KEY)

    return { user: null, isAuthenticated: false }
  }
}
