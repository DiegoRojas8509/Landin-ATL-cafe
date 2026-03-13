import Link from 'next/link'
import type { Space } from '@/lib/constants'

interface SpaceCardProps {
  space: Space
  large?: boolean   // true = left large card in homepage grid
}

// Gradient fallbacks while real images load
const CARD_GRADIENTS: Record<string, string> = {
  cafe:    'linear-gradient(160deg, #3D2011 0%, #6B3A2A 60%, #B5622A 100%)',
  taller:  'linear-gradient(160deg, #2B1A11 0%, #5A3020 100%)',
  galeria: 'linear-gradient(160deg, #1A1008 0%, #4A2A18 100%)',
  cursos:  'linear-gradient(160deg, #241308 0%, #5D3018 100%)',
}

export default function SpaceCard({ space, large }: SpaceCardProps) {
  return (
    <div
      data-cursor-hover
      style={{
        position:    'relative',
        overflow:    'hidden',
        cursor:      'none',
        aspectRatio: large ? 'unset' : '4/3',
        background:  'var(--atl-dark)',
        gridColumn:  large ? '1' : undefined,
        gridRow:     large ? '1 / 3' : undefined,
      }}
      className="space-card"
    >
      {/*
       * ── IMAGE SLOT ──────────────────────────────────────────────
       * Replace the background gradient with:
       *   style={{ backgroundImage: `url('${space.cardImage}')` }}
       *
       * Files (see lib/constants.ts for space.cardImage paths):
       *   CAFÉ    → /public/images/spaces/cafe-espacio.jpg
       *   TALLER  → /public/images/spaces/taller-arte.jpg
       *   GALERÍA → /public/images/spaces/galeria.jpg
       *   CURSOS  → /public/images/spaces/cursos.jpg
       * ─────────────────────────────────────────────────────────────
       */}
      <div
        className="space-card-img"
        style={{
          position:   'absolute',
          inset:      0,
          background: CARD_GRADIENTS[space.id] ?? 'var(--atl-dark)',
          backgroundImage: `url('${space.cardImage}')`, backgroundSize: 'cover', backgroundPosition: 'center'
        }}
      />

      {/* Dark gradient overlay */}
      <div
        style={{
          position:   'absolute',
          inset:      0,
          background: 'linear-gradient(to top, rgba(26,14,8,0.85) 0%, rgba(26,14,8,0.2) 60%, transparent 100%)',
          zIndex:     1,
        }}
      />

      {/* Card body */}
      <div
        className="space-card-body"
        style={{
          position:   'absolute',
          bottom:     0,
          left:       0,
          right:      0,
          zIndex:     2,
          padding:    '32px',
          transform:  'translateY(8px)',
          transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <p
          style={{
            fontFamily:    'var(--font-wide)',
            fontSize:      '16px',
            letterSpacing: '0.35em',
            color:       '#fff',
            marginBottom:  '8px',
          }}
        >
          {space.tag}
        </p>
        <h3
          style={{
            fontFamily:  'var(--font-display)',
            fontSize:    'clamp(22px, 2.5vw, 32px)',
            fontWeight:  700,
            color:       '#fff',
            marginBottom:'12px',
            lineHeight:  1.2,
          }}
        >
          {space.name}
        </h3>
        <p className="space-card-desc">{space.shortDesc}</p>
        <Link href={space.href} className="space-card-link">
          Conoce más
        </Link>
      </div>

      <style>{`
        .space-card:hover .space-card-img { transform: scale(1.06); }
        .space-card:hover .space-card-body { transform: translateY(0) !important; }
        .space-card-desc {
          font-size: 13px; line-height: 1.7;
          color: rgba(255,255,255,0.6);
          max-width: 300px;
          transform: translateY(10px); opacity: 0;
          transition: transform 0.4s 0.05s, opacity 0.4s 0.05s;
          margin-bottom: 20px;
        }
        .space-card:hover .space-card-desc { transform: translateY(0); opacity: 1; }
        .space-card-link {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--atl-amber);
          transform: translateY(10px); opacity: 0;
          transition: transform 0.4s 0.1s, opacity 0.4s 0.1s;
          text-decoration: none;
        }
        .space-card:hover .space-card-link { transform: translateY(0); opacity: 1; }
        .space-card-link::after { content: '→'; transition: transform 0.2s; }
        .space-card:hover .space-card-link::after { transform: translateX(4px); }
      `}</style>
    </div>
  )
}
