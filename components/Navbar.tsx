'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)
  const [researchOpen, setResearchOpen] = useState(false)

  return (
    <header className="border-b border-gray-800">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          Aman Shukla
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {/* Projects */}
          <div className="relative group">
            <span className="cursor-pointer">Projects</span>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-black border border-gray-800 rounded">
              <Link href="/projects/mcq-extraction" className="block px-4 py-2 hover:bg-gray-800">
                MCQ Extraction
              </Link>
              <Link href="/projects/mern-chat" className="block px-4 py-2 hover:bg-gray-800">
                MERN Chat
              </Link>
              <Link href="/projects/ml-system" className="block px-4 py-2 hover:bg-gray-800">
                ML System
              </Link>
            </div>
          </div>

          {/* Research */}
          <div className="relative group">
            <span className="cursor-pointer">Research</span>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-black border border-gray-800 rounded">
              <Link href="/research/bone-fracture" className="block px-4 py-2 hover:bg-gray-800">
                Bone Fracture
              </Link>
              <Link href="/research/case-study" className="block px-4 py-2 hover:bg-gray-800">
                Case Study
              </Link>
            </div>
          </div>

          <Link href="/experience">Experience</Link>
          <Link href="/education">Education</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black p-6 overflow-y-auto">
          <button
            className="mb-6 underline text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Close ×
          </button>

          <div className="space-y-5 text-base">
            {/* Projects */}
            <div>
              <button
                className="font-medium"
                onClick={() => setProjectsOpen(!projectsOpen)}
              >
                Projects
              </button>
              {projectsOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  <Link href="/projects/mcq-extraction" onClick={() => setMenuOpen(false)}>
                    MCQ Extraction
                  </Link>
                  <Link href="/projects/ml-system" onClick={() => setMenuOpen(false)}>
                    ML System
                  </Link>
                  <Link href="/projects/mern-chat" onClick={() => setMenuOpen(false)}>
                    MERN Chat
                  </Link>
                </div>
              )}
            </div>

            {/* Research */}
            <div>
              <button
                className="font-medium"
                onClick={() => setResearchOpen(!researchOpen)}
              >
                Research
              </button>
              {researchOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  <Link href="/research/bone-fracture" onClick={() => setMenuOpen(false)}>
                    Bone Fracture
                  </Link>
                  <Link href="/research/case-study" onClick={() => setMenuOpen(false)}>
                    An Empirical Study
                  </Link>
                </div>
              )}
            </div>

            <Link href="/experience" onClick={() => setMenuOpen(false)}>
              Experience
            </Link>
            <Link href="/education" onClick={() => setMenuOpen(false)}>
              Education
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
