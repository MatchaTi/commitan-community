import SecondaryNavbar from './secondaryNavbar';

export default function SecondaryLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className='mx-auto w-full max-w-[1440px] px-4 pb-10 pt-16 xl:px-20 2xl:px-0'>
      <SecondaryNavbar />
      {children}
    </section>
  );
}
