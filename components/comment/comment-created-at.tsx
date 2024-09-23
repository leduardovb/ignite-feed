interface Props {
  date: Date
}

export function CommentCreatedAt({ date }: Props) {
  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(date)
  return <p className="text-xs text-gray-500">{formattedDate}</p>
}
