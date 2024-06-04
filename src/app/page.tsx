import ClientComponent from './components/client';
import ServerComponent from './components/server';

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-6xl font-bold'>Hello world</h1>
      <div className='flex flex-col gap-2'>
        <ClientComponent otherServerComponent={<ServerComponent />}>
          <ServerComponent />
          <ServerComponent />
        </ClientComponent>
      </div>
    </main>
  );
}
