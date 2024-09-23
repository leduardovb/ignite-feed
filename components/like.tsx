import { cn } from '@/lib/utils'
import { LikeIcon } from './icons/like.icon'

interface Props {
  count: number
  isLiked: boolean
  onClick: () => void
}

export function Like({ count, isLiked, onClick }: Props) {
  return (
    <div
      className={cn(
        'flex items-center gap-x-3 font-bold text-gray-500',
        isLiked && 'text-primary'
      )}
    >
      <span onClick={onClick} className="cursor-pointer">
        <LikeIcon />
      </span>
      <span>Aplaudir • {count}</span>
    </div>
  )
}
