import type { Metadata } from 'next'
import './globals.css'
import { Roboto } from 'next/font/google'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Ignite feed',
}

const RobotFont = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${RobotFont.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
