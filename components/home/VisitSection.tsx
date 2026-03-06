import { SITE } from '@/lib/constants'

export default function VisitSection() {
  return (
    <section style={{ padding: '140px 0', background: 'var(--atl-milk)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      {/*
       * IMAGE SLOT — VISIT SECTION BACKGROUND
       * File: /public/images/hero/visit-bg.jpg
       * Subject: ATL Café exterior or entrance, street-level, daytime
       * When adding: apply as ::before pseudo-element background with opacity 0.06
       */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(181,98,42,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <span className="eyebrow reveal">Encuéntranos</span>
        <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 900, lineHeight: 0.95, margin: '20px 0 32px' }}>
          Ven a<br /><em style={{ color: 'var(--atl-copper)', fontStyle: 'italic' }}>vivirlo.</em>
        </h2>
        <p className="reveal reveal-delay-2" style={{ fontSize: '16px', color: 'var(--atl-muted)', letterSpacing: '0.06em', marginBottom: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          📍 {SITE.address}
        </p>
        <div className="reveal reveal-delay-3 visit-btns" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Cómo llegar</a>
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="btn btn--outline">{SITE.instagramHandle}</a>
          <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer" className="btn btn--outline">{SITE.tiktokHandle}</a>
        </div>
      </div>
      <style>{`@media(max-width:640px){.visit-btns{flex-direction:column;align-items:center!important}}`}</style>
    </section>
  )
}
