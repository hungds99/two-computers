export default async function ServerComponent() {
  console.info('ServerComponent');
  return (
    <div className='bg-blue-500 p-2'>
      <h1 className='text-2xl font-bold text-white'>Server Component</h1>
    </div>
  );
}
