import { EditProfileButton } from './edit-profile-button'
import { Separator } from './ui/separator'
import Image from 'next/image'
import { UserAvatar } from './user-avatar'
import { useUser } from '@/hooks/auth/use-user'
import { userFallback } from '@/lib/utils'
import { DefaultAvatar } from '@/lib/default-avatar'

export async function UserCard() {
  const { user } = await useUser()

  if (!user) {
    return null
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
          alt={user.name}
          fallback={userFallback(user.name)}
          src={user.pictureUrl ?? DefaultAvatar}
        />
      </div>
      <div>
        <h3 className="font-bold">{user.name}</h3>
        <p className="text-sm text-gray-500">{user.position}</p>
      </div>
      <Separator className="my-6" />
      <EditProfileButton />
    </div>
  )
}
