import Navbar from '@/components/layout/navbar';
import Sidebar from '@/components/layout/sidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profil | Commitan',
  description: 'Commitan Community',
};

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <section className='mx-auto w-full max-w-[1440px] xl:px-20 2xl:px-0'>
        <div className='grid w-full px-4 sm:grid-cols-3 sm:pl-20 xl:grid-cols-5 xl:px-0 xl:pl-0'>
          <Navbar />
          <Sidebar />
          {children}
        </div>
      </section>
    </div>
  );
}
