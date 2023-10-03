export const metadata = {
  title: 'B21 - Corvus',
  description: 'Bun Next-app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=''>{children}</body>
    </html>
  )
}
