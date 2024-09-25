'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useLogin } from '@/hooks/auth/use-login'
import { LoginDTO, LoginSchema } from '@/lib/zod/login.schema'
import { useForm } from 'react-hook-form'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/form'

export default function LoginPage() {
  const { push, replace } = useRouter()
  const { mutateAsync, isPending } = useLogin()
  const form = useForm<LoginDTO>({
    resolver: zodResolver(LoginSchema),
  })

  const onSubmit = async (data: LoginDTO) => {
    await mutateAsync(data)
    replace('/')
  }

  const goToRegister = () => {
    push('/auth/register')
  }

  return (
    <Card className="w-[400px] border-0 bg-gray-800">
      <CardHeader>
        <CardTitle className="text-center text-3xl text-gray-300">
          Login
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="flex flex-col gap-y-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
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
                      placeholder="Digite seu e-mail"
                      {...field}
                    />
                  </FormControl>
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
                </FormItem>
              )}
            />

            <div className="flex flex-col items-center gap-y-4">
              <Button
                type="submit"
                disabled={isPending}
                className="h-12 w-full gap-x-2 text-lg font-semibold"
              >
                {isPending && <Loader2 className="size-4 animate-spin" />}
                Entrar
              </Button>
              <span className="font-semibold text-gray-300">OU</span>
              <Button
                type="button"
                variant={'outline'}
                onClick={goToRegister}
                className="h-12 w-full gap-x-2 text-lg font-semibold"
              >
                Cadastrar
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
