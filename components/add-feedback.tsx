'use client'

import { useState } from 'react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

export function AddFeedback() {
  const [comment, setComment] = useState('')

  const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value.trim())
  }

  return (
    <div>
      <form className="flex flex-col gap-y-4">
        <h4 className="font-bold">Deixei seu feedback</h4>
        <Textarea
          className="min-h-[96px]"
          onChange={handleComment}
          placeholder="Escreva um comentário..."
        />
        {!!comment && (
          <div>
            <Button className="h-12 w-[108px] font-bold">Publicar</Button>
          </div>
        )}
      </form>
    </div>
  )
}
