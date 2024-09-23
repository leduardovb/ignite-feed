import { UserAvatar } from '../user-avatar'

interface Props {
  src: string
  alt: string
  fallback: string
}

export function CommentAvatar({ src, alt, fallback }: Props) {
  return (
    <UserAvatar
      src={src}
      alt={alt}
      fallback={fallback}
      className="size-[50px] border-0"
    />
  )
}
