import SectionLabel from '@/components/shared/SectionLabel'
import { COFFEE_DATA } from '@/lib/constants'

export default function CoffeeOrigin() {
  return (
    <section style={{ padding: '120px 0', background: 'var(--atl-cream)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(181,98,42,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container origin-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
        {/* Image column */}
        <div style={{ position: 'relative' }}>
          {/*
           * IMAGE SLOT — COFFEE ORIGIN
           * File: /public/images/coffee/origen-cafe.jpg
           * Subject: Coffee farm landscape in Chiapas/Oaxaca OR close-up
           *          of green coffee beans being inspected. Warm natural light.
           * Aspect ratio: 3:4 (portrait)
           * When ready: replace the gradient div with <Image fill /> inside this wrapper
           */}
          <div className="reveal" style={{ aspectRatio: '3/4', background: 'linear-gradient(135deg, #6B3A2A 0%, #B5622A 100%)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
              <span style={{ fontFamily: 'var(--font-wide)', fontSize: '11px', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.2)' }}>FOTO</span>
              <span style={{ fontFamily: 'var(--font-wide)', fontSize: '11px', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.2)' }}>ORIGEN CAFÉ</span>
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: 'var(--atl-espresso)', color: 'var(--atl-amber)', padding: '20px 24px', fontFamily: 'var(--font-display)', fontSize: '13px', lineHeight: 1.5, zIndex: 1 }}>
            <strong style={{ display: 'block', fontSize: '28px', fontWeight: 900 }}>{COFFEE_DATA.qScore}</strong>
            Q-Score SCA
          </div>
        </div>

        {/* Content column */}
        <div>
          <SectionLabel className="reveal">Del origen a la taza</SectionLabel>
          <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, lineHeight: 1.05, margin: '16px 0 24px' }}>
            Café que cuenta<br />su historia
          </h2>
          <p className="reveal reveal-delay-2" style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--atl-muted)', marginBottom: '40px' }}>
            Nuestro {COFFEE_DATA.name} es un blend de variedades {COFFEE_DATA.varieties.join(', ')}, proveniente de {COFFEE_DATA.origin}. Procesado en {COFFEE_DATA.process}, a {COFFEE_DATA.altitude}. Tostado y catado en alianza con {COFFEE_DATA.roaster}.
          </p>

          <div className="reveal reveal-delay-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '40px' }}>
            {COFFEE_DATA.stats.map((s) => (
              <div key={s.label} style={{ borderLeft: '2px solid var(--atl-copper)', paddingLeft: '16px' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 900, color: 'var(--atl-copper)', display: 'block' }}>{s.num}</span>
                <span style={{ fontSize: '12px', color: 'var(--atl-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.label}</span>
              </div>
            ))}
          </div>

          <div className="reveal reveal-delay-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {COFFEE_DATA.varieties.map((v) => (
              <span key={v} className="variety-tag">{v}</span>
            ))}
            {COFFEE_DATA.profile.slice(0, 3).map((p) => (
              <span key={p} className="variety-tag">{p}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:1024px){.origin-grid{grid-template-columns:1fr!important;gap:48px!important}}
      `}</style>
    </section>
  )
}
