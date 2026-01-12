'use client'
import { useEffect, useState } from 'react'

export function useActiveSection(threshold = 0.3) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        threshold,
      }
    )
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [threshold])

  return active
}
