// src/lib/utm.ts
export interface UTMParams {
  source: string
  medium: string
  campaign: string
  term?: string
  content?: string
}

export function generateUTMLink(baseUrl: string, params: UTMParams): string {
  const url = new URL(baseUrl)

  url.searchParams.set('utm_source', params.source)
  url.searchParams.set('utm_medium', params.medium)
  url.searchParams.set('utm_campaign', params.campaign)

  if (params.term) {
    url.searchParams.set('utm_term', params.term)
  }

  if (params.content) {
    url.searchParams.set('utm_content', params.content)
  }

  return url.toString()
}

// Common UTM presets
export const utmPresets = {
  emailNewsletter: {
    source: 'email',
    medium: 'newsletter',
    campaign: 'monthly_update',
  },
  socialFacebook: {
    source: 'facebook',
    medium: 'social',
    campaign: 'organic',
  },
  qrCodePrint: {
    source: 'print',
    medium: 'qr_code',
    campaign: 'business_card',
  },
  googleAds: {
    source: 'google',
    medium: 'cpc',
    campaign: 'brand_search',
  },
}