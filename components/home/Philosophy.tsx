import SectionLabel from '@/components/shared/SectionLabel'
import { PHILOSOPHY_ITEMS } from '@/lib/constants'

export default function Philosophy() {
  return (
    <section style={{ padding: '120px 0', background: 'var(--atl-dark)', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <SectionLabel light>Por qué existimos</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginTop: '20px' }}>
            Un espacio de <em style={{ color: 'var(--atl-amber)' }}>valor</em>
          </h2>
        </div>

        <div className="philosophy-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
          {PHILOSOPHY_ITEMS.map((item, i) => (
            <div key={item.title} className={`reveal reveal-delay-${i} philosophy-item`} style={{ padding: '48px 40px', background: 'rgba(255,255,255,0.03)', borderTop: '2px solid transparent', transition: 'border-color 0.3s, background 0.3s' }}>
              <div style={{ fontSize: '32px', marginBottom: '24px' }}>{item.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.85, color: 'rgba(255,255,255,0.5)' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .philosophy-item:hover{border-top-color:var(--atl-amber)!important;background:rgba(255,255,255,0.06)!important}
        @media(max-width:900px){.philosophy-grid{grid-template-columns:1fr!important}}
        @media(max-width:768px){.philosophy-item{padding:32px 24px!important}}
      `}</style>
    </section>
  )
}
