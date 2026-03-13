'use client'

import SectionLabel from '@/components/shared/SectionLabel'

export default function CafeColaborativo() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'var(--atl-dark)',
        backgroundImage: "url('/images/colaborativo.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay oscuro para legibilidad */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(10,8,6,0.88) 0%, rgba(10,8,6,0.72) 45%, rgba(10,8,6,0.38) 100%)',
          zIndex: 1,
        }}
      />

      {/* Glow decorativo */}
      <div
        style={{
          position: 'absolute',
          top: '-120px',
          right: '-100px',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(181,98,42,0.28) 0%, rgba(181,98,42,0.08) 35%, transparent 72%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div
        className="container cafe-colab-grid"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '56px',
          alignItems: 'center',
          width: '100%',
          paddingTop: '96px',
          paddingBottom: '96px',
        }}
      >
        {/* Bloque de texto */}
        <div style={{ maxWidth: '720px' }}>
          <SectionLabel light className="reveal">
            Dinámica semanal · Café Colaborativo
          </SectionLabel>

          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(42px, 7vw, 88px)',
              fontWeight: 900,
              lineHeight: 0.95,
              color: '#fff',
              margin: '18px 0 24px',
              letterSpacing: '-0.03em',
            }}
          >
            Un café hecho
            <br />
            por la comunidad,
            <br />
            para la comunidad.
          </h2>

          <p
            className="reveal reveal-delay-2"
            style={{
              fontSize: '16px',
              lineHeight: 1.9,
              color: 'rgba(255,255,255,0.78)',
              maxWidth: '620px',
              marginBottom: '18px',
            }}
          >
            Cada semana abrimos una sola pregunta a nuestra comunidad. A través de sus respuestas,
            reunimos ideas, preferencias y visión colectiva para construir un{' '}
            <span style={{ color: 'var(--atl-amber)', fontWeight: 700 }}>
              Café Colaborativo
            </span>{' '}
            que nazca verdaderamente de quienes forman parte de ATL.
          </p>

          <p
            className="reveal reveal-delay-3"
            style={{
              fontSize: '16px',
              lineHeight: 1.9,
              color: 'rgba(255,255,255,0.62)',
              maxWidth: '620px',
              marginBottom: '34px',
            }}
          >
            No se trata solo de responder un formulario. Se trata de participar en una dinámica semanal
            donde la comunidad propone, inspira y ayuda a dar forma a una experiencia compartida: un café
            creado con la voz de todos.
          </p>

          <div
            className="reveal reveal-delay-3"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              alignItems: 'center',
            }}
          >
            <a
              href="AQUI_VA_TU_LINK_DE_TALLY"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--copper"
              style={{
                padding: '16px 28px',
                fontSize: '14px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Participar esta semana
            </a>

            <span
              style={{
                fontSize: '13px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.48)',
              }}
            >
              Una pregunta · una comunidad · un café colectivo
            </span>
          </div>
        </div>

        {/* Bloque visual: aquí puedes poner imagen destacada */}
        
      </div>

      <style>{`
        @media (max-width: 980px) {
          .cafe-colab-grid {
            grid-template-columns: 1fr !important;
            gap: 42px !important;
          }

          .cafe-colab-visual {
            min-height: 420px !important;
          }
        }

        @media (max-width: 768px) {
          .cafe-colab-grid {
            padding-top: 72px !important;
            padding-bottom: 72px !important;
            padding-left: 24px !important;
            padding-right: 24px !important;
          }

          .cafe-colab-visual {
            min-height: 340px !important;
          }
        }
      `}</style>
    </section>
  )
}