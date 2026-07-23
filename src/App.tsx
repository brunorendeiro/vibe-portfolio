import { useEffect, useMemo, useState, type ReactElement } from 'react'
import { projects, type Project, type ProjectGlyph } from './data/apps'
import { getProjectDescription } from './data/projectText'
import { categoryLabels, detectLocale, locales, statusLabels, ui, type CategoryKey, type Locale } from './i18n'

type Route = '/' | '/apps'
type Filter = 'all' | CategoryKey
type Theme = 'dark' | 'light'
const contactEmail = 'brunorendeiro88@gmail.com'
const cvUrl = 'https://personal-3gam9sjy.outsystemscloud.com/BRendeiroCV/Home'
const leaderboardUrl = 'https://arena.ai/leaderboard/agent'
const aiNewsUrl = 'https://techcrunch.com/category/artificial-intelligence/'

const icons = {
  dashboard: <><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></>,
  apps: <><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 9h8M8 13h5"/></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
  external: <><path d="M15 3h6v6M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></>,
  github: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 1.8a13.4 13.4 0 0 0-7 0C4.8.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4M8 19c-3 .9-3-1.5-4-2"/>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
  spark: <path d="m12 3-1.5 4.5L6 9l4.5 1.5L12 15l1.5-4.5L18 9l-4.5-1.5L12 3zM5 15l-.7 2.3L2 18l2.3.7L5 21l.7-2.3L8 18l-2.3-.7L5 15z"/>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  close: <><path d="m6 6 12 12M18 6 6 18"/></>,
  document: <><path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/></>,
  badge: <><circle cx="12" cy="9" r="5"/><path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"/></>,
  sun: <><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v3M12 18.5v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2.5 12h3M18.5 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></>,
  moon: <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"/>,
  trophy: <><path d="M8 21h8M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0V4Z"/><path d="M7 6H4a3 3 0 0 0 3 3M17 6h3a3 3 0 0 1-3 3"/></>,
  news: <><rect x="3" y="5" width="18" height="15" rx="2"/><path d="M7 9h6M7 13h10M7 17h6"/></>,
  test: <><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 5-5"/></>,
  course: <><path d="M4 6a2 2 0 0 1 2-2h6v16H6a2 2 0 0 1-2-2V6Z"/><path d="M20 6a2 2 0 0 0-2-2h-6v16h6a2 2 0 0 0 2-2V6Z"/></>,
}

function Icon({ name, size = 20 }: { name: keyof typeof icons; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[name]}</svg>
}

// Glifos temáticos usados nos cartões de projeto — ver `ProjectGlyph` em data/apps.ts.
const projectGlyphs: Record<ProjectGlyph, ReactElement> = {
  pulse: <><path d="M3 12h4l2-7 4 14 2-7h6" /></>,
  compass: <><circle cx="12" cy="12" r="9" /><path d="m14.5 9.5-2 5-5 2 2-5 5-2Z" /></>,
  map: <><path d="M9 3 4 6v15l5-3 6 3 5-3V3l-5 3-6-3Z" /><path d="M9 3v15M15 6v15" /></>,
  star: <path d="m12 3 2.7 6.6L21 11l-5 4.3 1.4 6.7L12 18.6 6.6 22l1.4-6.7L3 11l6.3-1.4L12 3Z" />,
  network: <><circle cx="6" cy="6" r="2.2" /><circle cx="18" cy="6" r="2.2" /><circle cx="12" cy="18" r="2.2" /><path d="M7.8 7.3 10.5 16M16.2 7.3 13.5 16M8.2 6h7.6" /></>,
  blueprint: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></>,
  scan: <><circle cx="10.5" cy="10.5" r="6.5" /><circle cx="10.5" cy="10.5" r="2.2" /><path d="m20 20-4.5-4.5" /></>,
  flag: <><path d="M6 3v18" /><path d="M6 4h11l-3 4 3 4H6" /></>,
  numbers: <><path d="M5 9h14M5 15h14M9 4 7 20M17 4l-2 16" /></>,
  weather: <><circle cx="7" cy="6" r="2.3" /><path d="M7 1.7v1.3M2.6 3.4l1 1M1.3 6h1.3" /><path d="M9 18h7.5a3.5 3.5 0 0 0 .5-6.96A5.5 5.5 0 0 0 7.2 9.6 4 4 0 0 0 9 18Z" /></>,
  route: <><circle cx="5" cy="19" r="2" /><circle cx="19" cy="5" r="2" /><path d="M6.5 17.5 11 12l2 2 4.5-5.5" /></>,
  bars: <path d="M5 20V10M12 20V4M19 20v14" />,
  dice: <><rect x="4" y="4" width="16" height="16" rx="3" /><circle cx="8.5" cy="8.5" r="1.2" fill="currentColor" stroke="none" /><circle cx="15.5" cy="8.5" r="1.2" fill="currentColor" stroke="none" /><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" /><circle cx="8.5" cy="15.5" r="1.2" fill="currentColor" stroke="none" /><circle cx="15.5" cy="15.5" r="1.2" fill="currentColor" stroke="none" /></>,
}

