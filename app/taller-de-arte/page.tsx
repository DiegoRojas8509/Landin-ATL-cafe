'use client'

import { useReveal } from '@/lib/hooks'
import PageHero from '@/components/shared/PageHero'
import SectionLabel from '@/components/shared/SectionLabel'
import { SPACES, SITE } from '@/lib/constants'

const space = SPACES[1]
const activities = ['Lienzos', 'Mándalas', 'Bolsas', 'Espejos', 'Cerámica', 'Termos', 'Separadores', 'Postales', 'Pirograbado']
const materials  = ['Acuarelas', 'Óleos', 'Acrílicos', 'Colores', 'Plumones', 'Textiles', 'Máquina de pirógrafo']

export default function TallerPage() {
  useReveal()
  return (
    <>
      <PageHero
        eyebrow="Taller de Arte"
        title="Tu obra"
        titleItalic="tu espacio."
        subtitle={space.shortDesc}
        gradient="linear-gradient(135deg, #1A0E08 0%, #2B1A11 50%, #5A3020 100%)"
      />

      <section style={{ padding: '100px 0', background: 'var(--atl-milk)' }}>
        <div className="container">
          <SectionLabel className="reveal">Cómo funciona</SectionLabel>
          <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, margin: '16px 0 24px', lineHeight: 1.05 }}>
            Sin reservación.<br />Solo crea.
          </h2>
          <p className="reveal reveal-delay-2" style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--atl-muted)', maxWidth: '680px', marginBottom: '60px' }}>
            {space.longDesc}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px' }} className="taller-features">
            {space.highlights.map((h, i) => (
              <div key={h} className={`reveal reveal-delay-${i % 3}`} style={{ padding: '40px', background: 'var(--atl-dark)', borderTop: '2px solid var(--atl-copper)' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, color: '#fff' }}>{h}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:640px){.taller-features{grid-template-columns:1fr!important}}`}</style>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--atl-cream)' }}>
        <div className="container">
          <SectionLabel className="reveal">Actividades disponibles</SectionLabel>
          <div className="reveal reveal-delay-1" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '32px' }}>
            {activities.map((a) => <span key={a} className="variety-tag">{a}</span>)}
          </div>

          <div style={{ marginTop: '60px' }}>
            <SectionLabel className="reveal">Materiales incluidos</SectionLabel>
            <div className="reveal reveal-delay-1" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '32px' }}>
              {materials.map((m) => <span key={m} style={{ background: 'var(--atl-espresso)', color: 'var(--atl-amber)', fontFamily: 'var(--font-wide)', fontSize: '13px', letterSpacing: '0.2em', padding: '10px 20px' }}>{m}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', background: 'var(--atl-espresso)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, color: '#fff', marginBottom: '16px', lineHeight: 1.1 }}>
            El taller te espera
          </h2>
          <p className="reveal reveal-delay-1" style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '40px' }}>Abierto todos los días · Sin reservación previa</p>
          <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--copper reveal reveal-delay-2">
            Visítanos
          </a>
        </div>
      </section>
    </>
  )
}
