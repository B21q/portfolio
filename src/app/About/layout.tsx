export const metadata = {
    title: 'B21 - About',
    description: 'Bun Next-app',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className='bg-iwhite dark:bg-bg'>{children}</body>
      </html>
    )
  }
  