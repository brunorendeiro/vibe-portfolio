import { useEffect, useState } from 'react'
import { getStoredConsent } from './analytics'
import { ui, type Locale } from './i18n'

const AD_CLIENT = 'ca-pub-4561414438757131'
const AD_SLOT = '4055098918'

/**
 * Bloco de anúncio manual e responsivo. Ao contrário dos auto ads (desligados
 * em analytics.ts), este componente só deve ser usado em ecrãs com conteúdo
 * textual real (ex. lista de projetos com descrições) — nunca sobre um
 * iframe de demo ao vivo ou widget interativo, para respeitar as políticas
 * do AdSense sobre anúncios em ecrãs sem conteúdo do publicador.
 */
export default function AdSlot({ locale }: { locale: Locale }) {
  const [granted, setGranted] = useState(false)
  const t = ui[locale]

  useEffect(() => {
    setGranted(getStoredConsent() === 'granted')
  }, [])

  useEffect(() => {
    if (!granted) return
    try {
      window.adsbygoogle = window.adsbygoogle || []
      window.adsbygoogle.push({})
    } catch {
      /* script ainda não carregado ou bloqueado por um ad blocker */
    }
  }, [granted])

  if (!granted) return null

  return (
    <div className="ad-slot">
      <span className="ad-label">{t.adLabel}</span>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={AD_SLOT}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