function ProjectGlyphIcon({ name, size = 30 }: { name: ProjectGlyph; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{projectGlyphs[name]}</svg>
}

function useRoute() {
  const getRoute = (): Route => window.location.pathname === '/apps' ? '/apps' : '/'
  const [route, setRoute] = useState<Route>(getRoute)

  useEffect(() => {
    const onPopState = () => setRoute(getRoute())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = (next: Route) => {
    window.history.pushState({}, '', next)
    setRoute(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return { route, navigate }
}

function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = window.localStorage.getItem('theme')
    if (stored === 'dark' || stored === 'light') return stored
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('theme', theme)
    const meta = document.querySelector('meta[name="theme-color"]')
    meta?.setAttribute('content', theme === 'dark' ? '#121212' : '#f6f1e7')
  }, [theme])

  return { theme, toggleTheme: () => setTheme(current => current === 'dark' ? 'light' : 'dark') }
}

function useLocale() {
  const [locale, setLocale] = useState<Locale>(() => detectLocale())

  useEffect(() => {
    window.localStorage.setItem('portfolio-locale', locale)
    document.documentElement.setAttribute('lang', locale)
  }, [locale])

  return { locale, setLocale }
}

function NavBar({ route, navigate, theme, toggleTheme, locale, setLocale, open, setOpen }: {
  route: Route
  navigate: (route: Route) => void
  theme: Theme
  toggleTheme: () => void
  locale: Locale
  setLocale: (locale: Locale) => void
  open: boolean
  setOpen: (open: boolean) => void
}) {
  const t = ui[locale]
  const go = (next: Route) => { navigate(next); setOpen(false) }
  return <header className="navbar">
    <div className="navbar-row">
      <button className="brand" onClick={() => go('/')} aria-label={t.goHome}>
        <span className="brand-mark">BR</span>
        <span className="brand-text"><strong>Bruno Rendeiro</strong><small>{t.brandRole}</small></span>
      </button>

      <nav className="navlinks" aria-label={t.navDashboard}>
        <button className={route === '/' ? 'active' : ''} aria-current={route === '/' ? 'page' : undefined} onClick={() => go('/')}>{t.navDashboard}</button>
        <button className={route === '/apps' ? 'active' : ''} aria-current={route === '/apps' ? 'page' : undefined} onClick={() => go('/apps')}>{t.navApps}<span className="nav-count">{projects.length}</span></button>
      </nav>

      <div className="navbar-actions">
        <a className="nav-text-link" href={cvUrl} target="_blank" rel="noreferrer">{t.navCv}</a>
        <div className="locale-switch" role="group" aria-label="Language">
          {locales.map(item => (
            <button key={item.id} className={locale === item.id ? 'active' : ''} onClick={() => setLocale(item.id)}>{item.label}</button>
          ))}
        </div>
        <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={theme === 'dark' ? t.themeToLight : t.themeToDark}>
          <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={17} />
        </button>
        <a className="top-contact" href={`mailto:${contactEmail}`}><Icon name="mail" size={17} /><span>{t.navTalk}</span></a>
        <button type="button" className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? t.menuClose : t.menuOpen} aria-expanded={open}>
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
    </div>

    <div className={`mobile-panel ${open ? 'is-open' : ''}`}>
      <button className={route === '/' ? 'active' : ''} onClick={() => go('/')}><Icon name="dashboard" size={18} />{t.navDashboard}</button>
      <button className={route === '/apps' ? 'active' : ''} onClick={() => go('/apps')}><Icon name="apps" size={18} />{t.navApps}<span className="nav-count">{projects.length}</span></button>
      <a href={cvUrl} target="_blank" rel="noreferrer"><Icon name="document" size={18} />{t.navMobileCv}</a>
      <a href={`mailto:${contactEmail}`}><Icon name="mail" size={18} />{t.navTalk}</a>
      <div className="locale-switch mobile">
        {locales.map(item => (
          <button key={item.id} className={locale === item.id ? 'active' : ''} onClick={() => setLocale(item.id)}>{item.label}</button>
        ))}
      </div>
    </div>
  </header>
}

const tickerItems = ['REACT', 'TYPESCRIPT', 'PYTHON', 'OUTSYSTEMS', 'FASTAPI', 'IA GENERATIVA', 'VITE', 'AGENTIC AI', 'PLAYWRIGHT', 'N8N']

function Ticker() {
  const items = [...tickerItems, ...tickerItems]
  return <div className="ticker" aria-hidden="true">
    <div className="ticker-track">
      {items.map((item, index) => <span key={`${item}-${index}`}>{item}<i /></span>)}
    </div>
  </div>
}

function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  const t = ui[locale]
  return <article className="project-card">
    <div className="project-visual" style={{ '--accent-raw': project.accent } as React.CSSProperties}>
      <span className="project-icon"><ProjectGlyphIcon name={project.icon} /></span>
      <span className={`status ${project.status}`}><i />{statusLabels[locale][project.status]}</span>
    </div>
    <div className="project-body">
      <span className="project-category">{categoryLabels[locale][project.category]}</span>
      <h3>{project.name}</h3>
      <p>{getProjectDescription(project.id, locale)}</p>
      <div className="tags">{project.technologies.map(item => <span key={item}>{item}</span>)}</div>
      <div className="project-actions">
        {project.url ? <a href={project.url} target="_blank" rel="noreferrer">{t.openApp} <Icon name="external" size={17} /></a> : <span className="muted-action">{t.linkSoon}</span>}
        {project.repository && <a className="icon-link" href={project.repository} target="_blank" rel="noreferrer" aria-label={`${t.sourceLabel} ${project.name}`}><Icon name="github" size={19} /></a>}
      </div>
    </div>
  </article>
}

