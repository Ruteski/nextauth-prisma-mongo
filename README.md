This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Comandos utilizados

- Criação do projeto -> npx create-next-app@latest <nome-projeto> --typescript --tailwind --eslint
- Baixar/iniciar o shadcn -> npx shadcn-ui@latest init
- Instalação prisma -> yarn add prisma --save-dev
- -> inicializar o prisma com provider do mongo -> npx prisma init --datasource-provider mongodb
  Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Define models in the schema.prisma file.
3. Run prisma generate to generate the Prisma Client. You can then start querying your database.
4. npx prisma db push
5. instalar client prisma -> yarn add @prisma/client
6. npx prisma generate
- instalar next auth -> yarn add next-auth
- instalar o adapter do next auth do prisma -> yarn add @prisma/client @auth/prisma-adapter 

More information in our documentation:                                                                                                                 
https://pris.ly/d/getting-started



## Comandos do shadcn
- ### listar componentes para instalação
-> npx shadcn-ui@latest add

- ### add button
-> npx shadcn-ui@latest add button 

- ### add label
-> npx shadcn-ui@latest add label

- ### add input
-> npx shadcn-ui@latest add input
