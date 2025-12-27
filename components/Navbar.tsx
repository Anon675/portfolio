'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)
  const [researchOpen, setResearchOpen] = useState(false)

  return (
    <>
      {/* Top Navbar */}
      <nav className="w-full border-b border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">

            {/* Left: Home */}
            <Link href="/" className="text-sm font-semibold">
              Aman Shukla
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 text-sm">

              {/* Projects Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setProjectsOpen(!projectsOpen)}
                  className="hover:underline"
                >
                  Projects
                </button>

                {projectsOpen && (
                  <div className="absolute left-0 mt-2 w-56 border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
                    <Link
                      href="/projects/mcq-extraction"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-900"
                    >
                      Multimodal MCQ Extraction
                    </Link>
                    <Link
                      href="/projects/mern-chat"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-900"
                    >
                      Real-Time MERN Chat Application
                    </Link>
                  </div>
                )}
              </div>

              {/* Research Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setResearchOpen(!researchOpen)}
                  className="hover:underline"
                >
                  Research
                </button>

                {researchOpen && (
                  <div className="absolute left-0 mt-2 w-56 border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
                    <Link
                      href="/research/bone-fracture"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-900"
                    >
                      Bone Fracture Detection
                    </Link>
                    <Link
                      href="/research/mcq-extraction"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-900"
                    >
                      MCQ Reconstruction Case Study
                    </Link>
                  </div>
                )}
              </div>

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

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <div className="space-y-1">
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
              </div>
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />

          <div className="absolute left-0 top-0 h-full w-64 bg-white dark:bg-black p-6 space-y-6">

            <Link href="/" onClick={() => setMobileOpen(false)}>
              Home
            </Link>

            <div className="space-y-2">
              <p className="font-medium">Projects</p>
              <Link
                href="/projects/mcq-extraction"
                onClick={() => setMobileOpen(false)}
                className="block text-sm"
              >
                Multimodal MCQ Extraction
              </Link>
              <Link
                href="/projects/mern-chat"
                onClick={() => setMobileOpen(false)}
                className="block text-sm"
              >
                Real-Time MERN Chat Application
              </Link>
            </div>

            <div className="space-y-2">
              <p className="font-medium">Research</p>
              <Link
                href="/research/bone-fracture"
                onClick={() => setMobileOpen(false)}
                className="block text-sm"
              >
                Bone Fracture Detection
              </Link>
              <Link
                href="/research/mcq-extraction"
                onClick={() => setMobileOpen(false)}
                className="block text-sm"
              >
                MCQ Reconstruction Case Study
              </Link>
            </div>

            <Link href="/experience" onClick={() => setMobileOpen(false)}>
              Experience
            </Link>

            <Link href="/education" onClick={() => setMobileOpen(false)}>
              Education
            </Link>

            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>

          </div>
        </div>
      )}
    </>
  )
}
