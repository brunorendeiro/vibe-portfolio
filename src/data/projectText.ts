import type { Locale } from '../i18n'

// Descrições de cada projeto, traduzidas — a app usa o `id` do projeto (ver apps.ts) como chave.
export const projectText: Record<Locale, Record<string, string>> = {
  pt: {
    vibecheck: 'Quatro perguntas e um veredicto brutalmente honesto para descobrir se uma ideia merece ser construída.',
    'career-pilot': 'Um copiloto inteligente que simplifica a procura de emprego e ajuda a preparar candidaturas melhores.',
    sidequest: 'Pequenas missões de 5, 15 ou 30 minutos para quebrar a rotina e recuperar a curiosidade.',
    'star-coach': 'Um organizador local para preparar e praticar histórias de entrevista no formato Situação, Tarefa, Ação e Resultado.',
    'agentic-ai-spec-simulator': '317 perguntas baseadas na documentação oficial para preparar a certificação OutSystems Agentic AI, com modo de estudo e modo de exame.',
    'odc-architecture-exam': 'Simulador de exame para a certificação OutSystems Developer Cloud Architecture, com modo de estudo e modo de exame cronometrado.',
    'os-analyzer': 'Analisa apps públicas O11 e ODC a partir dos artefactos client-side e gera um relatório técnico com mapeamento de estrutura e verificação de headers de segurança.',
    bugsweeper: 'Campo minado educativo: cada mina escondida é uma vulnerabilidade web real (SQLi, XSS, SSRF...), explicada quando a encontras. Disponível em PT, EN e DE.',
    zahlendrill: 'Flashcards, quizzes e pronúncia (Web Speech API) para dominar os números em alemão, de 0 a 1000. Disponível em PT, EN e DE.',
    skycheck: 'Temperatura e previsão para qualquer localização, via Open-Meteo — sem contas nem chaves de API. Disponível em PT, EN e DE.',
    pathfinder: 'Visualizador interativo de algoritmos de pathfinding: BFS, Dijkstra e A* a percorrer uma grelha em tempo real. Desenha paredes e arrasta o início/fim.',
    algolab: 'Biblioteca visual de algoritmos de ordenação e pesquisa, com animação real, código e complexidade Big-O ao lado.',
  },
  en: {
    vibecheck: 'Four questions and a brutally honest verdict on whether an idea is worth building.',
    'career-pilot': 'A smart copilot that simplifies the job search and helps you prepare stronger applications.',
    sidequest: '5, 15 or 30-minute missions to break the routine and get curious again.',
    'star-coach': 'A local organizer to prepare and practice interview stories in the Situation, Task, Action, Result format.',
    'agentic-ai-spec-simulator': '317 questions based on official docs to prepare for the OutSystems Agentic AI certification, with study mode and exam mode.',
    'odc-architecture-exam': 'Exam simulator for the OutSystems Developer Cloud Architecture certification, with study mode and timed exam mode.',
    'os-analyzer': 'Analyzes public O11 and ODC apps from their client-side artifacts and generates a technical report mapping structure and checking security headers.',
    bugsweeper: 'An educational minesweeper: every hidden mine is a real web vulnerability (SQLi, XSS, SSRF...), explained when you find it. Available in PT, EN and DE.',
    zahlendrill: 'Flashcards, quizzes and pronunciation (Web Speech API) to master German numbers, from 0 to 1000. Available in PT, EN and DE.',
    skycheck: 'Temperature and forecast for any location, via Open-Meteo — no accounts, no API keys. Available in PT, EN and DE.',
    pathfinder: 'Interactive pathfinding algorithm visualizer: BFS, Dijkstra and A* searching a grid in real time. Draw walls and drag the start/end markers.',
    algolab: 'A visual library of sorting and searching algorithms, with real animation, code, and Big-O complexity side by side.',
  },
  de: {
    vibecheck: 'Vier Fragen und ein brutal ehrliches Urteil darüber, ob eine Idee es wert ist, gebaut zu werden.',
    'career-pilot': 'Ein intelligenter Co-Pilot, der die Jobsuche vereinfacht und bessere Bewerbungen vorbereiten hilft.',
    sidequest: '5-, 15- oder 30-minütige Missionen, um die Routine zu durchbrechen und wieder neugierig zu werden.',
    'star-coach': 'Ein lokaler Organizer, um Interview-Geschichten im STAR-Format (Situation, Task, Action, Result) vorzubereiten und zu üben.',
    'agentic-ai-spec-simulator': '317 Fragen auf Basis der offiziellen Dokumentation zur Vorbereitung auf die OutSystems-Agentic-AI-Zertifizierung, mit Lern- und Prüfungsmodus.',
    'odc-architecture-exam': 'Prüfungssimulator für die OutSystems-Developer-Cloud-Architecture-Zertifizierung, mit Lernmodus und zeitgesteuertem Prüfungsmodus.',
    'os-analyzer': 'Analysiert öffentliche O11- und ODC-Apps anhand ihrer clientseitigen Artefakte und erstellt einen technischen Bericht mit Strukturübersicht und Sicherheits-Header-Prüfung.',
    bugsweeper: 'Ein lehrreiches Minesweeper: Jede versteckte Mine ist eine echte Web-Schwachstelle (SQLi, XSS, SSRF...), erklärt, sobald du sie findest. Verfügbar auf PT, EN und DE.',
    zahlendrill: 'Karteikarten, Quiz und Aussprache (Web Speech API), um Zahlen auf Deutsch zu meistern, von 0 bis 1000. Verfügbar auf PT, EN und DE.',
    skycheck: 'Temperatur und Vorhersage für jeden Ort, über Open-Meteo — keine Konten, keine API-Schlüssel. Verfügbar auf PT, EN und DE.',
    pathfinder: 'Interaktiver Visualisierer für Pathfinding-Algorithmen: BFS, Dijkstra und A* durchsuchen ein Raster in Echtzeit. Wände zeichnen, Start/Ziel verschieben.',
    algolab: 'Eine visuelle Bibliothek von Sortier- und Suchalgorithmen, mit echter Animation, Code und Big-O-Komplexität nebeneinander.',
  },
}

export function getProjectDescription(id: string, locale: Locale): string {
  return projectText[locale][id] ?? ''
}
