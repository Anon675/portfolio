'use client'

import { useEffect, useState } from 'react'
import Chatbot from '@/components/Chatbot'

const LLM_BASE_URL = process.env.NEXT_PUBLIC_LLM_BASE_URL

export default function LLMProvider() {
  const [online, setOnline] = useState(false)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (!LLM_BASE_URL) {
      setChecked(true)
      return
    }

    const checkHealth = async () => {
      try {
        const res = await fetch(`${LLM_BASE_URL}/health`, {
          method: 'GET',
          cache: 'no-store',
        })

        if (res.ok) {
          const data = await res.json()
          setOnline(data.status === 'online')
        }
      } catch {
        setOnline(false)
      } finally {
        setChecked(true)
      }
    }

    checkHealth()
  }, [])

  if (!checked) return null
  if (!online) return null

  return <Chatbot />
}
