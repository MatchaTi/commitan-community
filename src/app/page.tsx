import HomeLayout from '@/components/layout/homeLayout';

export default function Home() {
  return (
    <HomeLayout>
      <main className='order-2 mx-auto flex min-h-[2000px] w-full pt-16 sm:col-span-4 sm:col-start-1 sm:pt-24 xl:col-span-3 xl:col-start-2'>
        Hello
      </main>
    </HomeLayout>
  );
}
