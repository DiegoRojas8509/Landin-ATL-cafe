import Link from 'next/link'
import { SITE, SPACES } from '@/lib/constants'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--atl-espresso)', padding: '64px 64px 40px', color: 'rgba(255,255,255,0.5)' }}>
      <style>{`
        .footer-social-link {
          display: flex; align-items: center; justify-content: center;
          width: 40px; height: 40px;
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.6);
          font-family: var(--font-wide);
          letter-spacing: 0.05em; font-size: 13px;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
        }
        .footer-social-link:hover { border-color: var(--atl-amber); color: var(--atl-amber); }
        .footer-link { font-size: 14px; color: rgba(255,255,255,0.5); text-decoration: none; transition: color 0.2s; }
        .footer-link:hover { color: #fff; }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 60px; margin-bottom: 60px; }
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px)  { .footer-grid { grid-template-columns: 1fr !important; } .footer-bottom { flex-direction: column; gap: 12px; text-align: center; } }
        @media (max-width: 768px)  { footer { padding-left: 24px !important; padding-right: 24px !important; } }
      `}</style>

      <div className="footer-grid">
        {/* Brand */}
        <div>
          <Link href="/" style={{ fontFamily: 'var(--font-wide)', fontSize: '32px', letterSpacing: '0.12em', color: '#fff', display: 'block', marginBottom: '16px', textDecoration: 'none' }}>
                      <img src="/images/logo3.png" alt="ATL Café" style={{ height: '35px', width: 'auto' }}/>

          </Link>
          <p style={{ fontSize: '13px', lineHeight: 1.8, color: 'rgba(255,255,255,0.4)', maxWidth: '280px', marginBottom: '28px' }}>
            {SITE.description}
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="footer-social-link">IG</a>
            <a href={SITE.tiktok}    target="_blank" rel="noopener noreferrer" className="footer-social-link">TK</a>
          </div>
        </div>

        {/* Espacios */}
        <FooterCol title="Espacios">
          {SPACES.map((s) => <li key={s.id}><Link href={s.href} className="footer-link">{s.name}</Link></li>)}
        </FooterCol>

        {/* Comunidad */}
        <FooterCol title="Comunidad">
          <li><Link href="/comunidad" className="footer-link">Café Colaborativo</Link></li>
          <li><Link href="/cursos"    className="footer-link">Impulso Emprendedores</Link></li>
          <li><Link href="/galeria"   className="footer-link">Expón tu Arte</Link></li>
        </FooterCol>

        {/* Visítanos */}
        <FooterCol title="Visítanos">
          <li><a href={SITE.mapsUrl}    target="_blank" rel="noopener noreferrer" className="footer-link">{SITE.address}</a></li>
          <li><a href={SITE.instagram}  target="_blank" rel="noopener noreferrer" className="footer-link">{SITE.instagramHandle}</a></li>
          <li><a href={SITE.tiktok}     target="_blank" rel="noopener noreferrer" className="footer-link">{SITE.tiktokHandle}</a></li>
        </FooterCol>
      </div>

      <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>© {new Date().getFullYear()} ATL Café · León, Guanajuato.</p>
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', display: 'flex', gap: '6px', alignItems: 'center' }}>
          Café de especialidad · <span style={{ color: 'var(--atl-amber)' }}>Comercio Justo</span> · Arte Abierto
        </p>
      </div>
    </footer>
  )
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p style={{ fontFamily: 'var(--font-wide)', fontSize: '12px', letterSpacing: '0.3em', color: 'var(--atl-amber)', marginBottom: '20px' }}>{title}</p>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>{children}</ul>
    </div>
  )
}
