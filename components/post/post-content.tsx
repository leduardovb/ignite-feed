interface Props {
  content: string
}

export function PostContent({ content }: Props) {
  return <div className="whitespace-break-spaces text-gray-400">{content}</div>
}
