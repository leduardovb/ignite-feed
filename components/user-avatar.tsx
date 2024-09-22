import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

interface Props {
  src: string
  alt: string
  fallback: string
}

export function UserAvatar({ src, alt, fallback }: Props) {
  return (
    <div className="z-10 size-[60px] rounded-lg border-2 border-primary bg-gray-800 p-1">
      <Avatar className="h-full w-full rounded-sm">
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback className="rounded-sm">{fallback}</AvatarFallback>
      </Avatar>
    </div>
  )
}
