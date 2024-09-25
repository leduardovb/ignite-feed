'use server'

import prisma from '@/lib/prisma/db'
import bcrypt from 'bcrypt'

interface RegisterDTO {
  name: string
  email: string
  password: string
  position: string
}

export async function register(dto: RegisterDTO) {
  const userExists = await prisma.user.findFirst({
    where: {
      email: dto.email,
    },
  })

  if (userExists) {
    throw new Error('User already exists')
  }

  const encryptedPassword = await bcrypt.hash(dto.password, 10)

  await prisma.user.create({
    data: {
      name: dto.name,
      email: dto.email,
      position: dto.position,
      password: encryptedPassword,
    },
  })
}
