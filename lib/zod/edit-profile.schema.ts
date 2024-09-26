import { z } from 'zod'
import { CommonValidations } from './common-validations'

export const EditProfileSchema = z.object({
  name: CommonValidations.string.trim().min(3).max(100),
  position: CommonValidations.string.trim().min(3).max(100),
})

export type EditProfileDTO = z.infer<typeof EditProfileSchema>
