import { getCurrentUser } from '@/lib/session';
import ClientComponentAuth from '@/components/client-component-auth';
import ServerComponentAuth from '@/components/server-component-auth';

export default async function Home() {
  const user = await getCurrentUser();

  return (
    <>
      <ClientComponentAuth />
      <ServerComponentAuth />
    </>
  );
}
