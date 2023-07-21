import SecondaryLayout from '@/components/layout/secondaryLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami | Commitan',
  description: 'Commitan Community',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <SecondaryLayout>{children}</SecondaryLayout>;
}
