[# 🛒 TechStore — Catálogo de Produtos Tecnológicos

Aplicação web que simula um catálogo de produtos tecnológicos, desenvolvida como projeto do Checkpoint 3 da disciplina de Front-End Design Engineering da FIAP.

---

## 👥 Integrantes

| Nome | RM | Responsabilidade |
|---|---|---|
| Manuella Rinaldi | 567915 | Desenvolvimento completo da aplicação (estrutura, componentes, páginas, API, deploy) |

---

## 🚀 Tecnologias Utilizadas

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router DOM](https://reactrouter.com/)
- Fetch API
- [Git](https://git-scm.com/) e [GitHub](https://github.com/)
- [Vercel](https://vercel.com/) (deploy)
- [My JSON Server](https://my-json-server.typicode.com/) (API)

---

## 📄 Páginas da Aplicação

| Página | Rota |
|---|---|
| Página inicial | `/` |
| Catálogo de produtos | `/produtos` |
| Detalhes do produto | `/produtos/:id` |
| Categorias | `/categorias` |
| Produtos por categoria | `/categorias/:categoria` |
| Sobre | `/sobre` |
| Página de erro | `*` |

---

## 🗂️ Estrutura do Projeto

```
src/
├── components/
│   ├── Button.tsx
│   ├── CategoryCard.tsx
│   ├── ErrorMessage.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Loading.tsx
│   ├── NavMenu.tsx
│   └── ProductCard.tsx
├── pages/
│   ├── About.tsx
│   ├── Categorias.tsx
│   ├── CategoryProducts.tsx
│   ├── Detalhes.tsx
│   ├── Erro.tsx
│   ├── Home.tsx
│   ├── NotFound.tsx
│   ├── Produtos.tsx
│   └── Sobre.tsx
├── routes/
│   └── AppRoutes.tsx
├── services/
│   └── api.ts
├── types/
│   └── Produto.ts
└── styles/
    └── global.css
```

---

## 🔌 API Utilizada

A aplicação consome dados de uma API REST criada com **My JSON Server**, hospedada no GitHub.

- **Repositório da API:** [techstore-api](https://github.com/manuellarinaldi/techstore-api)
- **URL base:** `https://my-json-server.typicode.com/manuellarinaldi/techstore-api`
- **Endpoint de produtos:** `/produtos`
- **Endpoint por ID:** `/produtos/:id`

### Estrutura do produto

```json
{
  "id": 1,
  "nome": "Notebook Pro X15",
  "categoria": "Notebooks",
  "preco": 6499.90,
  "imagem": "https://...",
  "descricaoCurta": "Notebook robusto para produtividade.",
  "descricaoDetalhada": "Descrição completa do produto..."
}
```

---

## ⚙️ Como Instalar e Executar Localmente

### Pré-requisitos

- Node.js 18+
- npm

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/manuellarinaldi/TechStorecp.git

# Entre na pasta do projeto
cd TechStorecp

# Instale as dependências
npm install

# Crie o arquivo de variáveis de ambiente
echo "VITE_API_URL=https://my-json-server.typicode.com/manuellarinaldi/techstore-api" > .env

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse em: `http://localhost:5173`

---

## 🔗 Links

- 📁 **Repositório GitHub:** [github.com/manuellarinaldi/TechStorecp](https://github.com/manuellarinaldi/TechStorecp)
- 🌐 **Deploy na Vercel:** [tech-storecp-7kyj.vercel.app](https://tech-storecp-7kyj.vercel.app)

---

