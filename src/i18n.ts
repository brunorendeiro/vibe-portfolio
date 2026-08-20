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
  statLive: string
  statBuilding: string
  statCuriosity: string
  recentWorkKicker: string
  recentWorkTitle: string
  viewAll: string
  caseStudiesKicker: string
  caseStudiesTitle: string
  caseStudiesBody: string
  caseStudyLabel: string
  caseStudyProblem: string
  caseStudyRole: string
  caseStudyArchitecture: string
  caseStudyEngineering: string
  caseStudyAi: string
  caseStudyStatus: string
  caseStudyLesson: string
  caseStudySource: string
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
  finderKicker: string
  finderTitle: string
  finderBody: string
  searchLabel: string
  searchPlaceholder: string
  searchClear: string
  filterLabel: string
  directoryTitle: string
  directoryBody: string
  detailsKicker: string
  detailsTitle: string
  noResultsTitle: string
  noResultsBody: string
  clearFilters: string
  filterAll: string
  projectCountOne: string
  projectCountMany: string
  emptyTitle: string
  emptyBody: string
  openApp: string
  linkSoon: string
  sourceLabel: string
  favoriteAdd: string
  favoriteRemove: string
  footerTagline: string
  resourcesKicker: string
  resourcesTitle: string
  leaderboardTitle: string
  leaderboardBody: string
  newsTitle: string
  newsBody: string
  resourceLinkLabel: string
  learningKicker: string
  learningTitle: string
  playwrightTitle: string
  playwrightBody: string
  courseTitle: string
  courseProvider: string
  courseBody: string
  courseStatus: string
  friendsKicker: string
  friendsTitle: string
  toolboxTitle: string
  toolboxBody: string
  cookieTitle: string
  cookieBody: string
  cookieAccept: string
  cookieReject: string
}

