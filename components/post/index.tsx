export function Post({ children }: React.PropsWithChildren) {
  return (
    <div className="flex w-full max-w-[832px] flex-col gap-y-6 rounded-lg bg-gray-800 p-10">
      {children}
    </div>
  )
}
