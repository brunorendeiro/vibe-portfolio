const GA_MEASUREMENT_ID = 'G-8PWRSDS62T'
const AD_CLIENT = 'ca-pub-4561414438757131'
const CONSENT_KEY = 'portfolio-analytics-consent'

declare global {
  interface Window {
    dataLayer: unknown[]
    adsbygoogle: unknown[]
  }
}

export type Consent = 'granted' | 'denied'

export function getStoredConsent(): Consent | null {
  const stored = window.localStorage.getItem(CONSENT_KEY)
  return stored === 'granted' || stored === 'denied' ? stored : null
}

export function loadAnalytics() {
  if (document.getElementById('ga4-script')) return
  const script = document.createElement('script')
  script.id = 'ga4-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag(..._args: unknown[]) {
    window.dataLayer.push(arguments)
  }
  gtag('js', new Date())
  gtag('config', GA_MEASUREMENT_ID)
}

/** Disabled for now: AdSense Auto ads (enable_page_level_ads) includes
 * Vignette ads — full-screen interstitials shown between page loads, mostly
 * on mobile — which was blocking the whole portfolio behind a solid-color
 * overlay. There's no reliable code-level way to opt out of just Vignette;
 * it has to be turned off in the AdSense dashboard (Ads > By site > Edit >
 * Ad settings > Overlay formats). Re-enable the call to this below setConsent
 * once that's confirmed off. */
export function loadAds() {
  if (document.getElementById('adsbygoogle-script')) return
  const script = document.createElement('script')
  script.id = 'adsbygoogle-script'
  script.async = true
  script.crossOrigin = 'anonymous'
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`
  document.head.appendChild(script)

  window.adsbygoogle = window.adsbygoogle || []
  window.adsbygoogle.push({ google_ad_client: AD_CLIENT, enable_page_level_ads: true })
}

export function setConsent(value: Consent) {
  window.localStorage.setItem(CONSENT_KEY, value)
  if (value === 'granted') {
    loadAnalytics()
  }
}
