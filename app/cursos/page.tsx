'use client'

import { useReveal } from '@/lib/hooks'
import PageHero from '@/components/shared/PageHero'
import SectionLabel from '@/components/shared/SectionLabel'
import { SPACES, SITE } from '@/lib/constants'

const space = SPACES[3]
const types = ['Joyería', 'Cerámica', 'Escultura', 'Serigrafía', 'Pintura', 'Arte digital', 'Textiles', 'Pirograbado']

export default function CursosPage() {
  useReveal()
  return (
    <>
      <PageHero
        eyebrow="Cursos y Talleres"
        title="Crea."
        titleItalic="Comparte. Crece."
        subtitle={space.shortDesc}
        gradient="linear-gradient(135deg, #1A0E08 0%, #241308 50%, #5D3018 100%)"
      />

      <section style={{ padding: '100px 0', background: 'var(--atl-milk)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <SectionLabel className="reveal">El espacio es tuyo</SectionLabel>
          <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, margin: '16px 0 24px', lineHeight: 1.05 }}>
            ATL apoya a<br />los talleristas.
          </h2>
          <p className="reveal reveal-delay-2" style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--atl-muted)', marginBottom: '48px' }}>
            {space.longDesc}
          </p>
          <div className="reveal reveal-delay-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {space.highlights.map((h) => <span key={h} className="variety-tag">{h}</span>)}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--atl-dark)' }}>
        <div className="container">
          <SectionLabel light className="reveal">Cómo reservar el espacio</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', marginTop: '40px' }} className="cursos-steps">
            {[
              { num: '01', title: 'Elige tu fecha', text: 'Selecciona la fecha que más te convenga. El espacio se asigna según disponibilidad.' },
              { num: '02', title: 'Dinámica de consumo', text: 'El acceso al espacio se gestiona a través de una dinámica de consumo dentro de ATL.' },
              { num: '03', title: 'Imparte tu taller', text: 'Trae a tu grupo, usa el espacio y conecta con la comunidad creativa de ATL.' },
            ].map((s, i) => (
              <div key={s.num} className={`reveal reveal-delay-${i}`} style={{ padding: '48px 40px', background: 'rgba(255,255,255,0.03)', borderTop: '2px solid var(--atl-amber)' }}>
                <div style={{ fontFamily: 'var(--font-wide)', fontSize: '48px', color: 'rgba(212,135,74,0.2)', lineHeight: 1, marginBottom: '16px' }}>{s.num}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>{s.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'rgba(255,255,255,0.5)' }}>{s.text}</p>
              </div>
            ))}
          </div>
          <style>{`@media(max-width:768px){.cursos-steps{grid-template-columns:1fr!important}}`}</style>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--atl-cream)' }}>
        <div className="container">
          <SectionLabel className="reveal">Tipos de talleres</SectionLabel>
          <div className="reveal reveal-delay-1" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '32px' }}>
            {types.map((t) => <span key={t} className="variety-tag">{t}</span>)}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', background: 'var(--atl-copper)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, color: '#fff', marginBottom: '32px', lineHeight: 1.1 }}>
            ¿Quieres impartir<br />tu taller en ATL?
          </h2>
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="btn btn--primary reveal reveal-delay-1">
            Escríbenos
          </a>
        </div>
      </section>
    </>
  )
}
