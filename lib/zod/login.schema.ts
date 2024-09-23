import { z } from 'zod'

export const LoginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().trim().min(6),
})

export type LoginDTO = z.infer<typeof LoginSchema>
