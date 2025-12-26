import './globals.css'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aman Shukla',
  description:
    'Machine Learning practitioner focused on applied ML, research, and real-world systems.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {/* Global navigation */}
        <Navbar />

        {/* Global content container */}
        <main
          className="
            mx-auto
            w-full
            max-w-4xl
            px-4
            sm:px-6
            lg:px-8
            py-8
            sm:py-12
          "
        >
          {children}
        </main>
      </body>
    </html>
  )
}
