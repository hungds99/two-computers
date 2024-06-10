import { fetchUser } from '../lib/data';

export async function ServerComponentA() {
  console.info('ServerComponent A');

  const user = await fetchUser();

  return (
    <div className='bg-blue-500 p-2'>
      <h1 className='text-2xl font-bold text-white'>Server Component A</h1>
      <p className='text-black'>Random username: {user.name}</p>
    </div>
  );
}

export async function ServerComponentB() {
  console.info('ServerComponent B');

  return (
    <div className='bg-blue-500 p-2'>
      <h1 className='text-2xl font-bold text-white'>Server Component B</h1>
    </div>
  );
}
