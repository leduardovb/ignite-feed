import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

export default function LoginPage() {
  return (
    <div className="flex gap-x-40">
      <div className="flex gap-x-10">
        <div className="flex flex-col justify-center gap-y-4">
          <Image
            src="/icons/ignite-feed-logo.svg"
            width={200}
            height={200}
            alt="Logo"
          />
          <h2 className="text-start text-4xl font-bold">Ignite Feed</h2>
        </div>
        <div className="py-4">
          <Separator orientation="vertical" className="w-1" />
        </div>
      </div>
      <Card className="w-[400px] border-0 bg-gray-800">
        <CardHeader>
          <CardTitle className="text-center text-3xl text-gray-300">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-y-6">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                type="email"
                placeholder="Digite seu e-mail"
              />
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input
                name="password"
                type="password"
                placeholder="*************"
              />
            </div>

            <Button type="submit" className="h-12 w-full text-lg font-semibold">
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
