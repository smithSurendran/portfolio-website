// src/lib/analytics.ts
type GtagEventParams = Record<string, unknown>

type GtagFn = {
  (command: 'js', config: Date): void
  (command: 'config', targetId: string, config?: GtagEventParams): void
  (command: 'event', eventName: string, parameters?: GtagEventParams): void
}

declare global {
  interface Window {
    gtag?: GtagFn
  }
}

export const trackEvent = (
  eventName: string,
  parameters?: GtagEventParams
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

// CTA Tracking
export const trackCTA = (location: string, label: string) => {
  trackEvent('cta_click', {
    event_category: 'engagement',
    event_label: label,
    location,
  })
}

// Contact Tracking
export const trackContact = (type: string, location: string) => {
  trackEvent('contact_action', {
    event_category: 'engagement',
    contact_type: type,
    location,
  })
}

// Calculator Usage
export const trackCalculator = (
  calculatorType: string,
  action: string,
  value?: number
) => {
  trackEvent('calculator_use', {
    event_category: 'tools',
    calculator_type: calculatorType,
    action,
    value,
  })
}

// Form Submission
export const trackFormSubmission = (formName: string, status: string) => {
  trackEvent('form_submission', {
    event_category: 'conversions',
    form_name: formName,
    status,
  })
}

// Page View (for SPA navigation)
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
      page_path: url,
    })
  }
}

// QR Scan Tracking
export const trackQRScan = (target: string) => {
  trackEvent('qr_scan', {
    event_category: 'engagement',
    target,
  })
}
