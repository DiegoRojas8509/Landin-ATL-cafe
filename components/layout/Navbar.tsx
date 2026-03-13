'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useScrolled } from '@/lib/hooks'
import { NAV_LINKS, SITE } from '@/lib/constants'

export default function Navbar() {
  const scrolled = useScrolled(60)
  const [open, setOpen] = useState(false)

  return (
    <>
      <style>{`
        .nav-link {
          font-family: var(--font-body);
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-link:hover { color: var(--atl-amber); }
        .mobile-link {
          font-family: var(--font-wide);
          font-size: 48px;
          letter-spacing: 0.08em;
          color: var(--atl-cream);
          text-decoration: none;
          transition: color 0.2s;
        }
        .mobile-link:hover { color: var(--atl-amber); }
        .mobile-social {
          font-family: var(--font-wide);
          font-size: 24px;
          color: var(--atl-amber);
          letter-spacing: 0.1em;
          text-decoration: none;
        }
        @media (max-width: 768px) {
          .navbar-links-desktop { display: none !important; }
          .navbar-cta-btn       { display: none !important; }
          .hamburger-btn        { display: flex !important; }
        }
      `}</style>

      {/* ── Main Navbar ── */}
      <nav
        style={{
          position:       'fixed',
          top:            0, left: 0, right: 0,
          height:         'var(--nav-h)',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          padding:        '0 48px',
          zIndex:         100,
          background:     scrolled ? 'rgba(26,14,8,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          boxShadow:      scrolled ? '0 1px 0 rgba(255,255,255,0.06)' : 'none',
          transition:     'background 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ fontFamily: 'var(--font-wide)', fontSize: '28px', letterSpacing: '0.12em', color: '#fff', textDecoration: 'none' }}>
          <img src="/images/logo3.png" alt="ATL Café" style={{ height: '35px', width: 'auto' }}/>
        </Link>

        {/* Desktop links */}
        <ul className="navbar-links-desktop" style={{ display: 'flex', gap: '32px', listStyle: 'none' }}>
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="nav-link">{l.label}</Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={SITE.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-cta-btn btn btn--copper"
          style={{ padding: '10px 22px', fontSize: '13px' }}
        >
          Visítanos
        </Link>

        {/* Hamburger */}
        <button
          className="hamburger-btn"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
          aria-expanded={open}
          style={{
            display:       'none',
            flexDirection: 'column',
            gap:           '5px',
            cursor:        'none',
            background:    'none',
            border:        'none',
            padding:       '4px',
          }}
        >
          {[1, 2, 3].map((i) => (
            <span
              key={i}
              style={{
                display:    'block',
                width:      '24px',
                height:     '2px',
                background: '#fff',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: open
                  ? i === 1 ? 'translateY(7px) rotate(45deg)'
                  : i === 3 ? 'translateY(-7px) rotate(-45deg)'
                  : 'none'
                  : 'none',
                opacity: open && i === 2 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* ── Mobile menu ── */}
      <div
        style={{
          position:       'fixed',
          inset:          0,
          background:     'var(--atl-espresso)',
          zIndex:         99,
          display:        'flex',
          flexDirection:  'column',
          alignItems:     'center',
          justifyContent: 'center',
          gap:            '40px',
          opacity:        open ? 1 : 0,
          pointerEvents:  open ? 'all' : 'none',
          transition:     'opacity 0.35s ease',
        }}
      >
        {NAV_LINKS.map((l) => (
          <Link key={l.href} href={l.href} className="mobile-link" onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="mobile-social">
          Instagram
        </a>
        <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer" className="mobile-social">
          TikTok
        </a>
      </div>
    </>
  )
}
