export default function FairTradeStrip() {
  return (
    <section style={{ padding: '80px 0', background: 'var(--atl-copper)', overflow: 'hidden', position: 'relative' }}>
      <div className="container fairtrade-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px' }}>
        <p className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, color: '#fff', lineHeight: 1.2, maxWidth: '600px' }}>
          "Valoramos el tiempo, el talento y la creatividad de{' '}
          <em style={{ fontStyle: 'italic', opacity: 0.8 }}>cada persona que forma parte de nuestra comunidad.</em>"
        </p>
        <button className="reveal btn btn--primary" style={{ flexShrink: 0 }}>
          Nuestra filosofía
        </button>
      </div>
      <style>{`@media(max-width:768px){.fairtrade-inner{flex-direction:column;align-items:flex-start!important}}`}</style>
    </section>
  )
}
