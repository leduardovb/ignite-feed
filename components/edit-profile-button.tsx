import React from 'react'
import { Button } from './ui/button'
import { PenIcon } from './icons/pen.icon'

export function EditProfileButton() {
  return (
    <Button
      variant={'outline'}
      className="mx-auto flex h-12 w-[192px] gap-x-3 font-bold"
    >
      <PenIcon />
      Editar seu perfil
    </Button>
  )
}
