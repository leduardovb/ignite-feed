'use client'

import { AddFeedback } from '@/components/add-feedback'
import { useAddComment } from '@/hooks/posts/use-add-comment'
import { AddFeedbackDTO } from '@/lib/zod/add-feedback.schema'
import React from 'react'

interface Props {
  postId: string
}

export function AddFeedbackContainer({ postId }: Props) {
  const { mutateAsync } = useAddComment()

  const onSubmit = async (data: AddFeedbackDTO) => {
    await mutateAsync({ postId, comment: data.comment })
  }

  return <AddFeedback onSubmit={onSubmit} />
}
