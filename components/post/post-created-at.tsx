interface Props {
  date: Date
}

export function PostCreatedAt({ date }: Props) {
  const formattedDate = new Date(date).toLocaleString('pt-BR')
  return (
    <div className="my-auto ml-auto text-sm text-gray-500">
      Publicado em {formattedDate}
    </div>
  )
}
