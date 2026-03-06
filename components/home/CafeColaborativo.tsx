'use client'

import VoteButton from '@/components/shared/VoteButton'
import SectionLabel from '@/components/shared/SectionLabel'
import { COLAB_POLL } from '@/lib/constants'
import { useVote } from '@/lib/hooks'

export default function CafeColaborativo() {
  const { voted, selected, handleVote } = useVote()

  return (
    <section style={{ background: 'var(--atl-dark)', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(181,98,42,0.3) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container colab-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
        <div>
          <SectionLabel light className="reveal">{COLAB_POLL.weekLabel}</SectionLabel>
          <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 900, lineHeight: 1.05, color: '#fff', margin: '16px 0 20px' }}>
            Café<br />Colaborativo
          </h2>
          <p className="reveal reveal-delay-2" style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(255,255,255,0.55)' }}>
            Cada semana, la comunidad ATL decide. Tu voz da forma al café que servimos, a los talleres que organizamos y a la experiencia que construimos juntos.
          </p>
        </div>

        <div className="reveal reveal-delay-1" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', padding: '40px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--atl-amber)', marginBottom: '8px' }}>Esta semana preguntamos:</p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, color: '#fff', marginBottom: '32px', lineHeight: 1.4 }}>{COLAB_POLL.question}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            {COLAB_POLL.options.map((opt) => (
              <VoteButton key={opt.id} label={opt.label} pct={opt.pct} voted={voted} selected={selected === opt.id} onClick={() => handleVote(opt.id)} />
            ))}
          </div>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>
            {voted ? '¡Gracias! Tu voz da forma a ATL. 🙌' : 'Vota · Resultados visibles al instante'}
          </p>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){.colab-grid{grid-template-columns:1fr!important;gap:48px!important}}
        @media(max-width:768px){.colab-grid{padding-left:24px!important;padding-right:24px!important}}
      `}</style>
    </section>
  )
}
