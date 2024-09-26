'use client'

import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './form'
import { Input } from './ui/input'
import { SheetClose, SheetFooter } from './ui/sheet'
import { Button } from './ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  EditProfileDTO,
  EditProfileSchema,
} from '@/lib/zod/edit-profile.schema'
import { Loader2 } from 'lucide-react'

interface Props {
  initialValues?: EditProfileDTO
  onSubmit: (data: EditProfileDTO) => Promise<void> | void
}

export function EditProfileForm({ initialValues, onSubmit }: Props) {
  const form = useForm<EditProfileDTO>({
    defaultValues: initialValues,
    resolver: zodResolver(EditProfileSchema),
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-8 flex h-full flex-col items-stretch"
      >
        <div className="space-y-4">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Digite seu nome" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="position"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cargo</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Digite seu cargo" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <SheetFooter className="mt-auto">
          <SheetClose type="button" asChild>
            <Button
              variant={'outline'}
              className="h-12 w-[140px] font-semibold"
              disabled={form.formState.isSubmitting}
            >
              Cancelar
            </Button>
          </SheetClose>
          <Button
            type="submit"
            className="h-12 w-[140px] gap-x-2 font-semibold"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting && (
              <Loader2 className="size-4 animate-spin" />
            )}
            Salvar
          </Button>
        </SheetFooter>
      </form>
    </Form>
  )
}
