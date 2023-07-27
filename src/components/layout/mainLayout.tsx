import Navbar from './navbar';
import Sidebar from './sidebar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='grid gap-4 px-4 pb-10 sm:grid-cols-12 lg:px-0'>
      <Navbar />
      <Sidebar />
      {children}
    </main>
  );
}
