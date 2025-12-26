import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Aman Shukla | ML Portfolio',
  description:
    'Machine Learning practitioner focused on applied ML, research, and real-world systems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <main className="mx-auto max-w-6xl px-8 py-16">
          {children}
        </main>
      </body>
    </html>
  )
}
