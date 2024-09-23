export default function LoginLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <div className="m-auto flex">{children}</div>
    </div>
  )
}
