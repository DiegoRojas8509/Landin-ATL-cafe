'use client'

import { useReveal } from '@/lib/hooks'
import PageHero from '@/components/shared/PageHero'
import SectionLabel from '@/components/shared/SectionLabel'
import { SPACES, COFFEE_DATA, SITE } from '@/lib/constants'

const space = SPACES[0]

export default function CafePage() {
  useReveal()
  return (
    <>
      <PageHero
        eyebrow="Café de Especialidad"
        title="Del campo"
        titleItalic="a tu taza."
        subtitle={space.shortDesc}
        gradient="linear-gradient(135deg, #1A0E08 0%, #4A2010 50%, #8B4020 100%)"
      />

      {/* Origin story */}
      <section style={{ padding: '100px 0', background: 'var(--atl-milk)' }}>
        <div className="container cafe-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <SectionLabel className="reveal">Nuestro café</SectionLabel>
            <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, lineHeight: 1.05, margin: '16px 0 24px' }}>
              {COFFEE_DATA.name} — {COFFEE_DATA.varieties.join(', ')}
            </h2>
            <p className="reveal reveal-delay-2" style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--atl-muted)', marginBottom: '32px' }}>
              {space.longDesc}
            </p>
            <div className="reveal reveal-delay-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {space.highlights.map((h) => <span key={h} className="variety-tag">{h}</span>)}
            </div>
          </div>

          {/*
           * IMAGE SLOT — CAFÉ PAGE
           * File: /public/images/spaces/cafe-espacio.jpg
           * Subject: ATL Café bar in action, barista preparing coffee
           */}
          <div className="reveal reveal-delay-1" style={{ aspectRatio: '4/5', background: 'linear-gradient(160deg, #3D2011 0%, #B5622A 100%)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'var(--font-wide)', fontSize: '11px', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.2)' }}>FOTO CAFÉ</span>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.cafe-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* Stats */}
      <section style={{ padding: '80px 0', background: 'var(--atl-dark)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }} className="stats-grid">
          {COFFEE_DATA.stats.map((s, i) => (
            <div key={s.label} className={`reveal reveal-delay-${i}`} style={{ padding: '48px 40px', background: 'rgba(255,255,255,0.03)', textAlign: 'center' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '56px', fontWeight: 900, color: 'var(--atl-amber)', display: 'block' }}>{s.num}</span>
              <span style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>{s.label}</span>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:640px){.stats-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* Tasting notes */}
      <section style={{ padding: '100px 0', background: 'var(--atl-cream)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <SectionLabel className="reveal">Perfil sensorial</SectionLabel>
          <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 900, lineHeight: 1.1, margin: '16px 0 40px' }}>
            Notas de cata — Q-Score {COFFEE_DATA.qScore}
          </h2>
          <div className="reveal reveal-delay-2" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {COFFEE_DATA.profile.map((note) => (
              <span key={note} style={{ background: 'var(--atl-espresso)', color: 'var(--atl-amber)', fontFamily: 'var(--font-wide)', fontSize: '13px', letterSpacing: '0.2em', padding: '10px 20px' }}>
                {note}
              </span>
            ))}
          </div>
          <p className="reveal reveal-delay-3" style={{ fontSize: '14px', lineHeight: 1.85, color: 'var(--atl-muted)', marginTop: '40px' }}>
            Catado bajo el protocolo CVA de la SCA por Josué Gerardo Zozoaga Ramos (Q Grader | SCA-555904) el 27/01/2026. Roaster: {COFFEE_DATA.roaster}. Nivel de tueste: {COFFEE_DATA.roastLevel}.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 0', background: 'var(--atl-copper)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, color: '#fff', marginBottom: '32px', lineHeight: 1.1 }}>
            Pruébalo en ATL
          </h2>
          <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary reveal reveal-delay-1">
            Visítanos · {SITE.address}
          </a>
        </div>
      </section>
    </>
  )
}
