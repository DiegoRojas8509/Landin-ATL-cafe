'use client'

import { useEffect, useState } from 'react'

type Bean = {
  id: number
  left: string
  top: string
  size: number
  scrollSpeed: number
  mouseStrengthX: number
  mouseStrengthY: number
  rotate: number
  src: string
}

const beans: Bean[] = [
  {
    id: 1,
    left: '8%',
    top: '16%',
    size: 42,
    scrollSpeed: 0.18,
    mouseStrengthX: 18,
    mouseStrengthY: 12,
    rotate: -10,
    src: '/images/coffee-bean-1.png',
  },
  {
    id: 2,
    left: '20%',
    top: '68%',
    size: 30,
    scrollSpeed: 0.12,
    mouseStrengthX: 12,
    mouseStrengthY: 10,
    rotate: 16,
    src: '/images/coffee-bean-2.png',
  },
  {
    id: 3,
    left: '74%',
    top: '18%',
    size: 40,
    scrollSpeed: 0.16,
    mouseStrengthX: 16,
    mouseStrengthY: 14,
    rotate: 9,
    src: '/images/coffee-bean-1.png',
  },
  {
    id: 4,
    left: '88%',
    top: '58%',
    size: 28,
    scrollSpeed: 0.1,
    mouseStrengthX: 10,
    mouseStrengthY: 8,
    rotate: -18,
    src: '/images/coffee-bean-3.png',
  },
  {
    id: 5,
    left: '60%',
    top: '74%',
    size: 36,
    scrollSpeed: 0.14,
    mouseStrengthX: 14,
    mouseStrengthY: 10,
    rotate: 14,
    src: '/images/coffee-bean-2.png',
  },
  {
    id: 6,
    left: '46%',
    top: '10%',
    size: 24,
    scrollSpeed: 0.08,
    mouseStrengthX: 8,
    mouseStrengthY: 6,
    rotate: -6,
    src: '/images/coffee-bean-3.png',
  },
]

export default function HeroCoffeeBeans() {
  const [scrollY, setScrollY] = useState(0)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)')

    const updateDeviceType = () => {
      setIsMobile(media.matches)
    }

    updateDeviceType()
    media.addEventListener('change', updateDeviceType)

    return () => media.removeEventListener('change', updateDeviceType)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMouse({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMobile])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      {beans.map((bean) => {
        const scrollOffsetY = scrollY * bean.scrollSpeed

        const mouseOffsetX = isMobile ? 0 : mouse.x * bean.mouseStrengthX
        const mouseOffsetY = isMobile ? 0 : mouse.y * bean.mouseStrengthY

        const rotation = bean.rotate + scrollY * 0.025 + (isMobile ? 0 : mouse.x * 4)

        return (
          <img
            key={bean.id}
            src={bean.src}
            alt=""
            style={{
              position: 'absolute',
              left: bean.left,
              top: bean.top,
              width: `${bean.size}px`,
              height: 'auto',
              opacity: 0.82,
              transform: `translate3d(${mouseOffsetX}px, ${scrollOffsetY + mouseOffsetY}px, 0) rotate(${rotation}deg)`,
              transition: isMobile
                ? 'transform 0.12s linear'
                : 'transform 0.18s ease-out',
              filter: 'drop-shadow(0 10px 18px rgba(0,0,0,0.22))',
              willChange: 'transform',
            }}
          />
        )
      })}
    </div>
  )
}