'use client'

import { EditProfileButton } from './edit-profile-button'
import { Separator } from './ui/separator'
import { useAuth } from '@/hooks/auth/use-auth'
import { Skeleton } from './ui/skeleton'
import { DefaultAvatar } from '@/lib/default-avatar'
import { userFallback } from '@/lib/utils'
import { UserAvatar } from './user-avatar'
import Image from 'next/image'

export function UserCard() {
  const { data, isLoading } = useAuth()

  if (!data?.user || isLoading) {
    return <Skeleton className="h-[294px] w-[256px] rounded-lg" />
  }

  return (
    <div className="relative flex w-[256px] flex-col rounded-lg bg-gray-800 pb-8 text-center">
      <Image
        width={256}
        height={72}
        alt="Background"
        src="/banner.png"
        className="absolute rounded-t-lg"
      />
      <div className="z-10 mb-4 mt-10 self-center">
        <UserAvatar
          alt={data.user.name}
          fallback={userFallback(data.user.name)}
          src={data.user.pictureUrl ?? DefaultAvatar}
        />
      </div>
      <div className="px-4">
        <h3 title={data.user.name} className="truncate font-bold">
          {data.user.name}
        </h3>
        <p
          title={data.user.position}
          className="truncate text-sm text-gray-500"
        >
          {data.user.position}
        </p>
      </div>
      <Separator className="my-6" />
      <EditProfileButton />
    </div>
  )
}
