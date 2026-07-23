# Vibe Portfolio

Portfólio pessoal de Bruno Rendeiro, pensado para apresentar quem ele é, explicar a sua abordagem a vibe coding e reunir links para as aplicações que cria.

## Visão do produto

O portfólio funciona como ponto de entrada para todos os projetos do Bruno. Deve transmitir curiosidade, criatividade e capacidade de transformar ideias em produtos digitais com a ajuda de inteligência artificial.

Não é um monorepo nem aloja o código das outras aplicações. Cada app tem o seu próprio repositório, agente, dependências e publicação. Este projeto contém apenas a apresentação do Bruno e os metadados necessários para mostrar e ligar às apps.

## O que existe atualmente

Esta é a primeira versão funcional e contém:

- Dashboard com apresentação pessoal e proposta de valor
- Resumo do número de ideias e apps em desenvolvimento
- Secção de projetos em destaque
- Explicação resumida do processo: imaginar, construir e aprender
- Página independente com a lista de todas as apps
- Filtros por Web, Mobile e IA
- Estados de projeto: disponível, em construção e ideia
- Navegação lateral em desktop e menu adaptado a telemóvel
- Design responsivo e suporte para redução de movimento

Os textos, contactos, projetos e links ainda incluem informação provisória e devem ser personalizados com os dados reais do Bruno.

## Arquitetura

```text
vibe-portfolio/
├── AGENTS.md             Regras que futuros agentes devem respeitar
├── README.md             Visão, estado e instruções do projeto
├── src/
│   ├── data/apps.ts      Fonte única da lista de aplicações
│   ├── App.tsx           Páginas e componentes da interface
│   ├── styles.css        Sistema visual e comportamento responsivo
│   └── main.tsx          Entrada da aplicação
└── package.json          Scripts e dependências
```

Tecnologias utilizadas:

- React
- TypeScript
- Vite
- CSS puro, sem biblioteca de componentes

Não existe backend nesta fase. Isso é intencional: os projetos são dados estáticos e o portfólio deve continuar simples, rápido e barato de publicar.

## Executar localmente

Requer Node.js e npm instalados.

```bash
npm install
npm run dev
```

Abrir o endereço indicado pelo Vite, normalmente `http://localhost:5173`.

Outros comandos:

```bash
npm run check     # valida os tipos TypeScript
npm run build     # cria a versão de produção
npm run preview   # testa localmente a versão de produção
```

## Adicionar ou editar uma app

Toda a informação dos projetos está em `src/data/apps.ts`. Para adicionar uma app, inserir um novo objeto no array `projects`:

```ts
{
  id: 'nome-unico',
  name: 'Nome da app',
  description: 'Descrição curta e clara.',
  category: 'Web',
  status: 'Disponível',
  technologies: ['React', 'TypeScript'],
  url: 'https://endereco-da-app.example',
  repository: 'https://github.com/utilizador/repositorio',
  accent: '#b9f76e',
  icon: 'NA',
}
```

Os campos `url` e `repository` são opcionais. Se ainda não existir um link público, o cartão apresenta “Link em breve”.

## Separação entre projetos

A organização pretendida é:

```text
workspace/
├── vibe-portfolio/       Este projeto e o seu agente
├── app-exemplo-01/       Código e agente próprios
├── app-exemplo-02/       Código e agente próprios
└── app-exemplo-03/       Código e agente próprios
```

Um agente a trabalhar neste portfólio não deve abrir, copiar ou alterar o código das outras apps. Apenas deve atualizar os respetivos links e informações em `src/data/apps.ts`.

## Próximos passos

- Confirmar e substituir o texto de apresentação
- Adicionar fotografia ou avatar definitivo
- Confirmar os restantes contactos públicos
- Adicionar links reais de GitHub e LinkedIn
- Confirmar as apps que entram no lançamento
- Substituir o link local do VibeCheck pelo URL publicado
- Publicar a SideQuest e substituir o respetivo link local
- Criar imagens reais para os cartões dos projetos
- Adicionar metadados sociais e favicon
- Publicar o portfólio num endereço próprio

Esta lista deve ser atualizada à medida que o projeto evolui, para que qualquer pessoa ou agente consiga retomar o trabalho sem reler todo o código.

## Critério de conclusão de alterações

Antes de considerar uma alteração terminada:

1. Confirmar que desktop e mobile continuam utilizáveis.
2. Executar `npm run check`.
3. Executar `npm run build`.
4. Atualizar este README se a funcionalidade, arquitetura ou próximos passos tiverem mudado.
