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
          - {SITE.address}
        </p>
        <div className="reveal reveal-delay-3 visit-btns" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Cómo llegar</a>
          
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-2.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/>
            </svg>

            Instagram
          </a>     
               
          <a
            href={SITE.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21 8.02c-2.05-.02-4.02-.8-5.5-2.28V17.5c0 2.48-2.02 4.5-4.5 4.5S6.5 19.98 6.5 17.5 8.52 13 11 13c.3 0 .6.03.88.08v2.33c-.28-.07-.57-.11-.88-.11-1.38 0-2.5 1.12-2.5 2.5S9.62 20.3 11 20.3s2.5-1.12 2.5-2.5V2h2.24c.39 2.02 2.02 3.64 4.26 3.87v2.15z"/>
            </svg>

            TikTok
          </a>
        </div>
      </div>
      <style>{`@media(max-width:640px){.visit-btns{flex-direction:column;align-items:center!important}}`}</style>
    </section>
  )
}
