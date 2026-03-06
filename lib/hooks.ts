'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

// ============================================================
// useScrolled — returns true when page scrolled past threshold
// ============================================================
export function useScrolled(threshold = 60): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold)
    handler() // check on mount
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])

  return scrolled
}

// ============================================================
// useReveal — IntersectionObserver for scroll-triggered reveals
// Call once in a parent component; all .reveal children animate in
// ============================================================
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal')

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

// ============================================================
// useCursor — tracks mouse position for custom cursor
// ============================================================
export function useCursor() {
  const ref = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = `${e.clientX}px`
        ref.current.style.top  = `${e.clientY}px`
      }
    }

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      setHovering(
        !!(
          t.tagName === 'BUTTON' ||
          t.tagName === 'A'      ||
          t.closest('button')   ||
          t.closest('a')        ||
          t.closest('[data-cursor-hover]')
        )
      )
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [])

  return { ref, hovering }
}

// ============================================================
// useVote — manages café colaborativo vote state (mock/localStorage-ready)
// ============================================================
export function useVote() {
  const [voted, setVoted]       = useState(false)
  const [selected, setSelected] = useState<string | null>(null)

  const handleVote = useCallback((id: string) => {
    if (voted) return
    setSelected(id)
    setVoted(true)
    // TODO: when backend is enabled, POST to /api/vote here
  }, [voted])

  return { voted, selected, handleVote }
}

// ============================================================
// useMediaQuery
// ============================================================
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(query)
    setMatches(mq.matches)
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [query])

  return matches
}
