
import { Person, ProfessionalService, WithContext } from 'schema-dts'
import { profileConfig } from '@/config/profile.config'
import { siteConfig } from '@/config/site.config'

export function PersonSchema() {
  const schema: WithContext<Person> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profileConfig.name,
    jobTitle: profileConfig.title,
    description: `${profileConfig.title} specializing in home loans and mortgage solutions`,
    url: siteConfig.url,
    image: `${siteConfig.url}${profileConfig.photo}`,
    telephone: profileConfig.contact.phone,
    email: profileConfig.contact.email,
    sameAs: [
      profileConfig.social.facebook,
      profileConfig.social.instagram,
      profileConfig.social.tiktok,
    ].filter(Boolean),
    knowsAbout: [
      'Mortgage Lending',
      'Home Financing',
      'Refinancing',
      'First-Time Homebuyers',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceSchema() {
  const schema: WithContext<ProfessionalService> = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${profileConfig.name} - ${profileConfig.title}`,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: profileConfig.contact.phone,
    email: profileConfig.contact.email,
    priceRange: '$$',
    areaServed: {
      '@type': 'State',
      name: 'New Jersey',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
