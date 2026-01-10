'use client'

import { useState } from 'react'

export default function Chatbot() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 rounded-full bg-black text-white px-4 py-3 shadow-lg hover:bg-gray-800"
        aria-label="Open AI Assistant"
      >
        AI
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-5 z-50 w-[90vw] max-w-sm rounded-xl bg-white dark:bg-zinc-900 shadow-2xl border border-gray-200 dark:border-zinc-800">
          <div className="flex items-center justify-between px-4 py-3 border-b dark:border-zinc-800">
            <span className="font-medium">AI Assistant</span>
            <button
              onClick={() => setOpen(false)}
              className="text-sm text-gray-500 hover:text-gray-800"
            >
              Close
            </button>
          </div>

          <div className="p-4 text-sm text-gray-600 dark:text-gray-300">
            Backend is online.  
            Chat UI wiring comes next.
          </div>
        </div>
      )}
    </>
  )
}
