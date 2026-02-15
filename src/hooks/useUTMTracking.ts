// src/hooks/useUTMTracking.ts
'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export function useUTMTracking() {
  const searchParams = useSearchParams()

  useEffect(() => {
    // Store UTM parameters in sessionStorage
    const utmParams = {
      utm_source: searchParams.get('utm_source'),
      utm_medium: searchParams.get('utm_medium'),
      utm_campaign: searchParams.get('utm_campaign'),
      utm_term: searchParams.get('utm_term'),
      utm_content: searchParams.get('utm_content'),
    }

    // Filter out null values
    const validUTMParams = Object.fromEntries(
      Object.entries(utmParams).filter(([, value]) => value !== null)
    )

    if (Object.keys(validUTMParams).length > 0) {
      sessionStorage.setItem('utm_params', JSON.stringify(validUTMParams))

      // Track UTM arrival
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'utm_arrival', {
          event_category: 'marketing',
          ...validUTMParams,
        })
      }
    }
  }, [searchParams])
}

// Get stored UTM parameters for form submissions
export function getStoredUTMParams(): Record<string, string> {
  if (typeof window === 'undefined') return {}

  const stored = sessionStorage.getItem('utm_params')
  return stored ? JSON.parse(stored) : {}
}
