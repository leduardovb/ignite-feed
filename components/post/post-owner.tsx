interface Props {
  name: string
  position: string
}

export function PostOwner({ name, position }: Props) {
  return (
    <div className="my-auto">
      <h3 className="font-bold">{name}</h3>
      <p className="text-sm text-gray-500">{position}</p>
    </div>
  )
}
