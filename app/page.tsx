'use client'

import { useReveal } from '@/lib/hooks'
import Hero             from '@/components/home/Hero'
import CafeColaborativo from '@/components/home/CafeColaborativo'
import Manifesto        from '@/components/home/Manifesto'
import SpacesGrid       from '@/components/home/SpacesGrid'
import CoffeeOrigin     from '@/components/home/CoffeeOrigin'
import Philosophy       from '@/components/home/Philosophy'
import FairTradeStrip   from '@/components/home/FairTradeStrip'
import VisitSection     from '@/components/home/VisitSection'

export default function HomePage() {
  useReveal()
  return (
    <>
      <Hero />
      <CafeColaborativo />
      <Manifesto />
      <SpacesGrid />
      <CoffeeOrigin />
      <Philosophy />
      <FairTradeStrip />
      <VisitSection />
    </>
  )
}
