'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

// Simple CSS-based fade transition that works safely with
// Next.js 14 App Router server components as children.
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(12px)'
    const raf = requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.45s cubic-bezier(0.16,1,0.3,1), transform 0.45s cubic-bezier(0.16,1,0.3,1)'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
    return () => cancelAnimationFrame(raf)
  }, [pathname])

  return (
    <div ref={ref} style={{ opacity: 0 }}>
      {children}
    </div>
  )
}
