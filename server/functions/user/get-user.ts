'use server'

import prisma from '@/lib/prisma/db'
import { env } from '@/server/env'
import { User } from '@prisma/client'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

export type UserWithoutPassword = Omit<User, 'password'>

type AuthenticatedUser = {
  user: UserWithoutPassword
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

    const userToken = await prisma.userToken.findFirst({
      where: { token },
      include: { user: true },
    })

    if (!userToken) {
      return { user: null, isAuthenticated: false }
    }

    const user = { ...userToken.user, password: undefined }

    return { user, isAuthenticated: true }
  } catch {
    return { user: null, isAuthenticated: false }
  }
}
