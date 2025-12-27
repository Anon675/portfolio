'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [projects, setProjects] = useState(false)
  const [research, setResearch] = useState(false)

  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-semibold text-lg">
          Aman Shukla
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/projects">Projects</Link>
          <Link href="/research">Research</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/education">Education</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button className="md:hidden text-xl" onClick={() => setOpen(true)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black text-white">
          <div className="px-6 py-6 space-y-6 text-base">
            <button onClick={() => setOpen(false)}>Close ✕</button>

            <div>
              <button onClick={() => setProjects(!projects)}>Projects</button>
              {projects && (
                <div className="ml-4 mt-3 space-y-2 text-sm">
                  <Link href="/projects/mcq-extraction" onClick={() => setOpen(false)}>
                    MCQ Extraction
                  </Link>
                  <Link href="/projects/mern-chat" onClick={() => setOpen(false)}>
                    MERN Chat
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button onClick={() => setResearch(!research)}>Research</button>
              {research && (
                <div className="ml-4 mt-3 space-y-2 text-sm">
                  <Link href="/research/bone-fracture" onClick={() => setOpen(false)}>
                    Bone Fracture
                  </Link>
                  <Link href="/research/case-study" onClick={() => setOpen(false)}>
                    An Empirical Study
                  </Link>
                </div>
              )}
            </div>

            <Link href="/experience" onClick={() => setOpen(false)}>Experience</Link>
            <Link href="/education" onClick={() => setOpen(false)}>Education</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}


