export type Locale = 'pt' | 'en' | 'de'

export const locales: { id: Locale; label: string }[] = [
  { id: 'pt', label: 'PT' },
  { id: 'en', label: 'EN' },
  { id: 'de', label: 'DE' },
]

export function detectLocale(): Locale {
  const stored = window.localStorage.getItem('portfolio-locale')
  if (stored === 'pt' || stored === 'en' || stored === 'de') return stored
  const browser = navigator.language.slice(0, 2).toLowerCase()
  if (browser === 'de') return 'de'
  if (browser === 'pt') return 'pt'
  return 'en'
}

export type StatusKey = 'available' | 'building' | 'idea'
export type CategoryKey = 'web' | 'mobile' | 'ai'

export const statusLabels: Record<Locale, Record<StatusKey, string>> = {
  pt: { available: 'Disponível', building: 'Em construção', idea: 'Ideia' },
  en: { available: 'Available', building: 'In progress', idea: 'Idea' },
  de: { available: 'Verfügbar', building: 'In Arbeit', idea: 'Idee' },
}

export const categoryLabels: Record<Locale, Record<CategoryKey, string>> = {
  pt: { web: 'Web', mobile: 'Mobile', ai: 'IA' },
  en: { web: 'Web', mobile: 'Mobile', ai: 'AI' },
  de: { web: 'Web', mobile: 'Mobile', ai: 'KI' },
}

type UiStrings = {
  goHome: string
  brandRole: string
  navDashboard: string
  navApps: string
  navCv: string
  navCertifications: string
  navMobileCv: string
  navMobileCertifications: string
  navTalk: string
  themeToLight: string
  themeToDark: string
  menuOpen: string
  menuClose: string
  eyebrow: string
  heroTitleLine1: string
  heroTitleBefore: string
  heroTitleHighlight: string
  heroTitleAfter: string
  heroBody: string
  heroCta: string
  heroTalk: string
  heroTagA: string
  heroTagB: string
  statProjects: string
  statBuilding: string
  statCuriosity: string
  recentWorkKicker: string
  recentWorkTitle: string
  viewAll: string
  processKicker: string
  processTitleLead: string
  processTitleTail: string
  processBody: string
  processStep1Title: string
  processStep1Body: string
  processStep2Title: string
  processStep2Body: string
  processStep3Title: string
  processStep3Body: string
  appsKicker: string
  appsTitleLead: string
  appsIntro: string
  filterAll: string
  projectCountOne: string
  projectCountMany: string
  emptyTitle: string
  emptyBody: string
  openApp: string
  linkSoon: string
  sourceLabel: string
  footerTagline: string
}

