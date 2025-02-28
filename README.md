# Projeto: Jornada do Cliente

Sistema para controle e acompanhamento das atividades realizadas durante a execução de um projeto

## 🔨 Funcionalidades do Sistema

- CRUD de projetos
- CRUD de usuários
- CRUD de etapas do projeto

## ✔️ Técnicas e Tecnologias Utilizadas

As principais técnicas e tecnologias abordadas são:

- `Next.js`: Framework para React com recursos de SSR.
- `Fetch API`: Realizar requisições HTTP para buscar dados.
- `React Components`: Desenvolvimento de componentes reutilizáveis.
- `CSS Modules`: Estilização modular e escopada.
- `Client-Side Navigation`: Navegação eficiente entre páginas com Next.js.

## 🛠️ Abrir e Rodar o Projeto

Após baixar o projeto, você pode abrir com seu editor de código preferido. Siga estes passos:

- Abra o terminal no diretório do projeto.
- Execute `npm install` para instalar as dependências.
- Inicie o servidor de desenvolvimento com `npm run dev` ou `yarn dev`
- Acesse `http://localhost:3000` no navegador para ver o projeto.

- Criar o banco de dados Postgres
- Atualizar as variáveis de conexão no arquivo .env
- Executar o comando para gerar a migração para o banco de dados

## 📚 Utilizando migrations

Utilização do prisma para gerenciamento das classes do sistema e tabelas no banco de dados

Primeiro comando para vincular o prisma ao banco de dados
npx prisma migrate dev --name init                              // gerar a migração para o banco de dados

Ex: Precisamos alterar a tabela Usuário e adicionar o campo password. Adicione o campo desejado e execute o comando abaixo
- npx prisma migrate dev --name add-password-nullable-column    // atualiza a tabela no bd
- npm run prisma:generate                                       // atualiza o prisma client

- npm run prisma:seed                                           // caso exista algum valor inicial

- npx prisma studio                                             // consultar o banco de dados
