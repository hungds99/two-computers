'use client';

import { useState } from 'react';

export function ClientComponentA({
  children,
}: {
  children?: React.ReactNode;
  otherServerComponent?: React.ReactNode;
}) {
  console.info('ClientComponent A');

  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col items-center gap-2 border-green-500 bg-slate-700 p-4'>
      <h2 className='text-xl font-bold text-green-500'>Client Component A</h2>
      <div className='flex flex-col items-center gap-1'>
        {children}
        <button
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => setCount(count + 1)}
        >
          Positive Current value: {count}
        </button>
      </div>
    </div>
  );
}

export function ClientComponentB({
  children,
  otherServerComponent,
  user,
}: {
  children?: React.ReactNode;
  otherServerComponent?: React.ReactNode;
  user?: any;
}) {
  console.info('ClientComponent B');

  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col items-center gap-2 border-green-500 bg-slate-700 p-4'>
      <h2 className='text-xl font-bold text-green-500'>Client Component B</h2>
      <div className='flex flex-col items-center gap-1'>
        {children}
        <button
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => setCount(count - 1)}
        >
          Negative Current value: {count}
        </button>
      </div>
    </div>
  );
}
