import { Header } from '@/components/header'

export default function AppLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      {children}
    </div>
  )
}
