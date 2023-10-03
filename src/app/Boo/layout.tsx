export const metadata = {
    title: 'B21 - Boo',
    description: 'Bun Next-app',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className='bg-bg dark:bg-bg'>{children}</body>
      </html>
    )
  }
  