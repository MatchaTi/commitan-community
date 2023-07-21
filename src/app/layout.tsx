import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Home | Commitan',
  description: 'Commitan Community',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-base paragraphs text-sm antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
