import { EditProfileButton } from './edit-profile-button'
import { Separator } from './ui/separator'
import Image from 'next/image'
import { UserAvatar } from './user-avatar'
import { useUser } from '@/hooks/auth/use-user'

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
        layout="responsive"
        className="absolute rounded-t-lg"
      />
      <div className="z-10 mb-4 mt-10 self-center">
        <UserAvatar src="/picture.png" alt="Leslie Alexander" fallback="LA" />
      </div>
      <div>
        <h3 className="font-bold">Leslie Alexander</h3>
        <p className="text-sm text-gray-500">UI Designer</p>
      </div>
      <Separator className="my-6" />
      <EditProfileButton />
    </div>
  )
}
