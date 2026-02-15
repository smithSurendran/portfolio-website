// src/app/[region]/page.tsx
import { notFound } from 'next/navigation'
import { getRegionByCode } from '@/config/regions.config'
import { Metadata } from 'next'
import Hero from '@/components/home/Hero'

interface RegionPageProps {
  params: {
    region: string
  }
}

export async function generateMetadata({
  params,
}: RegionPageProps): Promise<Metadata> {
  const region = getRegionByCode(params.region)

  if (!region) {
    return {}
  }

  return {
    title: `Mortgage Services in ${region.name}`,
    description: `Expert mortgage lending services for ${region.cities.join(', ')}, and surrounding areas in ${region.name}.`,
    openGraph: {
      title: `Mortgage Services in ${region.name}`,
      description: `Expert mortgage lending for ${region.name} homebuyers`,
    },
  }
}

export async function generateStaticParams() {
  return [{ region: 'nj' }, { region: 'ny' }, { region: 'pa' }]
}

export default function RegionPage({ params }: RegionPageProps) {
  const region = getRegionByCode(params.region)

  if (!region) {
    notFound()
  }

  return (
    <div>
      <Hero regionOverride={region} />
      
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Serving {region.name}
          </h2>
          
          <div className="prose prose-lg">
            <p>
              As a licensed mortgage loan officer in {region.name}, I&apos;m proud to
              serve homebuyers in {region.cities.join(', ')}, and throughout the
              state. Whether you&apos;re a first-time buyer or refinancing your
              existing mortgage, I provide personalized guidance and competitive
              rates.
            </p>

            <h3>Cities We Serve in {region.name}:</h3>
            <ul>
              {region.cities.map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>

          {region.disclaimer && (
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-900">{region.disclaimer}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
