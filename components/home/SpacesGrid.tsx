import SpaceCard from '@/components/shared/SpaceCard'
import { SPACES } from '@/lib/constants'

export default function SpacesGrid() {
  return (
    <section style={{ padding: '80px 0 120px', background: 'var(--atl-espresso)' }}>
      <div className="container spaces-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
        <h2 className="reveal" style={{ fontFamily: 'var(--font-wide)', fontSize: 'clamp(40px, 6vw, 72px)', color: '#fff', letterSpacing: '0.04em', lineHeight: 1 }}>LOS<br />ESPACIOS</h2>
        <p className="reveal reveal-delay-1" style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.4)', maxWidth: '280px', textAlign: 'right' }}>
          Cada rincón de ATL está diseñado para que algo extraordinario suceda.
        </p>
      </div>

      <div className="container">
        <div className="spaces-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'auto auto', gap: '2px' }}>
          {SPACES.map((space, i) => (
           <SpaceCard key={space.id} space={space} />
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:1024px){.spaces-grid{grid-template-columns:1fr!important}}
        @media(max-width:768px){.spaces-header{flex-direction:column;align-items:flex-start;gap:12px}.spaces-header p{text-align:left;max-width:100%!important}}
      `}</style>
    </section>
  )
}
