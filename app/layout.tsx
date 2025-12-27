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
      <body className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-gray-100 antialiased">
        <Navbar />

        <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
          {children}
        </main>
      </body>
    </html>
  )
}
