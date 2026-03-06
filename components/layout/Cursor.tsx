'use client'

import { useCursor } from '@/lib/hooks'

export default function Cursor() {
  const { ref, hovering } = useCursor()

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position:        'fixed',
        width:           hovering ? '40px' : '12px',
        height:          hovering ? '40px' : '12px',
        background:      hovering ? 'var(--atl-amber)' : 'var(--atl-copper)',
        borderRadius:    '50%',
        pointerEvents:   'none',
        zIndex:          9999,
        transform:       'translate(-50%, -50%)',
        opacity:         hovering ? 0.6 : 1,
        mixBlendMode:    'multiply',
        transition:      'width 0.2s ease, height 0.2s ease, background 0.2s ease, opacity 0.2s ease',
        left:            0,
        top:             0,
      }}
    />
  )
}
