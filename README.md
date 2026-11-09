# 🧘‍♀️ Átmico Sagrado - Plataforma Web Full-Stack

Uma plataforma web moderna e responsiva desenvolvida para hospedar conteúdo, artigos (blog) e serviços focados em desenvolvimento pessoal e bem-estar. A aplicação foi construída com foco extremo em performance, componentização e integração fluida de banco de dados no front-end.

## 🚀 Arquitetura e Engenharia do Projeto
O sistema foi desenhado no formato de *Single Page Application* (SPA) utilizando a stack mais moderna do ecossistema React. Toda a camada de requisição de dados foi otimizada com estratégias de cache e revalidação (Stale-While-Revalidate).

### 🛠️ Core Tech Stack
*   **Front-end Core:** React 18 (construído em cima do Vite para *builds* ultrarrápidos e *Hot Module Replacement*).
*   **Linguagem:** TypeScript estrito, garantindo segurança de tipos (Type Safety) ponta a ponta.
*   **Estilização e UI:** Tailwind CSS integrado com os componentes headless do Shadcn UI (Radix UI) e animações baseadas no Framer Motion.
*   **Backend e Banco de Dados:** Integração direta com Supabase (PostgreSQL), gerenciando o *headless CMS* para as postagens do blog.
*   **State Management e Fetching:** React Query (TanStack Query v5) para consumo das APIs do Supabase, cacheamento de requisições e paginação fluida.
*   **Roteamento:** React Router DOM v6.
*   **AI-Augmented Development:** Prototipagem e desenvolvimento acelerado utilizando Google Antigravity e Cursor, orquestrando a IA para geração de componentes base, enquanto a arquitetura, regras de negócio e integração com Supabase foram guiadas por fundamentos sólidos de engenharia de software.

## 📂 Estrutura de Diretórios
A arquitetura do projeto (dentro de `src/`) segue os padrões de componentização modular:
*   `/components`: Componentes isolados e reutilizáveis (NavBar, Footer, Seções da Home, etc).
*   `/components/ui`: Biblioteca de componentes base (Shadcn UI) configurada com Tailwind.
*   `/hooks`: Hooks customizados do React.
*   `/integrations/supabase`: Configuração do cliente do Supabase e tipagens geradas do banco de dados.
*   `/pages`: Estrutura de rotas e visualizações da aplicação.
*   `/lib`: Funções utilitárias.

## 💡 Destaques de Implementação
*   **Integração Supabase + React Query:** A seção de artigos (Blog) busca os dados da tabela `posts` no Supabase, filtrando dinamicamente posts válidos (`is null` na coluna de vídeo) e os ordenando cronologicamente, tudo gerenciado assincronamente sem travamento da UI.
*   **Motion UI:** Utilização inteligente da biblioteca Framer Motion para revelar o conteúdo enquanto o usuário faz a rolagem da página (scroll-triggered animations).

## 🔗 Acesso ao Projeto
🌐 **Site Oficial em Produção:** [atmicosagrado.com.br](https://atmicosagrado.com.br)
