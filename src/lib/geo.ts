// src/lib/geo.ts
'use client'

import { useEffect, useState } from 'react'
import { getRegionByCode, regions, Region } from '@/config/regions.config'

interface GeoData {
  region: Region | null
  isLoading: boolean
  error: string | null
}

export function useGeoDetection(): GeoData {
  const [geoData, setGeoData] = useState<GeoData>({
    region: null,
    isLoading: true,
    error: null,
  })

  useEffect(() => {
    async function detectRegion() {
      try {
        // First, try to get from API route (server-side IP detection)
        const response = await fetch('/api/geo')
        const data = await response.json()

        if (data.regionCode) {
          const region = getRegionByCode(data.regionCode)
          setGeoData({ region: region || null, isLoading: false, error: null })
          return
        }

        // Fallback: Browser Geolocation API (requires user permission)
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(
            () => {
              // Reverse geocode to get state
              // In production, use a geocoding service
              // For now, use default region
              setGeoData({
                region: regions[0],
                isLoading: false,
                error: null,
              })
            },
            (error) => {
              console.warn('Geolocation error:', error)
              setGeoData({ region: null, isLoading: false, error: error.message })
            }
          )
        } else {
          setGeoData({
            region: null,
            isLoading: false,
            error: 'Geolocation not supported',
          })
        }
      } catch (error) {
        console.error('Geo detection error:', error)
        setGeoData({
          region: null,
          isLoading: false,
          error: 'Failed to detect location',
        })
      }
    }

    detectRegion()
  }, [])

  return geoData
}

export function useGeoContent(regionOverride?: Region | null) {
  const { region: detectedRegion } = useGeoDetection()
  const region = regionOverride ?? detectedRegion

  return {
    regionText: region ? region.displayName : null,
    ctaText: region?.ctaText || 'Apply Now',
    disclaimer: region?.disclaimer,
  }
}
