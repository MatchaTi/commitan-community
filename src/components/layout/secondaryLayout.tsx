import Footer from './footer';
import SecondaryNavbar from './secondaryNavbar';

export default function SecondaryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SecondaryNavbar />
      <section className='mx-auto w-full max-w-[1440px] px-4 pb-10 pt-16 text-base xl:px-20 2xl:px-0'>
        {children}
      </section>
      <Footer />
    </>
  );
}
