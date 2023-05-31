import './globals.css';
import { Inter } from 'next/font/google';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Home | Commitan',
  description: 'Commitan Community',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-light-main text-sm text-light-text dark:bg-dark-base dark:text-dark-text`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
