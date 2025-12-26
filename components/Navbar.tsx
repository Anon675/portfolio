import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="border-b border-gray-700 dark:border-gray-700">
      <div className="mx-auto max-w-6xl px-8 py-5 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          Aman Shukla
        </Link>

        <nav className="flex gap-8 text-sm">
          <Link href="/projects">Projects</Link>
          <Link href="/research">Research</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/education">Education</Link>
          <Link href="/contact">Contact</Link>
          <a
            href="/Aman_Shukla_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  )
}
