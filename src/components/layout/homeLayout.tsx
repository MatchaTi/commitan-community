import Navbar from './navbar';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className='mx-auto w-full max-w-[1440px] xl:px-20 2xl:px-0'>
      <div className='grid w-full px-4 sm:grid-cols-3 sm:pl-20 xl:grid-cols-5 xl:px-0 xl:pl-0'>
        <Navbar />
        {children}
      </div>
    </section>
  );
}
