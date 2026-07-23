import type { CategoryKey, StatusKey } from '../i18n'

// Glifo temático usado no cartão da app — ver `projectGlyphs` em App.tsx.
export type ProjectGlyph = 'pulse' | 'compass' | 'map' | 'star' | 'network' | 'blueprint' | 'scan' | 'flag' | 'numbers' | 'weather'

export type Project = {
  id: string
  name: string
  category: CategoryKey
  status: StatusKey
  technologies: string[]
  url?: string
  repository?: string
  accent: string
  icon: ProjectGlyph
}

// As descrições de cada app vivem em data/projectText.ts (traduzidas). Este é o
// único ficheiro que precisas de alterar para adicionar, remover ou reordenar apps.
export const projects: Project[] = [
  {
    id: 'vibecheck',
    name: 'VibeCheck',
    category: 'web',
    status: 'available',
    technologies: ['React', 'TypeScript', 'Vite'],
    url: 'https://vibecheck-psi-sand.vercel.app/',
    accent: '#ffd84d',
    icon: 'pulse',
  },
  {
    id: 'career-pilot',
    name: 'CareerPilot AI',
    category: 'ai',
    status: 'building',
    technologies: ['Flutter', 'Supabase', 'OpenAI'],
    accent: '#a8ff78',
    icon: 'compass',
  },
  {
    id: 'sidequest',
    name: 'SideQuest',
    category: 'web',
    status: 'available',
    technologies: ['React', 'TypeScript', 'Vite'],
    url: 'https://sidequest-puce-iota.vercel.app/',
    accent: '#ff6a45',
    icon: 'map',
  },
  {
    id: 'star-coach',
    name: 'STAR Coach',
    category: 'web',
    status: 'idea',
    technologies: ['React', 'TypeScript', 'Local storage'],
    accent: '#8ca7ff',
    icon: 'star',
  },
  {
    id: 'agentic-ai-spec-simulator',
    name: 'OutSystems Agentic AI – Exam Simulator',
    category: 'ai',
    status: 'available',
    technologies: ['React', 'TypeScript'],
    url: 'https://simulador-de-estudo-agentic-ai-spec.vercel.app/',
    accent: '#c084fc',
    icon: 'network',
  },
  {
    id: 'odc-architecture-exam',
    name: 'ODC Architecture – Exam Simulator',
    category: 'web',
    status: 'available',
    technologies: ['React', 'TypeScript'],
    url: 'https://odc-architecture-exam.vercel.app/',
    accent: '#38bdf8',
    icon: 'blueprint',
  },
  {
    id: 'os-analyzer',
    name: 'OutSystems Analyzer',
    category: 'web',
    status: 'available',
    technologies: ['Python', 'FastAPI', 'ReportLab'],
    url: 'https://os-analyzer.onrender.com/',
    accent: '#ff8a5c',
    icon: 'scan',
  },
  {
    id: 'bugsweeper',
    name: 'BugSweeper',
    category: 'web',
    status: 'available',
    technologies: ['React', 'TypeScript', 'Vite'],
    url: 'https://bugsweeper-six.vercel.app/',
    accent: '#ff5c5c',
    icon: 'flag',
  },
  {
    id: 'zahlendrill',
    name: 'ZahlenDrill',
    category: 'web',
    status: 'available',
    technologies: ['React', 'TypeScript', 'Web Speech API'],
    url: 'https://zahlendrill.vercel.app/',
    accent: '#ffcc00',
    icon: 'numbers',
  },
  {
    id: 'skycheck',
    name: 'SkyCheck',
    category: 'web',
    status: 'available',
    technologies: ['React', 'TypeScript', 'Open-Meteo'],
    url: 'https://skycheck-seven.vercel.app/',
    accent: '#4d9fff',
    icon: 'weather',
  },
]
