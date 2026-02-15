// src/app/api/geo/route.ts
import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

// Simple state mapping based on IP prefix
// In production, use a service like ip-api.com, ipapi.co, or MaxMind
const STATE_PREFIXES: Record<string, string> = {
  '24.': 'nj', // Example Comcast NJ
  '108.': 'ny', // Example Optimum NY
  // Add more mappings or use a proper IP geolocation service
}

export async function GET() {
  const headersList = await headers()
  const forwarded = headersList.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0] : headersList.get('x-real-ip')

  if (!ip) {
    return NextResponse.json({ regionCode: null })
  }

  // Try simple prefix matching
  const prefix = ip.split('.').slice(0, 2).join('.') + '.'
  const regionCode = STATE_PREFIXES[prefix]

  if (regionCode) {
    return NextResponse.json({ regionCode, ip })
  }

  // In production, call external IP geolocation API
  try {
    const geoResponse = await fetch(`https://ipapi.co/${ip}/json/`)
    const geoData = await geoResponse.json()

    // Map state/region to your region codes
    const stateMap: Record<string, string> = {
      'New Jersey': 'nj',
      'New York': 'ny',
      Pennsylvania: 'pa',
    }

    const detectedRegion = stateMap[geoData.region]

    return NextResponse.json({
      regionCode: detectedRegion || null,
      state: geoData.region,
      city: geoData.city,
    })
  } catch (error) {
    console.error('IP geolocation failed:', error)
    return NextResponse.json({ regionCode: null })
  }
}
