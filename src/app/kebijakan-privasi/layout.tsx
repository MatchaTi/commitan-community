import SecondaryLayout from '@/components/layout/secondaryLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi | Commitan',
  description: 'Commitan Community',
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <SecondaryLayout>{children}</SecondaryLayout>;
}
