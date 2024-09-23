import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

interface Props {
  src: string
  alt: string
  fallback: string
  className?: string
}

export function UserAvatar({ src, alt, fallback, className }: Props) {
  return (
    <div
      className={cn(
        'z-10 size-[60px] rounded-lg border-2 border-primary bg-gray-800 p-1',
        className
      )}
    >
      <Avatar className="h-full w-full rounded-sm">
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback className="rounded-sm text-gray-800">
          {fallback}
        </AvatarFallback>
      </Avatar>
    </div>
  )
}
