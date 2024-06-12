'use client';

import Link from 'next/link';
import { ClientComponentB } from '../components/client';

export default function Page() {
  console.info('ClientPageComponent');

  return (
    <main className='flex min-h-screen flex-col items-center p-5 gap-10'>
      <h1 className='text-6xl font-bold'>Navigation Full Page - Client Component</h1>
      <ClientComponentB />
      <div className='flex flex-col gap-2'>
        <Link href='/' prefetch={false} className='text-blue-500 hover:text-blue-700'>
          Back to Home
        </Link>
      </div>
    </main>
  );
}
