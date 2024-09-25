import { z } from 'zod'
import { CommonValidations } from './common-validations'

export const RegisterSchema = z
  .object({
    name: CommonValidations.string.trim().min(3).max(100),
    email: CommonValidations.string.trim().email(),
    password: CommonValidations.string.trim().min(6),
    position: CommonValidations.string.trim().min(3),
    confirmPassword: CommonValidations.string.trim().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Senhas não conferem',
    path: ['confirmPassword'],
  })

export type RegisterDTO = z.infer<typeof RegisterSchema>
