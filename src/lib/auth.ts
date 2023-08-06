// @ts-nocheck

import { NextAuthOptions } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db, db as prisma } from '@/lib/db';
import bcrypt from 'bcrypt';

import GitHubProvider from 'next-auth/providers/github';

export const authOptions: NextAuthOptions = {
  // @see https://github.com/prisma/prisma/issues/16117
  adapter: PrismaAdapter(db as any),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_SECRET_ID!,
    }),
    CredentialProvider({
      name: 'credentials',
      credentials: {
        name: {
          label: 'Name',
          type: 'text',
          placeholder: 'digite seu nome',
        },
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'digite seu email',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '******',
        },
      },
      async authorize(credentials, req): Promise<any> {
        console.log('Authorize method', credentials);

        if (!credentials.email || !credentials.password) {
          throw new Error('Dados de login necessários!');
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user.hashedPassword) {
          throw new Error(
            'Usuário não registrado através de credenciais(email e senha)!',
          );
        }

        const matchPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword,
        );

        if (!matchPassword) {
          throw new Error('E-mail ou senha inválido(s)!');
        }

        return user;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.SECRET,
  debug: process.env.NODE_ENV === 'development',
  pages: {
    signIn: '/login',
  },
};
