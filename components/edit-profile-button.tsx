import React from 'react'
import { Button } from './ui/button'
import { PenIcon } from './icons/pen.icon'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import { EditProfileContainer } from '@/containers/edit-profile.container'

export function EditProfileButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={'outline'}
          className="mx-auto flex h-12 w-[192px] gap-x-3 bg-gray-800 font-bold"
        >
          <PenIcon />
          Editar seu perfil
        </Button>
      </SheetTrigger>
      <SheetContent className="min-w-[480px]">
        <SheetHeader>
          <SheetTitle className="text-2xl">Editar perfil</SheetTitle>
        </SheetHeader>
        <EditProfileContainer />
      </SheetContent>
    </Sheet>
  )
}
