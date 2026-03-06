import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, Bebas_Neue } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Cursor from '@/components/layout/Cursor'
import PageTransition from '@/components/layout/PageTransition'
import { SEO_DEFAULTS } from '@/lib/constants'

// ── Google Fonts via next/font (zero layout shift, self-hosted) ──
const playfair = Playfair_Display({
  subsets:  ['latin'],
  weight:   ['400', '700', '900'],
  style:    ['normal', 'italic'],
  variable: '--font-playfair',
  display:  'swap',
})

const dmSans = DM_Sans({
  subsets:  ['latin'],
  weight:   ['300', '400', '500'],
  variable: '--font-dm-sans',
  display:  'swap',
})

const bebas = Bebas_Neue({
  subsets:  ['latin'],
  weight:   ['400'],
  variable: '--font-bebas',
  display:  'swap',
})

// ── Site-wide metadata ──
export const metadata: Metadata = {
  metadataBase: new URL('https://atlcafe.mx'),
  title: {
    default:  SEO_DEFAULTS.defaultTitle,
    template: SEO_DEFAULTS.titleTemplate,
  },
  description: SEO_DEFAULTS.description,
  openGraph: {
    ...SEO_DEFAULTS.openGraph,
  },
  twitter: {
    card:    'summary_large_image',
    creator: SEO_DEFAULTS.twitter.handle,
  },
  robots: {
    index:  true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es-MX"
      className={`${playfair.variable} ${dmSans.variable} ${bebas.variable}`}
    >
      <body>
        {/* Custom cursor — hidden on touch devices via CSS */}
        <Cursor />

        {/* Sticky navigation */}
        <Navbar />

        {/* Page content with transition wrapper */}
        <PageTransition>
          <main>{children}</main>
        </PageTransition>

        {/* Site-wide footer */}
        <Footer />
      </body>
    </html>
  )
}
