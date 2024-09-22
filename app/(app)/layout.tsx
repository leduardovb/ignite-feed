import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'

export default function AppLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col gap-y-8 bg-gray-900">
      <Header />
      <div className="mx-auto flex w-full max-w-[1120px] gap-x-8">
        <Sidebar />
        {children}
      </div>
    </div>
  )
}
