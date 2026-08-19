import type { Locale } from '../i18n'

export const featuredCaseStudyIds = [
  'os-analyzer',
  'universal-tokenizer',
  'wine-atlas',
] as const

export type FeaturedCaseStudyId = typeof featuredCaseStudyIds[number]

export type CaseStudyCopy = {
  problem: string
  role: string
  architecture: string
  engineering: string
  ai: string
  status: string
  lesson: string
}

export const caseStudyText: Record<Locale, Record<FeaturedCaseStudyId, CaseStudyCopy>> = {
  pt: {
    'os-analyzer': {
      problem: 'Permitir uma primeira auditoria de aplicações públicas O11 e ODC sem acesso ao código-fonte ou ao Service Studio.',
      role: 'Desenhei e implementei o pipeline de análise, o mapeamento técnico, as verificações de segurança e a geração do relatório.',
      architecture: 'API em Python/FastAPI, recolha de artefactos client-side e headers HTTP, análise passiva e relatórios com ReportLab, publicada no Render.',
      engineering: 'Validação de entradas, análise não intrusiva, hardening da API e separação clara entre evidência observada e conclusões do relatório.',
      ai: 'A IA acelerou pesquisa e iteração durante o desenvolvimento; as verificações apresentadas ao utilizador permanecem determinísticas.',
      status: 'Ferramenta técnica publicada.',
      lesson: 'Uma análise credível precisa de mostrar evidência, limites e nível de confiança — não apenas sinalizar problemas.',
    },
    'universal-tokenizer': {
      problem: 'Comparar tokens e custos entre diferentes famílias de modelos sem enviar texto sensível para um servidor.',
      role: 'Desenhei a experiência, a integração dos tokenizers, o modelo de custos e a estratégia de desempenho no browser.',
      architecture: 'Next.js 16 e TypeScript, tokenizers públicos reais executados num Web Worker e interface construída com shadcn/ui.',
      engineering: 'O processamento sai da main thread, o texto fica no dispositivo e estimativas de fornecedores fechados são identificadas explicitamente.',
      ai: 'O produto traduz conceitos de modelos e tokenização numa ferramenta prática; não depende de uma chamada LLM para produzir resultados.',
      status: 'Aplicação publicada e código aberto.',
      lesson: 'Tokenização, custo e privacidade variam por modelo; transparência é parte da qualidade do produto.',
    },
    'wine-atlas': {
      problem: 'Ajudar pessoas a descobrir regiões e castas próximas e a tomar decisões de vinho com mais contexto e menos jargão.',
      role: 'Conduzi o desenho do produto, a experiência mobile-first, a estrutura de conteúdo e a implementação multilingue.',
      architecture: 'React, TypeScript e Vite, Geolocation API, conteúdo estruturado, i18n em PT/EN/DE e preferências guardadas localmente.',
      engineering: 'Funciona sem conta, trata permissões de localização, mantém o estado no dispositivo e explica a lógica das recomendações.',
      ai: 'A IA acelerou pesquisa, estruturação e iteração; a experiência final privilegia conteúdo verificável e recomendações transparentes.',
      status: 'Produto mobile-first publicado.',
      lesson: 'Uma boa recomendação precisa de explicar o porquê e adaptar-se ao contexto real do utilizador.',
    },
  },
  en: {
    'os-analyzer': {
      problem: 'Enable an initial audit of public O11 and ODC applications without source-code or Service Studio access.',
      role: 'I designed and implemented the analysis pipeline, technical mapping, security checks, and report generation.',
      architecture: 'Python/FastAPI API, client-side artifact and HTTP-header collection, passive analysis, and ReportLab reports, deployed on Render.',
      engineering: 'Input validation, non-intrusive analysis, API hardening, and a clear distinction between observed evidence and report conclusions.',
      ai: 'AI accelerated research and iteration during development; the checks presented to users remain deterministic.',
      status: 'Live technical tool.',
      lesson: 'A credible analysis must expose evidence, limitations, and confidence — not only flag problems.',
    },
    'universal-tokenizer': {
      problem: 'Compare token counts and costs across model families without sending sensitive text to a server.',
      role: 'I designed the experience, tokenizer integrations, cost model, and in-browser performance strategy.',
      architecture: 'Next.js 16 and TypeScript, real public tokenizers running in a Web Worker, and a shadcn/ui interface.',
      engineering: 'Processing stays off the main thread, text remains on the device, and closed-provider estimates are explicitly labelled.',
      ai: 'The product turns model and tokenization concepts into a practical tool; it does not require an LLM call to produce results.',
      status: 'Live open-source application.',
      lesson: 'Tokenization, cost, and privacy vary by model; transparency is part of product quality.',
    },
    'wine-atlas': {
      problem: 'Help people discover nearby wine regions and grapes and make informed choices with more context and less jargon.',
      role: 'I led the product design, mobile-first experience, content structure, and multilingual implementation.',
      architecture: 'React, TypeScript and Vite, Geolocation API, structured content, PT/EN/DE i18n, and locally stored preferences.',
      engineering: 'It works without an account, handles location permissions, keeps state on-device, and explains recommendation logic.',
      ai: 'AI accelerated research, structuring, and iteration; the final experience prioritises verifiable content and transparent recommendations.',
      status: 'Live mobile-first product.',
      lesson: 'A useful recommendation must explain why it fits and adapt to the user’s real context.',
    },
  },
  de: {
    'os-analyzer': {
      problem: 'Eine erste Prüfung öffentlicher O11- und ODC-Anwendungen ohne Quellcode- oder Service-Studio-Zugriff ermöglichen.',
      role: 'Ich habe Analyse-Pipeline, technische Zuordnung, Sicherheitsprüfungen und Berichtserstellung entworfen und implementiert.',
      architecture: 'Python/FastAPI-API, Erfassung clientseitiger Artefakte und HTTP-Header, passive Analyse und ReportLab-Berichte, bereitgestellt auf Render.',
      engineering: 'Eingabevalidierung, nicht-intrusive Analyse, API-Härtung und eine klare Trennung zwischen beobachteten Fakten und Schlussfolgerungen.',
      ai: 'KI beschleunigte Recherche und Iteration während der Entwicklung; die angezeigten Prüfungen bleiben deterministisch.',
      status: 'Veröffentlichte technische Anwendung.',
      lesson: 'Eine glaubwürdige Analyse zeigt Belege, Grenzen und Konfidenz — nicht nur Warnungen.',
    },
    'universal-tokenizer': {
      problem: 'Token-Anzahl und Kosten verschiedener Modellfamilien vergleichen, ohne sensible Texte an einen Server zu senden.',
      role: 'Ich habe Nutzererlebnis, Tokenizer-Integrationen, Kostenmodell und Performance-Strategie im Browser entworfen.',
      architecture: 'Next.js 16 und TypeScript, echte öffentliche Tokenizer in einem Web Worker und eine Oberfläche mit shadcn/ui.',
      engineering: 'Die Verarbeitung blockiert nicht den Hauptthread, Texte bleiben auf dem Gerät und Schätzungen geschlossener Anbieter sind klar markiert.',
      ai: 'Das Produkt macht Modell- und Tokenisierungswissen praktisch nutzbar; für Ergebnisse ist kein LLM-Aufruf nötig.',
      status: 'Veröffentlichte Open-Source-Anwendung.',
      lesson: 'Tokenisierung, Kosten und Datenschutz unterscheiden sich je Modell; Transparenz gehört zur Produktqualität.',
    },
    'wine-atlas': {
      problem: 'Menschen helfen, nahe Weinregionen und Rebsorten zu entdecken und Entscheidungen mit mehr Kontext und weniger Fachjargon zu treffen.',
      role: 'Ich verantwortete Produktdesign, Mobile-first-Erlebnis, Inhaltsstruktur und mehrsprachige Umsetzung.',
      architecture: 'React, TypeScript und Vite, Geolocation API, strukturierte Inhalte, i18n in PT/EN/DE und lokal gespeicherte Einstellungen.',
      engineering: 'Funktioniert ohne Konto, behandelt Standortberechtigungen, hält Zustand auf dem Gerät und erklärt Empfehlungen nachvollziehbar.',
      ai: 'KI beschleunigte Recherche, Strukturierung und Iteration; das Endprodukt setzt auf überprüfbare Inhalte und transparente Empfehlungen.',
      status: 'Veröffentlichtes Mobile-first-Produkt.',
      lesson: 'Eine gute Empfehlung erklärt das Warum und passt sich dem realen Kontext der Nutzer an.',
    },
  },
}
