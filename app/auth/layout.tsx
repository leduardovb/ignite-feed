import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

export default function LoginLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <div className="m-auto flex">
        <div className="flex gap-x-40">
          <div className="flex gap-x-10">
            <div className="flex flex-col justify-center gap-y-4">
              <Image
                alt="Logo"
                width={200}
                height={200}
                src="/icons/ignite-feed-logo.svg"
              />
              <h2 className="text-start text-4xl font-bold">Ignite Feed</h2>
            </div>
            <div className="py-4">
              <Separator orientation="vertical" className="w-1" />
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
