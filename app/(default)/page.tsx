export const metadata = {
  title: 'Home',
  description: 'Proyecto CABA 2027',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

<link rel="shortcut icon" type="image/x-icon" href="./favicon.ico"></link>

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
{/*       <Zigzag />
      <Testimonials />
      <Newsletter /> */}
    </>
  )
}
