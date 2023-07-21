import SecondaryLayout from '@/components/layout/secondaryLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peraturan | Commitan',
  description: 'Commitan Community',
};

export default function RulesLayout({ children }: { children: React.ReactNode }) {
  return <SecondaryLayout>{children}</SecondaryLayout>;
}