function Dashboard({ navigate, locale }: { navigate: (route: Route) => void; locale: Locale }) {
  const t = ui[locale]
  const activeProjects = projects.filter(project => project.status !== 'idea').length
  return <main className="page dashboard-page">
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow"><Icon name="spark" size={16} /> {t.eyebrow}</div>
        <h1>{t.heroTitleLine1}<br />{t.heroTitleBefore}<em>{t.heroTitleHighlight}</em>{t.heroTitleAfter}</h1>
        <p>{t.heroBody}</p>
        <div className="hero-actions">
          <button className="primary-button" onClick={() => navigate('/apps')}>{t.heroCta} <Icon name="arrow" /></button>
          <a className="text-link" href={`mailto:${contactEmail}`}>{t.heroTalk}</a>
        </div>
      </div>
      <div className="hero-mark" aria-hidden="true">
        <div className="stamp">
          <span className="stamp-index">Nº 001</span>
          <span className="stamp-word">VIBE<br />CODER</span>
          <span className="stamp-index">EST. 2026</span>
        </div>
        <div className="hero-tag hero-tag-a">{t.heroTagA}</div>
        <div className="hero-tag hero-tag-b"><i /> {t.heroTagB}</div>
      </div>
    </section>

    <Ticker />

    <section className="stats" aria-label={t.recentWorkKicker}>
      <div><strong>{String(projects.length).padStart(2, '0')}</strong><span>{t.statProjects}</span></div>
      <div><strong>{String(activeProjects).padStart(2, '0')}</strong><span>{t.statBuilding}</span></div>
      <div><strong>∞</strong><span>{t.statCuriosity}</span></div>
    </section>

    <section className="section-block">
      <div className="section-heading"><div><span>{t.recentWorkKicker}</span><h2>{t.recentWorkTitle}</h2></div><button onClick={() => navigate('/apps')}>{t.viewAll} <Icon name="arrow" size={18} /></button></div>
      <div className="project-grid dashboard-grid">{projects.slice(0, 2).map(project => <ProjectCard project={project} locale={locale} key={project.id} />)}</div>
    </section>

    <section className="process-section">
      <div><span className="section-kicker">{t.processKicker}</span><h2>{t.processTitleLead}<br />{t.processTitleTail}</h2><p>{t.processBody}</p></div>
      <ol>
        <li><span>01</span><div><strong>{t.processStep1Title}</strong><p>{t.processStep1Body}</p></div></li>
        <li><span>02</span><div><strong>{t.processStep2Title}</strong><p>{t.processStep2Body}</p></div></li>
        <li><span>03</span><div><strong>{t.processStep3Title}</strong><p>{t.processStep3Body}</p></div></li>
      </ol>
    </section>

    <section className="section-block resources-section">
      <div className="section-heading"><div><span>{t.resourcesKicker}</span><h2>{t.resourcesTitle}</h2></div></div>
      <div className="resources-grid">
        <a className="resource-card" href={leaderboardUrl} target="_blank" rel="noreferrer">
          <span className="resource-icon"><Icon name="trophy" size={22} /></span>
          <div>
            <h3>{t.leaderboardTitle}</h3>
            <p>{t.leaderboardBody}</p>
            <span className="resource-link">{t.resourceLinkLabel} <Icon name="external" size={15} /></span>
          </div>
        </a>
        <a className="resource-card" href={aiNewsUrl} target="_blank" rel="noreferrer">
          <span className="resource-icon"><Icon name="news" size={22} /></span>
          <div>
            <h3>{t.newsTitle}</h3>
            <p>{t.newsBody}</p>
            <span className="resource-link">{t.resourceLinkLabel} <Icon name="external" size={15} /></span>
          </div>
        </a>
      </div>
    </section>

    <section className="section-block learning-section">
      <div className="section-heading"><div><span>{t.learningKicker}</span><h2>{t.learningTitle}</h2></div></div>
      <div className="resources-grid">
        <div className="resource-card static">
          <span className="resource-icon"><Icon name="test" size={22} /></span>
          <div>
            <h3>{t.playwrightTitle}</h3>
            <p>{t.playwrightBody}</p>
          </div>
        </div>
        <div className="resource-card static">
          <span className="resource-icon"><Icon name="course" size={22} /></span>
          <div>
            <h3>{t.courseTitle}</h3>
            <p className="learning-provider">{t.courseProvider}</p>
            <p>{t.courseBody}</p>
            <span className="learning-progress"><i /> {t.courseInProgress}</span>
          </div>
        </div>
      </div>
    </section>
  </main>
}

