'use client'

import { useReveal } from '@/lib/hooks'
import PageHero from '@/components/shared/PageHero'
import SectionLabel from '@/components/shared/SectionLabel'
import VoteButton from '@/components/shared/VoteButton'
import { COLAB_POLL, SITE } from '@/lib/constants'
import { useVote } from '@/lib/hooks'

export default function ComunidadPage() {
  useReveal()
  const { voted, selected, handleVote } = useVote()

  return (
    <>
      <PageHero
        eyebrow="Comunidad"
        title="Juntos"
        titleItalic="construimos ATL."
        subtitle="Un espacio creado por y para la comunidad. Café colaborativo, impulso a emprendedores y arte abierto."
        gradient="linear-gradient(135deg, #1A0E08 0%, #2B1A11 50%, #6B3A2A 100%)"
      />

      {/* Café Colaborativo expanded */}
      <section style={{ padding: '100px 0', background: 'var(--atl-dark)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <SectionLabel light className="reveal">{COLAB_POLL.weekLabel}</SectionLabel>
          <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, color: '#fff', margin: '16px 0 24px', lineHeight: 1.05 }}>
            Café Colaborativo
          </h2>
          <p className="reveal reveal-delay-2" style={{ fontSize: '15px', lineHeight: 1.9, color: 'rgba(255,255,255,0.55)', marginBottom: '40px' }}>
            Cada semana, la comunidad ATL toma decisiones. Desde el café que destacamos hasta los talleres que organizamos. Esta es tu plataforma.
          </p>
          <div className="reveal reveal-delay-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', padding: '40px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, color: '#fff', marginBottom: '32px', lineHeight: 1.4 }}>{COLAB_POLL.question}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {COLAB_POLL.options.map((opt) => (
                <VoteButton key={opt.id} label={opt.label} pct={opt.pct} voted={voted} selected={selected === opt.id} onClick={() => handleVote(opt.id)} />
              ))}
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
              {voted ? '¡Gracias! Tu voz da forma a ATL. 🙌' : 'Vota · Resultados visibles al instante'}
            </p>
          </div>
        </div>
      </section>

      {/* Fair trade philosophy */}
      <section style={{ padding: '100px 0', background: 'var(--atl-milk)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <SectionLabel className="reveal">Nuestra filosofía</SectionLabel>
          <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, margin: '16px 0 24px', lineHeight: 1.05 }}>
            Comercio justo<br />en todo lo que hacemos.
          </h2>
          <p className="reveal reveal-delay-2" style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--atl-muted)', marginBottom: '32px' }}>
            En ATL existe esta filosofía por medio de valores como la comunidad, la paga correspondiente, una relación equitativa y sostenible que impulse con principios, dignidad y respeto. Pero este compromiso no se limita al café. Llevamos el comercio justo a cada obra de arte, taller y proceso dentro de nuestras operaciones.
          </p>
          <p className="reveal reveal-delay-3" style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--atl-muted)' }}>
            Valoramos el tiempo, el talento y la creatividad de cada persona que forma parte de nuestra comunidad. Ya sea un cafetalero, un artista o un colaborador, buscamos que todos reciban una retribución justa y que su trabajo tenga un impacto positivo, tanto personal como colectivo.
          </p>
        </div>
      </section>

      {/* Impulso emprendedores */}
      <section style={{ padding: '100px 0', background: 'var(--atl-cream)' }}>
        <div className="container">
          <SectionLabel className="reveal">Impulso a emprendedores</SectionLabel>
          <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, margin: '16px 0 24px', lineHeight: 1.05 }}>
            Tu producto<br />en ATL.
          </h2>
          <p className="reveal reveal-delay-2" style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--atl-muted)', maxWidth: '680px', marginBottom: '40px' }}>
            Por medio del comercio justo, se hace un acuerdo con los proveedores de la región para que sean parte del espacio ofreciendo producto o dejando a consignación, donde se considera que sean cosas de valor y con un trasfondo.
          </p>
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="btn btn--primary reveal reveal-delay-3">
            Hablemos
          </a>
        </div>
      </section>
    </>
  )
}
