export function CommentContent({ children }: React.PropsWithChildren) {
  return (
    <div className="relative flex w-full flex-col gap-y-4 rounded-lg bg-[#29292E] p-4">
      {children}
    </div>
  )
}