export const ui: Record<Locale, UiStrings> = {
  pt: {
    goHome: 'Ir para o início',
    brandRole: 'Engenharia de Software · IA Aplicada',
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
    statProjects: 'Projetos no portefólio',
    statLive: 'Aplicações publicadas',
    statBuilding: 'Em desenvolvimento',
    statCuriosity: 'Curiosidade para explorar',
    recentWorkKicker: 'Trabalho recente',
    recentWorkTitle: 'Apps em destaque',
    viewAll: 'Ver todas',
    caseStudiesKicker: 'Engenharia em destaque',
    caseStudiesTitle: 'Case studies selecionados',
    caseStudiesBody: 'Quatro projetos que mostram como passo de um problema a um produto funcional, com decisões explícitas sobre arquitetura, segurança, IA e qualidade de entrega.',
    caseStudyLabel: 'Case study',
    caseStudyProblem: 'Problema',
    caseStudyRole: 'O meu papel',
    caseStudyArchitecture: 'Arquitetura',
    caseStudyEngineering: 'Engenharia e qualidade',
    caseStudyAi: 'Contributo da IA',
    caseStudyStatus: 'Estado',
    caseStudyLesson: 'Principal aprendizagem',
    caseStudySource: 'Código',
    processKicker: 'O meu processo',
    processTitleLead: 'Da curiosidade',
    processTitleTail: 'ao produto.',
    processBody: 'Engenharia acelerada por IA: as ferramentas aumentam a velocidade, mas arquitetura, qualidade e decisões continuam sob responsabilidade humana.',
    processStep1Title: 'Imaginar',
    processStep1Body: 'Encontrar uma ideia que vale a pena testar.',
    processStep2Title: 'Construir',
    processStep2Body: 'Criar rapidamente uma experiência funcional.',
    processStep3Title: 'Aprender',
    processStep3Body: 'Testar, ouvir e melhorar uma versão de cada vez.',
    appsKicker: 'Projetos independentes',
    appsTitleLead: 'As minhas apps',
    appsIntro: 'Explora aplicações para aprender, trabalhar, jogar e resolver pequenos problemas do dia a dia. Cada projeto explica claramente para quem serve e o que permite fazer.',
    finderKicker: 'Explorar o portefólio',
    finderTitle: 'Encontra a app certa para ti',
    finderBody: 'Pesquisa por um tema, uma necessidade ou uma tecnologia. Também podes escolher diretamente na lista e saltar para todos os detalhes.',
    searchLabel: 'Pesquisar projetos',
    searchPlaceholder: 'Ex.: aprender alemão, vinhos, IA…',
    searchClear: 'Limpar pesquisa',
    filterLabel: 'Filtrar projetos por categoria',
    directoryTitle: 'Escolhe uma app',
    directoryBody: 'Uma visão rápida de tudo o que existe. Seleciona um projeto para conhecer a história, as funcionalidades e as tecnologias.',
    detailsKicker: 'Todos os detalhes',
    detailsTitle: 'Conhece cada projeto',
    noResultsTitle: 'Não encontrei nenhum projeto',
    noResultsBody: 'Experimenta outra palavra ou volta a ver todas as categorias.',
    clearFilters: 'Limpar pesquisa e filtros',
    filterAll: 'Todas',
    projectCountOne: 'projeto',
    projectCountMany: 'projetos',
    emptyTitle: 'Ainda não há projetos nesta categoria.',
    emptyBody: 'Quando existir um, aparecerá aqui.',
    openApp: 'Abrir app',
    linkSoon: 'Link em breve',
    sourceLabel: 'Código de',
    favoriteAdd: 'Marcar como favorita',
    favoriteRemove: 'Remover dos favoritos',
    footerTagline: 'Desenhado e desenvolvido pelo Bruno. Acelerado com IA.',
    resourcesKicker: 'Recursos',
    resourcesTitle: 'A acompanhar o ecossistema de IA',
    leaderboardTitle: 'Leaderboard de modelos',
    leaderboardBody: 'Ranking atualizado dos modelos de IA mais fortes do momento.',
    newsTitle: 'Notícias de IA',
    newsBody: 'As últimas notícias sobre inteligência artificial, direto da fonte.',
    resourceLinkLabel: 'Ver mais',
    learningKicker: 'A aprender agora',
    learningTitle: 'Competências em construção',
    playwrightTitle: 'Testes automáticos com Playwright',
    playwrightBody: 'Começou como exploração pessoal e passou a fazer parte do meu dia a dia profissional: escrevo testes automáticos end-to-end para os projetos em que trabalho.',
    courseTitle: 'Curso Intensivo de Automação e Agentes com IA',
    courseProvider: 'Code For All',
    courseBody: 'Usei IA para construir automações e equipas de agentes que executam processos de trabalho reais — o projeto final foi o Inventra, disponível aqui no portefólio.',
    courseStatus: 'Curso concluído',
    friendsKicker: 'Fora do meu trabalho',
    friendsTitle: 'Também vale a pena espreitar',
    toolboxTitle: 'Toolbox, por Alexa',
    toolboxBody: 'Uma caixa de ferramentas online gratuita — calculadoras, conversores, geradores e mais, feita pela minha mulher.',
    cookieTitle: 'Cookies',
    cookieBody: 'Uso o Google Analytics e o Google AdSense para perceber visitas e mostrar anúncios. Aceitas cookies de análise e publicidade?',
    cookieAccept: 'Aceitar',
    cookieReject: 'Recusar',
  },
  en: {
    goHome: 'Go to homepage',
    brandRole: 'Software Engineering · Applied AI',
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
    statProjects: 'Projects in the portfolio',
    statLive: 'Live applications',
    statBuilding: 'In development',
    statCuriosity: 'Curiosity to explore',
    recentWorkKicker: 'Recent work',
    recentWorkTitle: 'Featured apps',
    viewAll: 'View all',
    caseStudiesKicker: 'Featured engineering',
    caseStudiesTitle: 'Selected case studies',
    caseStudiesBody: 'Four projects showing how I move from a problem to a working product, with explicit decisions about architecture, security, AI, and delivery quality.',
    caseStudyLabel: 'Case study',
    caseStudyProblem: 'Problem',
    caseStudyRole: 'My role',
    caseStudyArchitecture: 'Architecture',
    caseStudyEngineering: 'Engineering and quality',
    caseStudyAi: 'AI contribution',
    caseStudyStatus: 'Status',
    caseStudyLesson: 'Key lesson',
    caseStudySource: 'Source',
    processKicker: 'My process',
    processTitleLead: 'From curiosity',
    processTitleTail: 'to product.',
    processBody: 'AI-accelerated engineering: the tools increase speed, while architecture, quality, and decisions remain under human ownership.',
    processStep1Title: 'Imagine',
    processStep1Body: 'Find an idea worth testing.',
    processStep2Title: 'Build',
    processStep2Body: 'Quickly create a working experience.',
    processStep3Title: 'Learn',
    processStep3Body: 'Test, listen, and improve one version at a time.',
    appsKicker: 'Independent projects',
    appsTitleLead: 'My apps',
    appsIntro: 'Explore apps for learning, working, playing, and solving small everyday problems. Each project clearly explains who it is for and what it helps you do.',
    finderKicker: 'Explore the portfolio',
    finderTitle: 'Find the right app for you',
    finderBody: 'Search by topic, need, or technology. You can also pick directly from the list and jump to the full details.',
    searchLabel: 'Search projects',
    searchPlaceholder: 'E.g. learn German, wine, AI…',
    searchClear: 'Clear search',
    filterLabel: 'Filter projects by category',
    directoryTitle: 'Choose an app',
    directoryBody: 'A quick view of everything available. Select a project to learn about its story, features, and technologies.',
    detailsKicker: 'All the details',
    detailsTitle: 'Get to know each project',
    noResultsTitle: 'No projects found',
    noResultsBody: 'Try another search or browse all categories again.',
    clearFilters: 'Clear search and filters',
    filterAll: 'All',
    projectCountOne: 'project',
    projectCountMany: 'projects',
    emptyTitle: 'No projects in this category yet.',
    emptyBody: "When there's one, it'll show up here.",
    openApp: 'Open app',
    linkSoon: 'Link coming soon',
    sourceLabel: 'Source code for',
    favoriteAdd: 'Mark as favorite',
    favoriteRemove: 'Remove from favorites',
    footerTagline: 'Designed and engineered by Bruno. Accelerated with AI.',
    resourcesKicker: 'Resources',
    resourcesTitle: 'Keeping up with the AI ecosystem',
    leaderboardTitle: 'Model leaderboard',
    leaderboardBody: 'An up-to-date ranking of the strongest AI models right now.',
    newsTitle: 'AI news',
    newsBody: 'The latest artificial intelligence news, straight from the source.',
    resourceLinkLabel: 'See more',
    learningKicker: 'Currently learning',
    learningTitle: 'Skills in progress',
    playwrightTitle: 'Automated testing with Playwright',
    playwrightBody: "Started as personal exploration and became part of my day-to-day work: I write automated end-to-end tests for the projects I work on.",
    courseTitle: 'Intensive Course on Automation and AI Agents',
    courseProvider: 'Code For All',
    courseBody: 'Used AI to build automations and agent teams that run real work processes — the final project was Inventra, available here in the portfolio.',
    courseStatus: 'Course completed',
    friendsKicker: 'Outside my work',
    friendsTitle: 'Also worth a look',
    toolboxTitle: 'Toolbox, by Alexa',
    toolboxBody: 'A free online toolbox — calculators, converters, generators and more, made by my wife.',
    cookieTitle: 'Cookies',
    cookieBody: 'I use Google Analytics and Google AdSense to understand visits and show ads. Do you accept analytics and advertising cookies?',
    cookieAccept: 'Accept',
    cookieReject: 'Reject',
  },
  de: {
    goHome: 'Zur Startseite',
    brandRole: 'Softwareentwicklung · Angewandte KI',
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
    statProjects: 'Projekte im Portfolio',
    statLive: 'Veröffentlichte Anwendungen',
    statBuilding: 'In Entwicklung',
    statCuriosity: 'Neugier zu entdecken',
    recentWorkKicker: 'Neueste Arbeit',
    recentWorkTitle: 'Ausgewählte Apps',
    viewAll: 'Alle ansehen',
    caseStudiesKicker: 'Ausgewählte Engineering-Arbeit',
    caseStudiesTitle: 'Ausgewählte Fallstudien',
    caseStudiesBody: 'Vier Projekte, die meinen Weg vom Problem zum funktionierenden Produkt zeigen — mit klaren Entscheidungen zu Architektur, Sicherheit, KI und Lieferqualität.',
    caseStudyLabel: 'Fallstudie',
    caseStudyProblem: 'Problem',
    caseStudyRole: 'Meine Rolle',
    caseStudyArchitecture: 'Architektur',
    caseStudyEngineering: 'Engineering und Qualität',
    caseStudyAi: 'Beitrag der KI',
    caseStudyStatus: 'Status',
    caseStudyLesson: 'Wichtigste Erkenntnis',
    caseStudySource: 'Quellcode',
    processKicker: 'Mein Prozess',
    processTitleLead: 'Von der Neugier',
    processTitleTail: 'zum Produkt.',
    processBody: 'KI-beschleunigtes Engineering: Die Werkzeuge erhöhen das Tempo, während Architektur, Qualität und Entscheidungen in menschlicher Verantwortung bleiben.',
    processStep1Title: 'Vorstellen',
    processStep1Body: 'Eine Idee finden, die es wert ist, getestet zu werden.',
    processStep2Title: 'Bauen',
    processStep2Body: 'Schnell eine funktionierende Erfahrung schaffen.',
    processStep3Title: 'Lernen',
    processStep3Body: 'Testen, zuhören und Version für Version verbessern.',
    appsKicker: 'Unabhängige Projekte',
    appsTitleLead: 'Meine Apps',
    appsIntro: 'Entdecke Apps zum Lernen, Arbeiten, Spielen und Lösen kleiner Alltagsprobleme. Jedes Projekt erklärt klar, für wen es gedacht ist und was du damit tun kannst.',
    finderKicker: 'Portfolio entdecken',
    finderTitle: 'Finde die passende App für dich',
    finderBody: 'Suche nach Thema, Bedürfnis oder Technologie. Du kannst auch direkt aus der Liste wählen und zu allen Details springen.',
    searchLabel: 'Projekte durchsuchen',
    searchPlaceholder: 'Z. B. Deutsch lernen, Wein, KI…',
    searchClear: 'Suche löschen',
    filterLabel: 'Projekte nach Kategorie filtern',
    directoryTitle: 'Wähle eine App',
    directoryBody: 'Ein schneller Überblick über alle Projekte. Wähle eines aus, um Geschichte, Funktionen und Technologien kennenzulernen.',
    detailsKicker: 'Alle Details',
    detailsTitle: 'Lerne jedes Projekt kennen',
    noResultsTitle: 'Keine Projekte gefunden',
    noResultsBody: 'Versuche einen anderen Suchbegriff oder zeige wieder alle Kategorien an.',
    clearFilters: 'Suche und Filter löschen',
    filterAll: 'Alle',
    projectCountOne: 'Projekt',
    projectCountMany: 'Projekte',
    emptyTitle: 'Noch keine Projekte in dieser Kategorie.',
    emptyBody: 'Sobald es eines gibt, erscheint es hier.',
    openApp: 'App öffnen',
    linkSoon: 'Link folgt bald',
    sourceLabel: 'Quellcode von',
    favoriteAdd: 'Als Favorit markieren',
    favoriteRemove: 'Aus Favoriten entfernen',
    footerTagline: 'Von Bruno entworfen und entwickelt. Mit KI beschleunigt.',
    resourcesKicker: 'Ressourcen',
    resourcesTitle: 'Am Puls des KI-Ökosystems',
    leaderboardTitle: 'Modell-Rangliste',
    leaderboardBody: 'Ein aktuelles Ranking der stärksten KI-Modelle im Moment.',
    newsTitle: 'KI-Neuigkeiten',
    newsBody: 'Die neuesten Nachrichten zu künstlicher Intelligenz, direkt von der Quelle.',
    resourceLinkLabel: 'Mehr sehen',
    learningKicker: 'Aktuell am Lernen',
    learningTitle: 'Fähigkeiten im Aufbau',
    playwrightTitle: 'Automatisierte Tests mit Playwright',
    playwrightBody: 'Hat als persönliches Experimentieren begonnen und ist Teil meines beruflichen Alltags geworden: Ich schreibe automatisierte End-to-End-Tests für die Projekte, an denen ich arbeite.',
    courseTitle: 'Intensivkurs für Automatisierung und KI-Agenten',
    courseProvider: 'Code For All',
    courseBody: 'Ich habe KI genutzt, um Automatisierungen und Agenten-Teams zu bauen, die echte Arbeitsprozesse ausführen — das Abschlussprojekt war Inventra, hier im Portfolio verfügbar.',
    courseStatus: 'Kurs abgeschlossen',
    friendsKicker: 'Abseits meiner Arbeit',
    friendsTitle: 'Auch einen Blick wert',
    toolboxTitle: 'Toolbox, von Alexa',
    toolboxBody: 'Eine kostenlose Online-Toolbox — Rechner, Umrechner, Generatoren und mehr, gemacht von meiner Frau.',
    cookieTitle: 'Cookies',
    cookieBody: 'Ich verwende Google Analytics und Google AdSense, um Besuche zu verstehen und Anzeigen zu schalten. Akzeptierst du Analyse- und Werbe-Cookies?',
    cookieAccept: 'Akzeptieren',
    cookieReject: 'Ablehnen',
  },
}
