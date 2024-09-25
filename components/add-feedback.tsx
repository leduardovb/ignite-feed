'use client'

import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  AddFeedbackDTO,
  AddFeedbackSchema,
} from '@/lib/zod/add-feedback.schema'
import { Form, FormControl, FormField, FormItem, FormMessage } from './form'
import { Loader2 } from 'lucide-react'

interface Props {
  onSubmit: (data: AddFeedbackDTO) => Promise<void> | void
}

export function AddFeedback({ onSubmit }: Props) {
  const form = useForm<AddFeedbackDTO>({
    resolver: zodResolver(AddFeedbackSchema),
  })
  const comment = form.watch('comment')

  const handleSubmit = async (data: AddFeedbackDTO) => {
    await onSubmit(data)
    form.setValue('comment', '')
  }

  return (
    <div>
      <Form {...form}>
        <form
          className="flex flex-col gap-y-4"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <h4 className="font-bold">Deixe seu feedback</h4>
          <FormField
            name="comment"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    className="min-h-[96px]"
                    disabled={form.formState.isSubmitting}
                    placeholder="Escreva um comentário..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {!!comment && (
            <div>
              <Button
                disabled={form.formState.isSubmitting}
                className="h-12 w-[108px] font-bold"
              >
                {form.formState.isSubmitting && (
                  <Loader2
                    size={16}
                    className="mr-2 flex-shrink-0 animate-spin"
                  />
                )}
                Publicar
              </Button>
            </div>
          )}
        </form>
      </Form>
    </div>
  )
}
