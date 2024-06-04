'use client';

import { useState } from 'react';

export default function ClientComponent({
  children,
  otherServerComponent,
}: {
  children: React.ReactNode;
  otherServerComponent: React.ReactNode;
}) {
  console.info('ClientComponent');
  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col items-center gap-2 border-green-500 bg-slate-700 p-4'>
      <h2 className='text-xl font-bold text-green-500'>Client Component</h2>
      <div className='flex flex-col items-center gap-1'>
        {children}
        <button
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => setCount(count + 1)}
        >
          Current value: {count}
        </button>
        {otherServerComponent}
      </div>
    </div>
  );
}
