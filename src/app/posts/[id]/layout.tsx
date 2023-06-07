import HomeLayout from '@/components/layout/homeLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Post | Commitan',
  description: 'Commitan Community',
};

export default function DetailPostLayout({ children }: { children: React.ReactNode }) {
  return <HomeLayout>{children}</HomeLayout>;
}
