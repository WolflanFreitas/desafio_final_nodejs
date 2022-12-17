# Desafio final do bootcamp Node JS IGTI

## Comandos para executar o projeto

    1. Instalar as dependências do projeto: `yarn install` ou `npm install` na raiz do projeto;
    2. Levantar o servidor: `yarn dev` ou `npm dev`;
    3. End points em: `http://localhost:3000`.

## Criar migration sequelize-cli

    1. Criar migration: `npx sequelize-cli migration:create --name=create-grades`;
    2. Executar migration: `npx sequelize-cli.

### Refresh database sequelize-cli

    1. Remover todas as tabelas: `npx sequelize-cli db:migrate:undo:all`;
    2. Criar todas as tabelas: `npx sequelize-cli db:migrate`.

## Criar migração Prisma JS

    1. `npx prisma migrate dev --name init`
