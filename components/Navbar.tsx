'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [projects, setProjects] = useState(false)
  const [research, setResearch] = useState(false)

  return (
    <>
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
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

          <button
            className="md:hidden text-2xl"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-black text-gray-900 dark:text-gray-100">
          <div className="h-full overflow-y-auto px-6 py-6 space-y-6">

            <button
              className="text-sm underline"
              onClick={() => {
                setOpen(false)
                setProjects(false)
                setResearch(false)
              }}
            >
              Close ✕
            </button>

            {/* PROJECTS */}
            <div>
              <button
                className="text-lg font-medium"
                onClick={() => setProjects(!projects)}
              >
                Projects
              </button>

              {projects && (
                <div className="mt-3 ml-4 space-y-2 text-sm">
                  <Link
                    href="/projects/mcq-extraction"
                    onClick={() => setOpen(false)}
                    className="block"
                  >
                    MCQ Extraction
                  </Link>

                  <Link
                    href="/projects/mern-chat"
                    onClick={() => setOpen(false)}
                    className="block"
                  >
                    MERN Chat
                  </Link>
                </div>
              )}
            </div>

            {/* RESEARCH */}
            <div>
              <button
                className="text-lg font-medium"
                onClick={() => setResearch(!research)}
              >
                Research
              </button>

              {research && (
                <div className="mt-3 ml-4 space-y-2 text-sm">
                  <Link
                    href="/research/bone-fracture"
                    onClick={() => setOpen(false)}
                    className="block"
                  >
                    Bone Fracture
                  </Link>

                  <Link
                    href="/research/case-study"
                    onClick={() => setOpen(false)}
                    className="block"
                  >
                    An Empirical Study
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/experience"
              onClick={() => setOpen(false)}
              className="block text-lg"
            >
              Experience
            </Link>

            <Link
              href="/education"
              onClick={() => setOpen(false)}
              className="block text-lg"
            >
              Education
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block text-lg"
            >
              Contact
            </Link>

          </div>
        </div>
      )}
    </>
  )
}
