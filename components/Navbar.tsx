'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Left: Name */}
          <Link href="/" className="text-sm font-medium">
            Aman Shukla
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm">

            {/* Projects Dropdown */}
            <div className="relative group">
              <span className="cursor-pointer">
                Projects
              </span>

              {/* Hover bridge + dropdown */}
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
                <div className="w-64 rounded-md border border-white/10 bg-black shadow-lg">
                  <Link
                    href="/projects/mcq-extraction"
                    className="block px-4 py-2 hover:bg-white/5"
                  >
                    Multimodal MCQ Extraction
                  </Link>
                  <Link
                    href="/projects/ml-system"
                    className="block px-4 py-2 hover:bg-white/5"
                  >
                    Failure Aware ML System
                  </Link>
                  <Link
                    href="/projects/mern-chat"
                    className="block px-4 py-2 hover:bg-white/5"
                  >
                    Real-Time MERN Chat
                  </Link>
                </div>
              </div>
            </div>

            {/* Research Dropdown */}
            <div className="relative group">
              <span className="cursor-pointer">
                Research
              </span>

              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
                <div className="w-64 rounded-md border border-white/10 bg-black shadow-lg">
                  <Link
                    href="/research/bone-fracture"
                    className="block px-4 py-2 hover:bg-white/5"
                  >
                    Bone Fracture Detection
                  </Link>
                  <Link
                    href="/research/mcq-extraction"
                    className="block px-4 py-2 hover:bg-white/5"
                  >
                    MCQ Extraction Case Study
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/experience">Experience</Link>
            <Link href="/education">Education</Link>
            <Link href="/contact">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 md:hidden">
          <div className="absolute right-0 top-0 h-full w-72 bg-black border-l border-white/10 p-6 space-y-6">

            <button
              onClick={() => setMobileOpen(false)}
              className="text-sm"
            >
              Close ✕
            </button>

            <div className="space-y-4 text-sm">

              <div>
                <p className="mb-2 font-medium">Projects</p>
                <Link href="/projects/mcq-extraction" onClick={() => setMobileOpen(false)} className="block mb-1">
                  MCQ Extraction
                </Link>
                <Link href="/projects/ml-system" onClick={() => setMobileOpen(false)} className="block mb-1">
                  ML System
                </Link>
                <Link href="/projects/mern-chat" onClick={() => setMobileOpen(false)} className="block">
                  MERN Chat
                </Link>
              </div>

              <div>
                <p className="mb-2 font-medium">Research</p>
                <Link href="/research/bone-fracture" onClick={() => setMobileOpen(false)} className="block mb-1">
                  Bone Fracture
                </Link>
                <Link href="/research/mcq-extraction" onClick={() => setMobileOpen(false)} className="block">
                   An Empirical Study
                </Link>
              </div>

              <Link href="/experience" onClick={() => setMobileOpen(false)}>Experience</Link>
              <Link href="/education" onClick={() => setMobileOpen(false)}>Education</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>

            </div>
          </div>
        </div>
      )}
    </header>
  )
}
