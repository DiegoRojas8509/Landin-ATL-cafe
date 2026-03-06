import { SITE } from '@/lib/constants'

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative', height: '100vh', minHeight: '600px',
        display: 'flex', alignItems: 'flex-end',
        overflow: 'hidden', background: 'var(--atl-espresso)',
      }}
    >
      {/*
       * IMAGE SLOT — HERO BACKGROUND
       * File: /public/images/hero/hero-main.jpg
       * Subject: Full-bleed atmospheric photo of ATL Café interior OR dramatic coffee pour
       * Min resolution: 1920×1080px | Format: landscape
       * When ready: replace the gradient div below with a Next.js <Image fill priority />
       */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, #1A0E08 0%, #3D2011 40%, #6B3A2A 70%, #B5622A 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to top, rgba(26,14,8,0.9) 0%, rgba(26,14,8,0.3) 50%, rgba(26,14,8,0.1) 100%)',
      }} />
      <div className="grain-overlay" />

      <div className="container" style={{ position: 'relative', zIndex: 2, paddingBottom: '80px', paddingTop: 'var(--nav-h)', maxWidth: '900px' }}>
        <p style={{ fontFamily: 'var(--font-wide)', fontSize: '13px', letterSpacing: '0.35em', color: 'var(--atl-amber)', marginBottom: '24px', opacity: 0, transform: 'translateY(20px)', animation: 'fadeUp 0.8s 0.3s ease forwards' }}>
          León, Guanajuato · Panorame 907
        </p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 900, lineHeight: 0.95, color: '#fff', marginBottom: '32px' }}>
          <span style={{ display: 'block', opacity: 0, transform: 'translateY(40px)', animation: 'fadeUp 0.9s 0.5s ease forwards' }}>Más que</span>
          <span style={{ display: 'block', fontStyle: 'italic', color: 'var(--atl-amber)', opacity: 0, transform: 'translateY(40px)', animation: 'fadeUp 0.9s 0.7s ease forwards' }}>café.</span>
          <span style={{ display: 'block', opacity: 0, transform: 'translateY(40px)', animation: 'fadeUp 0.9s 0.9s ease forwards' }}>Un espacio para crear.</span>
        </h1>
        <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'rgba(255,255,255,0.65)', maxWidth: '480px', opacity: 0, transform: 'translateY(20px)', animation: 'fadeUp 0.8s 1.1s ease forwards' }}>
          Especialidad, arte y comunidad en un solo lugar. Café orgánico de Chiapas y Oaxaca, talleres de arte, galería abierta y espacios para que los creadores crezcan.
        </p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '36px', flexWrap: 'wrap', opacity: 0, animation: 'fadeUp 0.8s 1.3s ease forwards' }}>
          {['Comercio Justo', 'Café de Especialidad', 'Arte Abierto'].map((badge) => (
            <span key={badge} style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '6px 14px', fontFamily: 'var(--font-body)' }}>
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-scroll-indicator" style={{ position: 'absolute', bottom: '40px', right: '64px', zIndex: 2, display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.4)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0, animation: 'fadeIn 1s 1.5s ease forwards', fontFamily: 'var(--font-body)' }}>
        <span style={{ width: '40px', height: '1px', background: 'var(--atl-amber)', display: 'block', animation: 'scrollPulse 2s 1.5s ease-in-out infinite' }} />
        Scroll
      </div>
      <style>{`@media(max-width:768px){.hero-scroll-indicator{display:none}}`}</style>
    </section>
  )
}
