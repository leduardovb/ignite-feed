'use server'

import prisma from '@/lib/prisma/db'
import { env } from '@/server/env'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

interface LoginDTO {
  email: string
  password: string
}

export async function login({ email, password }: LoginDTO) {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  })

  if (!user) {
    throw new Error('User not found')
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)

  if (!isPasswordValid) {
    throw new Error('Invalid password')
  }

  const encodedToken = jwt.sign(
    { ...user, password: undefined },
    env.JWT_SECRET,
    { expiresIn: '1d' }
  )

  await prisma.userToken.create({
    data: {
      token: encodedToken,
      userId: user.id,
    },
  })

  const tokenDuration = 60 * 60 * 24
  const cookiesStore = cookies()
  cookiesStore.set(env.TOKEN_KEY, encodedToken, {
    path: '/',
    httpOnly: true,
    maxAge: tokenDuration,
  })

  return encodedToken
}
