import { EditProfileButton } from './edit-profile-button'
import { Separator } from './ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Image from 'next/image'

export function UserCard() {
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
      <div className="z-10 mb-4 mt-10 self-center rounded-lg border-2 border-primary bg-gray-800 p-1">
        <Avatar className="size-15 rounded-sm">
          <AvatarImage src="/picture.png" alt="Leslie Alexander" />
          <AvatarFallback>LA</AvatarFallback>
        </Avatar>
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
