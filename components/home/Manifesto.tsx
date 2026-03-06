import SectionLabel from '@/components/shared/SectionLabel'
import { MANIFESTO_PILLARS } from '@/lib/constants'

export default function Manifesto() {
  return (
    <section style={{ padding: '120px 0', background: 'var(--atl-milk)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <SectionLabel className="reveal">Nuestra filosofía</SectionLabel>
        <p className="reveal reveal-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 400, lineHeight: 1.35, color: 'var(--atl-text)', marginTop: '24px' }}>
          ATL es un <span style={{ color: 'var(--atl-copper)', fontStyle: 'italic' }}>ecosistema de experiencias</span> donde el café de especialidad, el arte y la comunidad convergen en un mismo espacio. No somos una cafetería ordinaria. Somos un punto de encuentro para <span style={{ color: 'var(--atl-copper)', fontStyle: 'italic' }}>creadores, artistas y cafetaleros</span> que creen en el valor de hacer las cosas con propósito.
        </p>

        <div className="manifesto-pillars" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', marginTop: '80px', borderTop: '1px solid rgba(26,14,8,0.12)', paddingTop: '60px' }}>
          {MANIFESTO_PILLARS.map((p, i) => (
            <div key={p.num} className={`reveal reveal-delay-${i}`}>
              <div style={{ fontFamily: 'var(--font-wide)', fontSize: '64px', color: 'rgba(181,98,42,0.15)', lineHeight: 1, marginBottom: '16px' }}>{p.num}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>{p.title}</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'var(--atl-muted)' }}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.manifesto-pillars{grid-template-columns:1fr!important;gap:32px!important}}`}</style>
    </section>
  )
}
