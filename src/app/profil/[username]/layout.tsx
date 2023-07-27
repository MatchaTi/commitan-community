import MainLayout from '@/components/layout/mainLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profil | Commitan',
  description: 'Commitan Community',
};

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-[2000px]'>
      <MainLayout>{children}</MainLayout>
    </div>
  );
}
