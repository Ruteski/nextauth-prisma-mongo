// @ts-nocheck

import { NextAuthOptions } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from '@/lib/db';

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

        const user = {
          email: 'teste@lruteski.com',
          password: '123456',
          name: 'Lincoln Ruteski',
        };

        return user;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.SECRET,
  debug: process.env.NODE_ENV === 'development',
};
