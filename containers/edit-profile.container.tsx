'use client'

import { EditProfileForm } from '@/components/edit-profile-form'
import { useAuth } from '@/hooks/auth/use-auth'
import { useUpdateProfile } from '@/hooks/profile/use-update-profile'
import { EditProfileDTO } from '@/lib/zod/edit-profile.schema'
import { toast } from 'sonner'

export function EditProfileContainer() {
  const { data, isLoading } = useAuth()
  const { mutateAsync: updateProfileAsync } = useUpdateProfile()

  if (isLoading || !data?.user) {
    return <div>Loading...</div>
  }

  const onSubmit = async (data: EditProfileDTO) => {
    await updateProfileAsync({
      name: data.name,
      position: data.position,
    })
    toast.success('Perfil atualizado com sucesso!')
  }

  return (
    <EditProfileForm
      onSubmit={onSubmit}
      initialValues={{
        name: data.user.name,
        position: data.user.position,
      }}
    />
  )
}
