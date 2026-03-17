# Codrillo Web App

> Portfólio de app web React + TypeScript + Vite com gerenciador de snippets, UI elegante e modo escuro.

## 🚀 Sobre o projeto

`codrillo` é um projeto de front-end que demonstra um app de gerenciamento de trechos de código (snippets), com interface moderna e responsiva. Foi construído com:

- Vite
- React 18 + TypeScript
- Chakra UI v3
- React Router DOM
- Shiki para destaque de código

## 🧩 Estrutura principal

- `src/main.tsx` - ponto de entrada
- `src/app/App.tsx` - componente raiz (rotas + layout)
- `src/app/pages/` - páginas principais
  - `home/` - página inicial com hero, features e snippets
  - `signin/`, `signup/` - fluxo de autenticação (mock de exemplo)
- `src/components/` - componentes reutilizáveis (Header, Footer, UI customizada)
- `src/routes/Routes.tsx` - definição das rotas
- `src/style/global.css` - estilos globais

## 🎯 Funcionalidades incluídas

- Layout completo para apresentação de funcionalidades
- Componentes responsivos com Chakra UI
- Controles de modo claro/escuro
- Painéis de snippets com destaque de sintaxe
- Formulários de login/cadastro e fluxo de recuperação de senha (UI)
- Navegação com React Router

## 🛠️ Instalação e execução

### Prérequisitos

- Node.js 18+ ou 20+
- npm ou pnpm

### Passos

```bash
cd codrillo
npm install
npm run dev
```

Acesse: `http://localhost:5173`

### Build para produção

```bash
npm run build
npm run preview
```

## 🔎 Lint e formatação

- ESLint: `npm run lint`

## 🧪 Testes

Ainda não há suíte de testes configurada, mas a base do projeto é compatível com Vitest e React Testing Library.

## 📦 Dependências principais

- `react`, `react-dom`
- `react-router-dom`
- `@chakra-ui/react`, `@chakra-ui/icons`
- `framer-motion` (se houver animações UI)
- `shiki` (syntax highlighting)

## 🛠️ Futuras melhorias sugeridas

- Autenticação real com backend (JWT / Auth0 / Firebase)
- CRUD de snippets com API e banco de dados
- Paginação e filtros de pesquisa em snippets
- Testes unitários e de integração
- Internacionalização (i18n)

## 🤝 Contribuição

1. Fork do repositório
2. Crie uma branch: `git checkout -b feat/minha-idea`
3. Faça commits significativos
4. Abra PR com descrição e screenshots

## 📄 Licença

MIT © [Seu Nome]

---

> Dica: personalize os textos de `Sobre` e `Futuras melhorias` com suas metas e diferencial técnico.
