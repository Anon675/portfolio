import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">

          {/* Left: Name / Home */}
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight"
          >
            Aman Shukla
          </Link>

          {/* Right: Navigation */}
          <div className="flex items-center gap-4 text-sm">
            <Link href="/projects" className="hover:underline">
              Projects
            </Link>
            <Link href="/research" className="hover:underline">
              Research
            </Link>
            <Link href="/experience" className="hover:underline">
              Experience
            </Link>
            <Link href="/education" className="hover:underline">
              Education
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>

        </div>
      </div>
    </nav>
  )
}
