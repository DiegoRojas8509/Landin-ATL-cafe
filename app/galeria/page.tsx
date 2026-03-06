'use client'

import { useReveal } from '@/lib/hooks'
import PageHero from '@/components/shared/PageHero'
import SectionLabel from '@/components/shared/SectionLabel'
import { SPACES, SITE } from '@/lib/constants'

const space = SPACES[2]
const disciplines = ['Pintura', 'Arte digital', 'Escultura', 'Fotografía', 'Instalación', 'Danza', 'Música', 'Arte textil']

export default function GaleriaPage() {
  useReveal()
  return (
    <>
      <PageHero
        eyebrow="Galería Abierta"
        title="Tu arte,"
        titleItalic="nuestro espacio."
        subtitle={space.shortDesc}
        gradient="linear-gradient(135deg, #1A0E08 0%, #1A1008 50%, #4A2A18 100%)"
      />

      <section style={{ padding: '100px 0', background: 'var(--atl-milk)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <SectionLabel className="reveal">La galería ATL</SectionLabel>
          <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, margin: '16px 0 24px', lineHeight: 1.05 }}>
            Para todo artista,<br />sin excepción.
          </h2>
          <p className="reveal reveal-delay-2" style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--atl-muted)' }}>
            {space.longDesc}
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--atl-dark)' }}>
        <div className="container">
          <SectionLabel light className="reveal">Cómo participar</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', marginTop: '40px' }} className="galeria-steps">
            {[
              { num: '01', title: 'Propón tu obra', text: 'Comparte tu portafolio con el equipo ATL. Aceptamos cualquier disciplina artística.' },
              { num: '02', title: 'Inauguración oficial', text: 'Organizamos una inauguración oficial para presentar tu trabajo a la comunidad.' },
              { num: '03', title: '2 meses de exposición', text: 'Tu obra permanece exhibida durante 2 meses completos en el espacio de ATL.' },
            ].map((s, i) => (
              <div key={s.num} className={`reveal reveal-delay-${i}`} style={{ padding: '48px 40px', background: 'rgba(255,255,255,0.03)', borderTop: '2px solid var(--atl-amber)' }}>
                <div style={{ fontFamily: 'var(--font-wide)', fontSize: '48px', color: 'rgba(212,135,74,0.2)', lineHeight: 1, marginBottom: '16px' }}>{s.num}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>{s.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'rgba(255,255,255,0.5)' }}>{s.text}</p>
              </div>
            ))}
          </div>
          <style>{`@media(max-width:768px){.galeria-steps{grid-template-columns:1fr!important}}`}</style>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--atl-cream)' }}>
        <div className="container">
          <SectionLabel className="reveal">Disciplinas bienvenidas</SectionLabel>
          <div className="reveal reveal-delay-1" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '32px' }}>
            {disciplines.map((d) => <span key={d} className="variety-tag">{d}</span>)}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', background: 'var(--atl-espresso)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, color: '#fff', marginBottom: '32px', lineHeight: 1.1 }}>
            ¿Listo para exponer?
          </h2>
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="btn btn--copper reveal reveal-delay-1">
            Contáctanos por Instagram
          </a>
        </div>
      </section>
    </>
  )
}
