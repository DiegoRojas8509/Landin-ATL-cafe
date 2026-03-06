import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--atl-espresso)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px' }}>
      <div>
        <p style={{ fontFamily: 'var(--font-wide)', fontSize: '160px', color: 'rgba(181,98,42,0.15)', lineHeight: 1 }}>404</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, color: '#fff', marginBottom: '16px', lineHeight: 1.1 }}>
          Esta página no existe,<br />pero el café sí.
        </h1>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '40px' }}>Vuelve al inicio o visítanos en Panorame 907, León.</p>
        <Link href="/" className="btn btn--copper">Volver al inicio</Link>
      </div>
    </div>
  )
}
