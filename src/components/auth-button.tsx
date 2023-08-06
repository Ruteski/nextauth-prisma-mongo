'use client';

import { cn } from '@/lib/utils';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
export default function AuthButton({ page }: { page: string }) {
  const { data: session, status } = useSession();

  console.log(session);

  const isAuthenticated = status === 'authenticated';

  return (
    <>
      {!isAuthenticated ? (
        <Link
          href={page === 'register' ? '/login' : 'register'}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'absolute right-4 top-4 md:right-8 md:top-8',
          )}
        >
          {page === 'register' ? 'Entrar' : 'Criar Conta'}
        </Link>
      ) : (
        <Button
          onClick={() => signOut({ callbackUrl: '/' })}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'absolute right-4 top—4 md:right—5 md:top-8',
          )}
        >
          Sair
        </Button>
      )}
    </>
  );
}
