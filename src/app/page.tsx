import Link from 'next/link';
import { ClientComponentA, ClientComponentB } from './components/client';
import { ServerComponentA, ServerComponentB } from './components/server';

export default async function Page() {
  console.log('HomePageComponent');

  const randomID = Math.floor(Math.random() * 10);
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${randomID}`, {
    cache: 'no-cache',
  });
  const user = await response.json();

  return (
    <main className='flex min-h-screen flex-col items-center p-5 gap-10'>
      <h1 className='text-6xl font-bold'>Full Page - Server Component</h1>
      <p className='text-2xl'>Random username: {user.name}</p>
      <div className='flex flex-col gap-2'>
        <ClientComponentA>
          <ServerComponentA />
          <ServerComponentB />
        </ClientComponentA>
        <ClientComponentB />
        <Link href='/navigation' prefetch={false} className='text-blue-500 hover:text-blue-700'>
          Go to navigation
        </Link>
      </div>
    </main>
  );
}
