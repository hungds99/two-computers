import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { ClientComponentA } from './components/client';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex'>
          <aside className='w-1/4 bg-gray-200'>
            <ul className='space-y-2 p-3'>
              <li>
                <Link
                  href='/server-page'
                  prefetch={false}
                  className='text-blue-500 hover:text-blue-700'
                >
                  🌐 Server Page
                </Link>
              </li>
              <li>
                <Link
                  href='/client-page'
                  prefetch={false}
                  className='text-blue-500 hover:text-blue-700'
                >
                  🌐 Client Page
                </Link>
              </li>
            </ul>
            <ClientComponentA />
          </aside>
          <main className='w-3/4 bg-white'>{children}</main>
        </div>
      </body>
    </html>
  );
}
