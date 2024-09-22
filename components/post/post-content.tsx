interface Props {
  content: string
}

const regex = /(#\w+)/g

export function PostContent({ content }: Props) {
  const highlight = () => {
    const parts = content.split(regex)
    return parts.map((part, index) => {
      if (part.match(regex)) {
        return (
          <span key={index} className="font-bold text-primary">
            {part}
          </span>
        )
      }
      return <span key={index}>{part}</span>
    })
  }

  return (
    <div className="whitespace-break-spaces text-gray-400">{highlight()}</div>
  )
}
