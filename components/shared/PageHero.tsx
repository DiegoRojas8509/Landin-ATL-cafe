import SectionLabel from './SectionLabel'

interface PageHeroProps {
  eyebrow:    string
  title:      string
  titleItalic?: string   // italic portion of the title (appended after title)
  subtitle?:  string
  /*
   * IMAGE SLOT
   * heroImage → path to the hero background image for this page
   * e.g. '/images/spaces/cafe-hero.jpg'
   * When adding real images: replace the gradient in the inline style below
   */
  heroImage?: string
  gradient?:  string     // fallback gradient while heroImage is pending
  dark?:      boolean    // text color override
}

export default function PageHero({
  eyebrow,
  title,
  titleItalic,
  subtitle,
  heroImage,
  gradient = 'linear-gradient(135deg, #1A0E08 0%, #3D2011 50%, #6B3A2A 100%)',
}: PageHeroProps) {
  return (
    <section
      style={{
        position:       'relative',
        minHeight:      '60vh',
        display:        'flex',
        alignItems:     'flex-end',
        overflow:       'hidden',
        background:     'var(--atl-espresso)',
        paddingTop:     'var(--nav-h)',
      }}
    >
      {/* Background */}
      <div
        style={{
          position:   'absolute',
          inset:      0,
          
          backgroundImage: heroImage ? `url('${heroImage}')` : gradient,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           
        }}
      />
      {/* Overlay */}
      <div
        style={{
          position:   'absolute',
          inset:      0,
          background: 'linear-gradient(to top, rgba(26,14,8,0.85) 0%, rgba(26,14,8,0.3) 60%, rgba(26,14,8,0.1) 100%)',
          zIndex:     1,
        }}
      />
      {/* Grain */}
      <div className="grain-overlay" />

      {/* Content */}
      <div
        className="container"
        style={{
          position:     'relative',
          zIndex:       2,
          paddingBottom:'80px',
          paddingTop:   '60px',
        }}
      >
        <SectionLabel light>{eyebrow}</SectionLabel>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize:   'clamp(48px, 7vw, 88px)',
            fontWeight: 900,
            lineHeight: 0.95,
            color:      '#fff',
            marginTop:  '16px',
          }}
        >
          {title}
          {titleItalic && (
            <>
              <br />
              <em style={{ color: 'var(--atl-amber)', fontStyle: 'italic' }}>
                {titleItalic}
              </em>
            </>
          )}
        </h1>
        {subtitle && (
          <p
            style={{
              fontSize:   '16px',
              lineHeight: 1.75,
              color:      'rgba(255,255,255,0.65)',
              maxWidth:   '560px',
              marginTop:  '24px',
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
