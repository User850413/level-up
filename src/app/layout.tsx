import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Level up!',
  description: '한 걸음씩?',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
