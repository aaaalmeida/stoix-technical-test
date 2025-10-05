# Projeto Fullstack - NestJS + React + MongoDB + JWT

Este projeto é uma aplicação Fullstack desenvolvida com NestJS e React, utilizando MongoDB Atlas e JWT para autenticação.
O projeto segue a Clean Architecture, e foi desenvolvido inicialmente como parte de um teste técnico para uma empresa — aproveitado também como estudo e prática das tecnologias utilizadas.

Durante um tempo limitado, o projeto estará hospedado no [Render](https://stoix-technical-test.onrender.com/)

## Estrutura do Projeto

O repositório utiliza Lerna para gerenciar múltiplos pacotes:
``
.
├── packages/
│   ├── backend/
│   └── frontend/
├── .env.example
├── lerna.json
├── package.json
└── README.md
``

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

Node.js
npm
Lerna (opcional, pode rodar com npx)

## Configuração do Ambiente

Instale as dependências:

``
npm install
``

Crie o arquivo .env a partir do modelo:

``
cp .env.example .env
``

Edite o arquivo .env e preencha com seus valores:

``
MONGODB_USERNAME=
MONGODB_PASSWORD=
MONGODB_URL=
JWT_SECRET=
LOCAL_BACKEND_URL=
REMOTE_BACKEND_URL=
``

## Build e Execução
### Build geral

Compila o backend e frontend:

``
npm run build
``

### Desenvolvimento

Executa o backend e frontend em modo de desenvolvimento:

``
npm run start:dev
``

### Somente o backend

``
npm run start:backend
``

### Somente o frontend

``
npm run start:frontend
``

### Produção (backend compilado)

``
npm run start:prod:backend
``

A execução do projeto pode ser observada nas portas 3000 (backend) e 5173 (frontend)

## Autenticação JWT

A autenticação utiliza JWT (JSON Web Token).
Ao fazer login, o backend retorna um token que deve ser armazenado no localStorage do navegador.
Esse token é enviado em todas as requisições seguintes no cabeçalho HTTP:

``
Authorization: Bearer <token>
``

## Tecnologias Utilizadas

- Typescript
- NestJS
- MongoDB Atlas
- Mongoose
- JWT
- React
- Axios
- Vite
- Lerna
- Render

## Arquitetura

O projeto segue princípios da Clean Architecture, separando responsabilidades em camadas:

## Licença

Este projeto foi desenvolvido apenas para fins educacionais e de demonstração técnica.
Não é recomendado o uso em produção.