export const ui: Record<Locale, UiStrings> = {
  pt: {
    goHome: 'Ir para o início',
    brandRole: 'Vibe coder',
    navDashboard: 'Dashboard',
    navApps: 'As minhas apps',
    navCv: 'CV',
    navCertifications: 'Certificações',
    navMobileCv: 'Ver CV',
    navMobileCertifications: 'Certificações OutSystems',
    navTalk: 'Falar comigo',
    themeToLight: 'Ativar tema claro',
    themeToDark: 'Ativar tema escuro',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
    eyebrow: 'IA, criatividade e código',
    heroTitleLine1: 'Olá, sou o Bruno.',
    heroTitleBefore: 'Transformo ',
    heroTitleHighlight: 'ideias',
    heroTitleAfter: ' em produtos digitais.',
    heroBody: 'Exploro problemas, desenho soluções e uso inteligência artificial para passar mais depressa da ideia a uma aplicação real.',
    heroCta: 'Explorar as minhas apps',
    heroTalk: 'Falar comigo',
    heroTagA: 'prompt_01 → produto real',
    heroTagB: 'a construir',
    statProjects: 'Ideias no portfólio',
    statBuilding: 'Apps em desenvolvimento',
    statCuriosity: 'Curiosidade para explorar',
    recentWorkKicker: 'Trabalho recente',
    recentWorkTitle: 'Apps em destaque',
    viewAll: 'Ver todas',
    processKicker: 'O meu processo',
    processTitleLead: 'Da curiosidade',
    processTitleTail: 'ao produto.',
    processBody: 'Vibe coding com intenção: a IA acelera o trabalho, mas cada decisão continua a servir uma ideia e uma pessoa.',
    processStep1Title: 'Imaginar',
    processStep1Body: 'Encontrar uma ideia que vale a pena testar.',
    processStep2Title: 'Construir',
    processStep2Body: 'Criar rapidamente uma experiência funcional.',
    processStep3Title: 'Aprender',
    processStep3Body: 'Testar, ouvir e melhorar uma versão de cada vez.',
    appsKicker: 'Projetos independentes',
    appsTitleLead: 'As minhas apps',
    appsIntro: 'Cada projeto começou com uma pergunta, cresceu com experimentação e vive no seu próprio espaço.',
    filterAll: 'Todas',
    projectCountOne: 'projeto',
    projectCountMany: 'projetos',
    emptyTitle: 'Ainda não há projetos nesta categoria.',
    emptyBody: 'Quando existir um, aparecerá aqui.',
    openApp: 'Abrir app',
    linkSoon: 'Link em breve',
    sourceLabel: 'Código de',
    footerTagline: 'Imaginado por um humano. Construído com IA.',
  },
  en: {
    goHome: 'Go to homepage',
    brandRole: 'Vibe coder',
    navDashboard: 'Dashboard',
    navApps: 'My apps',
    navCv: 'CV',
    navCertifications: 'Certifications',
    navMobileCv: 'View CV',
    navMobileCertifications: 'OutSystems certifications',
    navTalk: "Let's talk",
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    eyebrow: 'AI, creativity and code',
    heroTitleLine1: "Hi, I'm Bruno.",
    heroTitleBefore: 'I turn ',
    heroTitleHighlight: 'ideas',
    heroTitleAfter: ' into digital products.',
    heroBody: 'I explore problems, design solutions, and use artificial intelligence to move faster from idea to a real application.',
    heroCta: 'Explore my apps',
    heroTalk: "Let's talk",
    heroTagA: 'prompt_01 → real product',
    heroTagB: 'building',
    statProjects: 'Ideas in the portfolio',
    statBuilding: 'Apps in progress',
    statCuriosity: 'Curiosity to explore',
    recentWorkKicker: 'Recent work',
    recentWorkTitle: 'Featured apps',
    viewAll: 'View all',
    processKicker: 'My process',
    processTitleLead: 'From curiosity',
    processTitleTail: 'to product.',
    processBody: 'Intentional vibe coding: AI speeds up the work, but every decision still serves an idea and a person.',
    processStep1Title: 'Imagine',
    processStep1Body: 'Find an idea worth testing.',
    processStep2Title: 'Build',
    processStep2Body: 'Quickly create a working experience.',
    processStep3Title: 'Learn',
    processStep3Body: 'Test, listen, and improve one version at a time.',
    appsKicker: 'Independent projects',
    appsTitleLead: 'My apps',
    appsIntro: 'Every project started with a question, grew through experimentation, and lives in its own space.',
    filterAll: 'All',
    projectCountOne: 'project',
    projectCountMany: 'projects',
    emptyTitle: 'No projects in this category yet.',
    emptyBody: "When there's one, it'll show up here.",
    openApp: 'Open app',
    linkSoon: 'Link coming soon',
    sourceLabel: 'Source code for',
    footerTagline: 'Imagined by a human. Built with AI.',
  },
  de: {
    goHome: 'Zur Startseite',
    brandRole: 'Vibe Coder',
    navDashboard: 'Dashboard',
    navApps: 'Meine Apps',
    navCv: 'Lebenslauf',
    navCertifications: 'Zertifizierungen',
    navMobileCv: 'Lebenslauf ansehen',
    navMobileCertifications: 'OutSystems-Zertifizierungen',
    navTalk: 'Kontakt aufnehmen',
    themeToLight: 'Zum hellen Design wechseln',
    themeToDark: 'Zum dunklen Design wechseln',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schließen',
    eyebrow: 'KI, Kreativität und Code',
    heroTitleLine1: 'Hallo, ich bin Bruno.',
    heroTitleBefore: 'Ich verwandle ',
    heroTitleHighlight: 'Ideen',
    heroTitleAfter: ' in digitale Produkte.',
    heroBody: 'Ich untersuche Probleme, entwerfe Lösungen und nutze künstliche Intelligenz, um schneller von der Idee zu einer echten Anwendung zu kommen.',
    heroCta: 'Meine Apps entdecken',
    heroTalk: 'Kontakt aufnehmen',
    heroTagA: 'prompt_01 → echtes Produkt',
    heroTagB: 'im Aufbau',
    statProjects: 'Ideen im Portfolio',
    statBuilding: 'Apps in Entwicklung',
    statCuriosity: 'Neugier zu entdecken',
    recentWorkKicker: 'Neueste Arbeit',
    recentWorkTitle: 'Ausgewählte Apps',
    viewAll: 'Alle ansehen',
    processKicker: 'Mein Prozess',
    processTitleLead: 'Von der Neugier',
    processTitleTail: 'zum Produkt.',
    processBody: 'Vibe Coding mit Absicht: KI beschleunigt die Arbeit, aber jede Entscheidung dient weiterhin einer Idee und einer Person.',
    processStep1Title: 'Vorstellen',
    processStep1Body: 'Eine Idee finden, die es wert ist, getestet zu werden.',
    processStep2Title: 'Bauen',
    processStep2Body: 'Schnell eine funktionierende Erfahrung schaffen.',
    processStep3Title: 'Lernen',
    processStep3Body: 'Testen, zuhören und Version für Version verbessern.',
    appsKicker: 'Unabhängige Projekte',
    appsTitleLead: 'Meine Apps',
    appsIntro: 'Jedes Projekt begann mit einer Frage, wuchs durch Ausprobieren und lebt in seinem eigenen Raum.',
    filterAll: 'Alle',
    projectCountOne: 'Projekt',
    projectCountMany: 'Projekte',
    emptyTitle: 'Noch keine Projekte in dieser Kategorie.',
    emptyBody: 'Sobald es eines gibt, erscheint es hier.',
    openApp: 'App öffnen',
    linkSoon: 'Link folgt bald',
    sourceLabel: 'Quellcode von',
    footerTagline: 'Von einem Menschen erdacht. Mit KI gebaut.',
  },
}
