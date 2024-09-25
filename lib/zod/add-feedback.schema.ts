import { z } from 'zod'
import { CommonValidations } from './common-validations'

export const AddFeedbackSchema = z.object({
  comment: CommonValidations.string.trim().max(500),
})

export type AddFeedbackDTO = z.infer<typeof AddFeedbackSchema>
