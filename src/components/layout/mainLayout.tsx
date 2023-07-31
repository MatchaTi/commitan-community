import Navbar from './navbar';
import Sidebar from './sidebar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='grid w-full gap-4 px-4 pb-10 sm:grid-cols-12 xl:px-0 xl:pl-[3.35rem]'>
      <Navbar />
      <Sidebar />
      {children}
    </main>
  );
}
