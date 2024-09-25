'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterDTO, RegisterSchema } from '@/lib/zod/register.schema'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/form'
import { useRegister } from '@/hooks/auth/use-register'
import { toast } from 'sonner'
import { useEffect } from 'react'

export default function RegisterPage() {
  const { replace } = useRouter()
  const { mutateAsync, isPending, isError } = useRegister()
  const form = useForm<RegisterDTO>({
    resolver: zodResolver(RegisterSchema),
  })

  const onSubmit = async (data: RegisterDTO) => {
    await mutateAsync(data)

    toast.success('Usuário cadastrado com sucesso')

    replace('/auth/login')
  }

  useEffect(() => {
    if (isError) {
      toast.error('Erro ao cadastrar usuário')
    }
  }, [isError])

  return (
    <Card className="w-[400px] border-0 bg-gray-800">
      <CardHeader>
        <CardTitle className="text-center text-3xl text-gray-300">
          Cadastrar
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="flex flex-col gap-y-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input id="name" placeholder="Digite seu nome" {...field} />
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
                    <Input
                      id="position"
                      placeholder="Digite seu cargo"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Digite seu email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      id="password"
                      type="password"
                      placeholder="*************"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="confirmPassword"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmar senha</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      id="confirmPassword"
                      placeholder="*************"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isPending}
              className="h-12 w-full gap-x-2 text-lg font-semibold"
            >
              {isPending && <Loader2 className="size-4 animate-spin" />}
              Registrar
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
