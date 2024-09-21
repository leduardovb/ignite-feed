import Image from 'next/image'

export function Header() {
  return (
    <header className="flex h-[100px] items-center justify-center gap-x-4 bg-gray-800">
      <Image
        priority
        alt="logo"
        width={65}
        height={61}
        src="/icons/ignite-feed-logo.svg"
      />
      <h1 className="text-2xl font-bold">Ignite Feed</h1>
    </header>
  )
}
