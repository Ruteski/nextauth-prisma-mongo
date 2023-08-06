'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Icons } from './icons';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { useRouter } from 'next/navigation';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  classname?: string;
}

interface IUser {
  name: string;
  email: string;
  password: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function UserRegisterForm({ classname, ...props }: UserAuthFormProps) {
  const [data, setData] = useState<IUser>({
    name: '',
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const request = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const response = await request.json();

    console.log('USER REGISTER FORM', response);

    if (!request.ok) {
      toast({
        title: 'Oooops...',
        description: response.error,
        variant: 'destructive',
        action: (
          <ToastAction altText="Tente novamente">Tente novamente</ToastAction>
        ),
      });
    } else {
      router.push('/login');
    }

    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 5000);

    setData({
      name: '',
      email: '',
      password: '',
    });
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className={cn('grid gap-6', classname)} {...props}>
      {/* {JSON.stringify(data)} */}
      <form onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="name">
              Name
            </Label>
            <Input
              id="name"
              placeholder="digite seu nome"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              name="name"
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="senha"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Registrar
          </Button>
        </div>
      </form>
    </div>
  );
}
