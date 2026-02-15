// src/config/regions.config.ts
export interface Region {
  code: string
  name: string
  displayName: string
  cities: string[]
  ctaText: string
  disclaimer?: string
}

export const regions: Region[] = [
  {
    code: 'nj',
    name: 'New Jersey',
    displayName: 'Serving New Jersey',
    cities: ['Newark', 'Jersey City', 'Paterson', 'Elizabeth'],
    ctaText: 'Get Pre-Approved in NJ',
    disclaimer: 'Licensed to originate loans in New Jersey (NMLS #123456)',
  },
  {
    code: 'ny',
    name: 'New York',
    displayName: 'Serving New York Metro',
    cities: ['New York City', 'Brooklyn', 'Queens', 'Bronx'],
    ctaText: 'Start Your NY Application',
    disclaimer: 'Licensed to originate loans in New York (NMLS #123456)',
  },
  {
    code: 'pa',
    name: 'Pennsylvania',
    displayName: 'Serving Pennsylvania',
    cities: ['Philadelphia', 'Pittsburgh', 'Allentown'],
    ctaText: 'Apply for PA Mortgage',
  },
]

export function getRegionByCode(code: string): Region | undefined {
  return regions.find((r) => r.code === code)
}