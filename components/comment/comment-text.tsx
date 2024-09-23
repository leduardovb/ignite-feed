interface Props {
  content: string
}

export function CommentText({ content }: Props) {
  return (
    <div>
      <p className="whitespace-break-spaces text-sm text-gray-400">{content}</p>
    </div>
  )
}
