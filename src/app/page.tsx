import Hero from '@/components/home/Hero'
import IdentityCard from '@/components/home/IdentityCard'
import QRBlock from '@/components/home/QRBlock'
// import ServicesPreview from '@/components/home/ServicesPreview'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | Your Trusted Mortgage Partner',
  description: 'Expert mortgage guidance and personalized financing solutions. Get pre-approved today.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <IdentityCard />
            <QRBlock />
          </div>
        </div>
      </section>

      {/* <ServicesPreview /> */}
      
      {/* Add more sections as needed */}
    </>
  )
}