function AppsPage({ locale }: { locale: Locale }) {
  const t = ui[locale]
  const [filter, setFilter] = useState<Filter>('all')
  const filters: Filter[] = ['all', 'web', 'mobile', 'ai']
  const filterLabel = (item: Filter) => item === 'all' ? t.filterAll : categoryLabels[locale][item]
  const visible = useMemo(() => filter === 'all' ? projects : projects.filter(project => project.category === filter), [filter])
  return <main className="page apps-page">
    <section className="page-intro">
      <span className="section-kicker">{t.appsKicker}</span>
      <h1>{t.appsTitleLead}<span>.</span></h1>
      <p>{t.appsIntro}</p>
    </section>
    <div className="filter-row" role="group" aria-label={t.appsKicker}>
      {filters.map(item => <button key={item} className={filter === item ? 'active' : ''} aria-pressed={filter === item} onClick={() => setFilter(item)}>{filterLabel(item)}</button>)}
      <span>{visible.length} {visible.length === 1 ? t.projectCountOne : t.projectCountMany}</span>
    </div>
    {visible.length > 0
      ? <section className="project-grid apps-grid">{visible.map(project => <ProjectCard project={project} locale={locale} key={project.id} />)}</section>
      : <section className="empty-state"><span>✦</span><h2>{t.emptyTitle}</h2><p>{t.emptyBody}</p></section>}
  </main>
}

export default function App() {
  const { route, navigate } = useRoute()
  const { theme, toggleTheme } = useTheme()
  const { locale, setLocale } = useLocale()
  const [menuOpen, setMenuOpen] = useState(false)
  const t = ui[locale]

  useEffect(() => { setMenuOpen(false) }, [route])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return <div className="app-shell">
    <NavBar route={route} navigate={navigate} theme={theme} toggleTheme={toggleTheme} locale={locale} setLocale={setLocale} open={menuOpen} setOpen={setMenuOpen} />
    {route === '/' ? <Dashboard navigate={navigate} locale={locale} /> : <AppsPage locale={locale} />}
    <footer><span>© {new Date().getFullYear()} Bruno Rendeiro</span><span>{t.footerTagline}</span></footer>
  </div>
}
